import { Component, inject, signal, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { ProjectService } from '../../core/services/project.service';
import { SeoService } from '../../core/services/seo.service';
import { BreadcrumbsComponent } from '../../shared/components/breadcrumbs.component';
import { Project } from '../../core/models';

@Component({
  selector: 'app-project-detail',
  standalone: true,
  imports: [RouterLink, BreadcrumbsComponent],
  template: `
    @if (project(); as p) {
      <div class="pt-24 lg:pt-32 pb-20">
        
        <!-- Header & Breadcrumbs -->
        <section class="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col gap-6">
          <app-breadcrumbs [items]="[{ label: 'Projects', url: '/projects' }, { label: p.name }]" />

          <div class="flex flex-col gap-3 pt-4">
            <div class="flex items-center gap-2">
              <span class="w-2 h-2 bg-secondary inline-block"></span>
              <span class="font-headline text-[11px] uppercase tracking-[0.2em] text-secondary font-bold">
                {{ p.sector }}
              </span>
            </div>
            <h1 class="font-headline text-fluid-h2 text-primary font-medium max-w-4xl">
              {{ p.name }}
            </h1>
          </div>

          <p class="font-body text-fluid-body text-on-surface-variant max-w-3xl leading-relaxed">
            {{ p.shortDescription }}
          </p>

          <!-- Key Project Parameters Bar -->
          <div class="grid grid-cols-2 md:grid-cols-4 gap-6 py-6 border-y border-outline-variant mt-2 font-headline text-[12px]">
            <div>
              <span class="text-on-surface-variant uppercase tracking-wider block text-[10px]">Location</span>
              <span class="text-primary font-semibold text-[15px]">{{ p.location }}</span>
            </div>
            <div>
              <span class="text-on-surface-variant uppercase tracking-wider block text-[10px]">Sector / Discipline</span>
              <span class="text-primary font-semibold text-[15px]">{{ p.sector }}</span>
            </div>
            <div>
              <span class="text-on-surface-variant uppercase tracking-wider block text-[10px]">Delivery Year</span>
              <span class="text-primary font-semibold text-[15px]">{{ p.year }}</span>
            </div>
            <div>
              <span class="text-on-surface-variant uppercase tracking-wider block text-[10px]">Client / Stakeholder</span>
              <span class="text-primary font-semibold text-[15px]">{{ p.client || 'Institutional Partner' }}</span>
            </div>
          </div>
        </section>

        <!-- Project Hero Visual -->
        <section class="max-w-7xl mx-auto px-6 lg:px-8 pt-10 pb-16">
          <div class="w-full aspect-[21/10] overflow-hidden bg-surface-container border border-outline-variant">
            <img 
              [src]="p.featuredImage" 
              [alt]="p.name" 
              class="w-full h-full object-cover"
            />
          </div>
        </section>

        <!-- Editorial Content: Overview & Scope -->
        <section class="max-w-7xl mx-auto px-6 lg:px-8 py-10 grid grid-cols-1 lg:grid-cols-12 gap-12">
          <!-- Left: Narrative Overview -->
          <div class="lg:col-span-7 flex flex-col gap-8">
            <div class="flex flex-col gap-4">
              <span class="font-headline text-[11px] uppercase tracking-[0.18em] text-secondary font-bold">PROJECT OVERVIEW</span>
              <p class="font-body text-[16px] text-on-surface-variant leading-relaxed">
                {{ p.description }}
              </p>
            </div>

            @if (p.approach) {
              <div class="flex flex-col gap-3 pt-4 border-t border-outline-variant">
                <span class="font-headline text-[11px] uppercase tracking-[0.18em] text-secondary font-bold">ENGINEERING APPROACH</span>
                <h2 class="font-headline text-[22px] font-medium text-primary">Disciplined execution and constructability foresight</h2>
                <p class="font-body text-[15px] text-on-surface-variant leading-relaxed">
                  {{ p.approach }}
                </p>
              </div>
            }

            @if (p.outcome) {
              <div class="flex flex-col gap-3 pt-4 border-t border-outline-variant">
                <span class="font-headline text-[11px] uppercase tracking-[0.18em] text-secondary font-bold">OUTCOME &amp; PERFORMANCE</span>
                <p class="font-body text-[15px] text-on-surface-variant leading-relaxed">
                  {{ p.outcome }}
                </p>
              </div>
            }
          </div>

          <!-- Right: Scope & Technical Specs -->
          <div class="lg:col-span-5 flex flex-col gap-8">
            <!-- Scope Checklist -->
            <div class="bg-surface-container-low p-8 border border-outline-variant flex flex-col gap-5">
              <span class="font-headline text-[11px] uppercase tracking-[0.18em] text-secondary font-bold">SCOPE OF WORK</span>
              <ul class="flex flex-col divide-y divide-outline-variant">
                @for (item of p.scope; track item) {
                  <li class="py-3 flex items-start gap-3 text-[14px] text-primary">
                    <span class="material-symbols-outlined text-secondary text-[18px] shrink-0 mt-0.5">check</span>
                    <span>{{ item }}</span>
                  </li>
                }
              </ul>
            </div>

            <!-- Technical Specifications -->
            @if (p.technicalSpecs && p.technicalSpecs.length > 0) {
              <div class="bg-primary text-white p-8 border border-outline-variant flex flex-col gap-5">
                <span class="font-headline text-[11px] uppercase tracking-[0.2em] text-secondary font-bold">TECHNICAL PARAMETERS</span>
                <div class="flex flex-col divide-y divide-white/10">
                  @for (spec of p.technicalSpecs; track spec.label) {
                    <div class="py-2.5 flex justify-between items-baseline text-[13px]">
                      <span class="text-white/70 font-body">{{ spec.label }}</span>
                      <span class="text-white font-headline font-semibold">{{ spec.value }}</span>
                    </div>
                  }
                </div>
              </div>
            }
          </div>
        </section>

        <!-- Project Gallery -->
        @if (p.gallery && p.gallery.length > 1) {
          <section class="max-w-7xl mx-auto px-6 lg:px-8 py-16 flex flex-col gap-6">
            <span class="font-headline text-[11px] uppercase tracking-[0.18em] text-secondary font-bold">PHOTOGRAPHY</span>
            <h2 class="font-headline text-[24px] font-medium text-primary">Site Execution Gallery</h2>

            <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
              @for (img of p.gallery; track img) {
                <div class="w-full aspect-[16/10] overflow-hidden bg-surface-container border border-outline-variant">
                  <img [src]="img" [alt]="p.name" class="w-full h-full object-cover transition-transform duration-700 hover:scale-105" loading="lazy" />
                </div>
              }
            </div>
          </section>
        }

        <!-- Related Projects -->
        @if (relatedProjects().length > 0) {
          <section class="w-full bg-surface-container-low py-20 border-t border-outline-variant">
            <div class="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col gap-10">
              <div class="flex items-center justify-between">
                <div>
                  <span class="font-headline text-[11px] uppercase tracking-[0.18em] text-secondary font-bold">PORTFOLIO CONTINUITY</span>
                  <h2 class="font-headline text-[24px] lg:text-[28px] font-medium text-primary">Related Projects</h2>
                </div>
                <a routerLink="/projects" class="font-headline text-[11px] uppercase font-bold tracking-wider text-secondary hover:text-primary transition-colors flex items-center gap-1">
                  <span>ALL PROJECTS</span>
                  <span class="material-symbols-outlined text-[15px]">arrow_forward</span>
                </a>
              </div>

              <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                @for (rel of relatedProjects(); track rel.id) {
                  <article class="flex flex-col gap-4 bg-surface p-6 border border-outline-variant">
                    <div class="w-full aspect-[16/10] overflow-hidden bg-surface-container">
                      <img [src]="rel.featuredImage" [alt]="rel.name" class="w-full h-full object-cover transition-transform duration-700 hover:scale-105" />
                    </div>
                    <div class="flex flex-col gap-2">
                      <div class="text-[11px] font-headline uppercase text-on-surface-variant flex justify-between border-b border-outline-variant pb-2">
                        <span>{{ rel.location }}</span>
                        <span class="text-secondary font-medium">{{ rel.sector }}</span>
                      </div>
                      <h3 class="font-headline text-[20px] font-medium text-primary">{{ rel.name }}</h3>
                      <div class="pt-1">
                        <a [routerLink]="['/projects', rel.slug]" class="inline-flex items-center gap-1.5 font-headline text-[11px] uppercase font-bold tracking-wider text-primary hover:text-secondary transition-colors">
                          <span>EXPLORE PROJECT</span>
                          <span class="material-symbols-outlined text-[15px]">arrow_forward</span>
                        </a>
                      </div>
                    </div>
                  </article>
                }
              </div>
            </div>
          </section>
        }

      </div>
    }
  `
})
export class ProjectDetailComponent implements OnInit {
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private projectService = inject(ProjectService);
  private seo = inject(SeoService);

  readonly project = signal<Project | null>(null);
  readonly relatedProjects = signal<Project[]>([]);

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const slug = params.get('slug');
      if (slug) {
        const item = this.projectService.getProjectBySlug(slug);
        if (item) {
          this.project.set(item);
          const related = this.projectService.projects().filter(p => p.slug !== item.slug).slice(0, 2);
          this.relatedProjects.set(related);

          this.seo.setPageMeta({
            title: `${item.name} | CHECP Case Study`,
            description: item.shortDescription,
            path: `/projects/${item.slug}`,
            ogImage: item.featuredImage,
            structuredData: {
              '@context': 'https://schema.org',
              '@type': 'CreativeWork',
              'name': item.name,
              'headline': item.name,
              'description': item.shortDescription,
              'image': item.featuredImage,
              'creator': {
                '@type': 'Organization',
                'name': 'CHECP'
              },
              'locationCreated': {
                '@type': 'Place',
                'name': item.location
              }
            }
          });
        } else {
          this.router.navigate(['/404']);
        }
      }
    });
  }
}
