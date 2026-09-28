# CHECP — Phase 2 Architecture Blueprint: Admin Portal & Dynamic CMS

This document specifies the technical roadmap for evolving the current Phase 1 static production website into a full-featured, CMS-driven platform in **Phase 2**.

---

## 1. Architectural Philosophy: The Decoupled Provider Pattern

In Phase 1, the public-facing Angular frontend was deliberately architected with strict dependency injection:

```
[UI Components] ──(Signals)──> [Angular Services] ──(Tokens)──> [Repositories]
                                                                        │
                                             ┌──────────────────────────┴──────────────────────────┐
                                             ▼                                                     ▼
                                 [StaticProjectRepository]                             [ApiProjectRepository]
                                        (Phase 1)                                             (Phase 2)
```

Because all components inject high-level services (`ProjectService`, `ServicesService`, `IndustryService`, etc.) which resolve interfaces via Angular `InjectionToken`, **transitioning to Phase 2 requires ZERO changes to public components**.

---

## 2. Target Phase 2 Architecture

```
                                  ┌──────────────────────────┐
                                  │      Cloudflare CDN      │
                                  └─────────────┬────────────┘
                                                │
                 ┌──────────────────────────────┴──────────────────────────────┐
                 ▼                                                             ▼
     ┌────────────────────────┐                                   ┌────────────────────────┐
     │   CHECP Public Site    │                                   │   CHECP Admin Portal   │
     │  (Angular Standalone)  │                                   │  (Lazy-loaded /admin)  │
     └───────────┬────────────┘                                   └────────────┬───────────┘
                 │                                                             │
                 │ JSON HTTP API                                               │ REST / GraphQL
                 ▼                                                             ▼
     ┌─────────────────────────────────────────────────────────────────────────────────────┐
     │                             CHECP Backend API Gateway                               │
     │                      (NestJS / Go / Fastify / Node.js)                             │
     └──────────────────────────┬──────────────────────────┬───────────────────────────────┘
                                │                          │
                                ▼                          ▼
                   ┌────────────────────────┐ ┌────────────────────────┐
                   │   PostgreSQL Database  │ │    S3 Media Storage    │
                   │   (Prisma / Drizzle)   │ │  (Cloudflare R2 / AWS) │
                   └────────────────────────┘ └────────────────────────┘
```

---

## 3. Future Entity Models & Schemas

The database schema will map directly to the TypeScript models already defined in `src/app/core/models/index.ts`:

### A. `projects`
- `id`: UUID (Primary Key)
- `slug`: VARCHAR(120) UNIQUE
- `name`: VARCHAR(200)
- `location`: VARCHAR(150)
- `sector`: VARCHAR(100)
- `project_type`: VARCHAR(100)
- `year`: VARCHAR(10)
- `client`: VARCHAR(150) (Optional)
- `short_description`: TEXT
- `description`: TEXT
- `featured_image`: VARCHAR(500) (CDN URL)
- `gallery`: JSONB (Array of image URLs)
- `scope`: JSONB (Array of string items)
- `metrics`: JSONB (Array of `{ label: string, value: string }`)
- `technical_specs`: JSONB (Array of `{ label: string, value: string }`)
- `approach`: TEXT
- `outcome`: TEXT
- `featured`: BOOLEAN DEFAULT false
- `status`: ENUM ('DRAFT', 'PUBLISHED', 'ARCHIVED')
- `created_at` / `updated_at`: TIMESTAMPTZ

### B. `services`
- `id`: UUID (Primary Key)
- `slug`: VARCHAR(100) UNIQUE
- `name`: VARCHAR(150)
- `short_description`: TEXT
- `description`: TEXT
- `image`: VARCHAR(500)
- `capabilities`: JSONB
- `methodology`: JSONB
- `related_project_ids`: UUID[]
- `order_index`: INTEGER DEFAULT 0

### C. `industries`
- `id`: UUID (Primary Key)
- `slug`: VARCHAR(100) UNIQUE
- `name`: VARCHAR(150)
- `subtitle`: VARCHAR(250)
- `description`: TEXT
- `featured_image`: VARCHAR(500)
- `capabilities`: JSONB
- `key_challenges`: JSONB
- `highlights`: JSONB
- `order_index`: INTEGER DEFAULT 0

