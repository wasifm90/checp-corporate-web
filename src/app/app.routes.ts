import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent)
  },
  {
    path: 'about',
    loadComponent: () => import('./pages/about/about.component').then(m => m.AboutComponent)
  },
  {
    path: 'services',
    loadComponent: () => import('./pages/services/services-index.component').then(m => m.ServicesIndexComponent)
  },
  {
    path: 'services/:slug',
    loadComponent: () => import('./pages/services/service-detail.component').then(m => m.ServiceDetailComponent)
  },
  {
    path: 'projects',
    loadComponent: () => import('./pages/projects/projects-index.component').then(m => m.ProjectsIndexComponent)
  },
  {
    path: 'projects/:slug',
    loadComponent: () => import('./pages/projects/project-detail.component').then(m => m.ProjectDetailComponent)
  },
  {
    path: 'industries',
    loadComponent: () => import('./pages/industries/industries-index.component').then(m => m.IndustriesIndexComponent)
  },
  {
    path: 'industries/:slug',
    loadComponent: () => import('./pages/industries/industry-detail.component').then(m => m.IndustryDetailComponent)
  },
  {
    path: 'safety-quality',
    loadComponent: () => import('./pages/safety-quality/safety-quality.component').then(m => m.SafetyQualityComponent)
  },
  {
    path: 'careers',
    loadComponent: () => import('./pages/careers/careers.component').then(m => m.CareersComponent)
  },
  {
    path: 'insights',
    loadComponent: () => import('./pages/insights/insights-index.component').then(m => m.InsightsIndexComponent)
  },
  {
    path: 'insights/:slug',
    loadComponent: () => import('./pages/insights/insight-detail.component').then(m => m.InsightDetailComponent)
  },
  {
    path: 'contact',
    loadComponent: () => import('./pages/contact/contact.component').then(m => m.ContactComponent)
  },
  {
    path: 'locations',
    loadComponent: () => import('./pages/locations/locations.component').then(m => m.LocationsComponent)
  },
  {
    path: 'privacy',
    loadComponent: () => import('./pages/legal/privacy.component').then(m => m.PrivacyComponent)
  },
  {
    path: 'terms',
    loadComponent: () => import('./pages/legal/terms.component').then(m => m.TermsComponent)
  },
  {
    path: '404',
    loadComponent: () => import('./pages/not-found/not-found.component').then(m => m.NotFoundComponent)
  },
  {
    path: '**',
    redirectTo: '404'
  }
];
