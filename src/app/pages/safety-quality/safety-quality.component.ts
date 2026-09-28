import { Component, inject, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CompanyService } from '../../core/services/company.service';
import { SeoService } from '../../core/services/seo.service';
import { BreadcrumbsComponent } from '../../shared/components/breadcrumbs.component';

@Component({
  selector: 'app-safety-quality',
  standalone: true,
  imports: [RouterLink, BreadcrumbsComponent],
  template: `
    <div class="pt-24 lg:pt-32 pb-20">
      
      <!-- Header -->
      <section class="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col gap-6">
        <app-breadcrumbs [items]="[{ label: 'Safety & Quality' }]" />

        <div class="flex flex-col gap-3 pt-4">
          <span class="font-headline text-[11px] uppercase tracking-[0.2em] text-secondary font-bold">
            HEALTH, SAFETY, ENVIRONMENT &amp; QUALITY
          </span>
          <h1 class="font-headline text-fluid-h2 text-primary font-medium max-w-4xl">
            {{ company.safety().headline }}
          </h1>
        </div>

        <p class="font-body text-fluid-body text-on-surface-variant max-w-3xl leading-relaxed">
          {{ company.safety().subheadline }}
        </p>
      </section>

      <!-- Visual Feature Banner -->
      <section class="max-w-7xl mx-auto px-6 lg:px-8 pt-10 pb-16">
        <div class="w-full aspect-[21/9] overflow-hidden bg-surface-container border border-outline-variant">
          <img 
            [src]="company.safety().image" 
            alt="CHECP Safety Engineers reviewing structural site conditions" 
            class="w-full h-full object-cover"
          />
        </div>
      </section>

      <!-- Safety Metrics (Configurable) -->
      <section class="w-full bg-primary text-white py-16 px-6 lg:px-8">
        <div class="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-3 gap-8">
          @for (metric of company.safety().metrics; track metric.id) {
            <div class="p-6 border border-white/15 bg-white/5 flex flex-col justify-between gap-3">
              <span class="font-headline text-[11px] text-white/70 uppercase tracking-wider">{{ metric.label }}</span>
              <div class="flex items-baseline justify-between pt-2">
                <span class="font-headline text-[40px] font-light text-white tracking-tight">{{ metric.value }}</span>
                <span class="font-headline text-[11px] text-secondary font-bold tracking-widest uppercase">{{ metric.period }}</span>
              </div>
            </div>
          }
        </div>
      </section>

      <!-- Core HSE Principles -->
      <section class="max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-28 flex flex-col gap-12">
        <div class="flex flex-col gap-2">
          <span class="font-headline text-[11px] uppercase tracking-[0.18em] text-secondary font-bold">OUR FRAMEWORK</span>
          <h2 class="font-headline text-fluid-h2 text-primary font-medium">Four Pillars of Jobsite Safety</h2>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          @for (p of company.safety().corePrinciples; track p.number) {
            <div class="p-8 bg-surface-container-low border border-outline-variant flex flex-col gap-4">
              <span class="font-headline text-[14px] font-bold text-secondary">{{ p.number }}</span>
              <h3 class="font-headline text-[22px] font-semibold text-primary">{{ p.title }}</h3>
              <p class="font-body text-[15px] text-on-surface-variant leading-relaxed">{{ p.description }}</p>
            </div>
          }
        </div>
      </section>

      <!-- ISO Accreditations & Quality Verification -->
      <section class="w-full bg-surface-container-low py-20 border-y border-outline-variant">
        <div class="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div class="lg:col-span-5 flex flex-col gap-4">
            <span class="font-headline text-[11px] uppercase tracking-[0.18em] text-secondary font-bold">QUALITY ASSURANCE</span>
            <h2 class="font-headline text-[26px] lg:text-[32px] text-primary font-medium">Certified systems and rigorous field verification.</h2>
            <p class="font-body text-[15px] text-on-surface-variant leading-relaxed">
              CHECP enforces systematic quality management through every phase of procurement, fabrication, and erection. Independent laboratory batch testing, automated digital checklists, and third-party engineering audits ensure zero deviation from contractual specifications.
            </p>
          </div>

          <div class="lg:col-span-7 flex flex-col gap-4 justify-center">
            @for (cert of company.safety().certifications; track cert) {
              <div class="p-5 bg-surface border border-outline-variant flex items-center gap-4">
                <span class="material-symbols-outlined text-secondary text-[24px]">verified</span>
                <span class="font-headline text-[15px] font-medium text-primary">{{ cert }}</span>
              </div>
            }
          </div>
        </div>
      </section>

      <!-- CTA -->
      <section class="max-w-7xl mx-auto px-6 lg:px-8 pt-16 flex justify-center">
        <div class="text-center flex flex-col items-center gap-4">
          <h3 class="font-headline text-[22px] font-medium text-primary">Request Our Safety Manual &amp; Quality Plan</h3>
          <p class="font-body text-[14px] text-on-surface-variant max-w-md">Institutional partners may request CHECP comprehensive HSE manual and project execution plans.</p>
          <a 
            routerLink="/contact"
            class="h-12 px-7 bg-primary text-white font-headline text-[11px] uppercase font-bold tracking-wider flex items-center gap-2 hover:bg-secondary hover:text-primary transition-colors mt-2"
          >
            <span>REQUEST DOCUMENTATION</span>
            <span class="material-symbols-outlined text-[16px]">arrow_forward</span>
          </a>
        </div>
      </section>

    </div>
  `
})
export class SafetyQualityComponent implements OnInit {
  readonly company = inject(CompanyService);
  private seo = inject(SeoService);

  ngOnInit(): void {
    this.seo.setPageMeta({
      title: 'Safety & Quality Assurance | CHECP',
      description: 'Discover CHECP zero-compromise HSE philosophy, ISO 45001 and ISO 9001 certified governance, and site quality assurance protocols.',
      path: '/safety-quality'
    });
  }
}