### D. `articles` (Insights)
- `id`: UUID (Primary Key)
- `slug`: VARCHAR(150) UNIQUE
- `title`: VARCHAR(250)
- `category`: VARCHAR(50)
- `excerpt`: TEXT
- `featured_image`: VARCHAR(500)
- `content`: JSONB / TEXT
- `read_time`: VARCHAR(30)
- `author_name`: VARCHAR(100)
- `author_role`: VARCHAR(100)
- `tags`: VARCHAR(50)[]
- `seo_title`: VARCHAR(150)
- `seo_description`: VARCHAR(250)
- `status`: ENUM ('DRAFT', 'PUBLISHED')
- `published_at`: TIMESTAMPTZ

### E. `careers` (Job Vacancies)
- `id`: UUID
- `title`: VARCHAR(150)
- `department`: VARCHAR(100)
- `location`: VARCHAR(100)
- `type`: VARCHAR(50) ('Full-Time', 'Contract')
- `experience`: VARCHAR(50)
- `description`: TEXT
- `responsibilities`: JSONB
- `requirements`: JSONB
- `active`: BOOLEAN DEFAULT true

### F. `contact_submissions` (Enquiries)
- `id`: UUID
- `full_name`: VARCHAR(150)
- `company`: VARCHAR(150)
- `email`: VARCHAR(150)
- `phone`: VARCHAR(50)
- `project_type`: VARCHAR(100)
- `project_location`: VARCHAR(150)
- `message`: TEXT
- `status`: ENUM ('NEW', 'IN_REVIEW', 'RESPONDED', 'ARCHIVED')
- `assigned_to`: UUID (Admin User)
- `created_at`: TIMESTAMPTZ

### G. `site_settings` & `safety_records`
- Single-row configuration tables storing verified safety incident stats, compliance audit rates, regional office details, and social links.

---

## 4. Implementation Steps for Phase 2

### Step 1: Create `Api*Repository` Implementations
Create `src/app/core/repositories/api-project.repository.ts`:
```typescript
import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';
import { IProjectRepository } from './project.repository';
import { Project } from '../models';

@Injectable({ providedIn: 'root' })
export class ApiProjectRepository implements IProjectRepository {
  private http = inject(HttpClient);
  private apiUrl = '/api/v1/projects';

  async getAll(): Promise<Project[]> {
    return firstValueFrom(this.http.get<Project[]>(this.apiUrl));
  }

  async getBySlug(slug: string): Promise<Project | undefined> {
    return firstValueFrom(this.http.get<Project>(`${this.apiUrl}/${slug}`));
  }

  async getFeatured(): Promise<Project[]> {
    return firstValueFrom(this.http.get<Project[]>(`${this.apiUrl}?featured=true`));
  }

  async getRelated(slug: string, limit = 2): Promise<Project[]> {
    return firstValueFrom(this.http.get<Project[]>(`${this.apiUrl}/${slug}/related?limit=${limit}`));
  }
}
```

### Step 2: Swap the Injection Tokens in `app.config.ts`
Simply update the providers array:
```typescript
export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(),
    // Swap Static with Api
    { provide: PROJECT_REPOSITORY_TOKEN, useClass: ApiProjectRepository },
    { provide: SERVICES_REPOSITORY_TOKEN, useClass: ApiServicesRepository },
    { provide: INDUSTRY_REPOSITORY_TOKEN, useClass: ApiIndustryRepository },
    { provide: ARTICLE_REPOSITORY_TOKEN, useClass: ApiArticleRepository },
    { provide: COMPANY_REPOSITORY_TOKEN, useClass: ApiCompanyRepository }
  ]
};
```

### Step 3: Add the `/admin` Route
In `app.routes.ts`:
```typescript
{
  path: 'admin',
  canActivate: [AuthGuard],
  loadChildren: () => import('./admin/admin.routes').then(m => m.ADMIN_ROUTES)
}
```

### Step 4: Admin Portal Features
The Admin Portal will manage:
1. **Projects Manager**: Add, edit, reorder galleries, upload blueprints, toggle featured status.
2. **Services & Industries Editor**: Update capabilities and methodologies.
3. **Safety Governance**: Update verified Lost Time Incidents, audit rates, and certifications.
4. **Insights Publisher**: Markdown / rich text article editor with tag management and SEO metadata preview.
5. **Careers Board**: Post and deactivate open job requisitions.
6. **Inquiry CRM**: View incoming project inquiries with status tagging, note tracking, and export to CSV.
7. **Media Vault**: S3/R2 direct file uploader with automated WebP compression and dimension extraction.
