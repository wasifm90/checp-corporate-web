import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, withInMemoryScrolling, withViewTransitions } from '@angular/router';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';

import { routes } from './app.routes';
import { PROJECT_REPOSITORY_TOKEN, StaticProjectRepository } from './core/repositories/project.repository';
import { SERVICES_REPOSITORY_TOKEN, StaticServicesRepository } from './core/repositories/services.repository';
import { INDUSTRY_REPOSITORY_TOKEN, StaticIndustryRepository } from './core/repositories/industry.repository';
import { ARTICLE_REPOSITORY_TOKEN, StaticArticleRepository } from './core/repositories/article.repository';
import { COMPANY_REPOSITORY_TOKEN, StaticCompanyRepository } from './core/repositories/company.repository';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(
      routes,
      withInMemoryScrolling({ scrollPositionRestoration: 'top', anchorScrolling: 'enabled' }),
      withViewTransitions()
    ),
    provideClientHydration(withEventReplay()),

    // Repositories (Ready for Phase 2: swap Static* with Api* to connect CMS/Admin backend)
    { provide: PROJECT_REPOSITORY_TOKEN, useClass: StaticProjectRepository },
    { provide: SERVICES_REPOSITORY_TOKEN, useClass: StaticServicesRepository },
    { provide: INDUSTRY_REPOSITORY_TOKEN, useClass: StaticIndustryRepository },
    { provide: ARTICLE_REPOSITORY_TOKEN, useClass: StaticArticleRepository },
    { provide: COMPANY_REPOSITORY_TOKEN, useClass: StaticCompanyRepository }
  ]
};
