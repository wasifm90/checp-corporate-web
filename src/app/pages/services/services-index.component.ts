import { Component, inject, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ServicesService } from '../../core/services/services.service';
import { SeoService } from '../../core/services/seo.service';
import { BreadcrumbsComponent } from '../../shared/components/breadcrumbs.component';

@Component({
  selector: 'app-services-index',
  standalone: true,
  imports: [RouterLink, BreadcrumbsComponent],
  template: `
    <div class="pt-24 lg:pt-32 pb-20">
      
      <!-- Header -->
      <section class="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col gap-6">
        <app-breadcrumbs [items]="[{ label: 'Services' }]" />

        <div class="flex flex-col gap-3 pt-4">
          <span class="font-headline text-[11px] uppercase tracking-[0.2em] text-secondary font-bold">
            EXPERTISE &amp; DISCIPLINES
          </span>
          <h1 class="font-headline text-fluid-h2 text-primary font-medium max-w-4xl">
            Engineering &amp; Construction Capabilities
          </h1>
        </div>

        <p class="font-body text-fluid-body text-on-surface-variant max-w-3xl leading-relaxed">
          From early-phase preconstruction feasibility and digital constructability analysis through turnkey general contracting and specialized infrastructure delivery, CHECP provides integrated engineering disciplines tailored to institutional standards.
        </p>
      </section>

      <!-- Services List (Editorial Grid) -->
      <section class="max-w-7xl mx-auto px-6 lg:px-8 pt-16 flex flex-col divide-y divide-outline-variant">
        @for (srv of servicesService.services(); track srv.id; let idx = $index) {
          <article class="py-12 first:pt-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div class="lg:col-span-1">
              <span class="font-headline text-lg font-bold text-secondary">0{{ idx + 1 }}</span>
            </div>

            <div class="lg:col-span-4 flex flex-col gap-3">
              <h2 class="font-headline text-[24px] lg:text-[28px] font-medium text-primary leading-tight">
                {{ srv.name }}
              </h2>
              <div class="pt-2">
                <a 
                  [routerLink]="['/services', srv.slug]"
                  class="inline-flex items-center gap-1.5 font-headline text-[12px] uppercase font-bold tracking-wider text-secondary hover:text-primary transition-colors"
                >
                  <span>VIEW FULL DISCIPLINE</span>
                  <span class="material-symbols-outlined text-[16px]">arrow_forward</span>
                </a>
              </div>
            </div>

            <div class="lg:col-span-4 flex flex-col gap-4">
              <p class="font-body text-[15px] text-on-surface-variant leading-relaxed">
                {{ srv.description }}
              </p>
              <div class="flex flex-col gap-1.5 pt-2">
                <span class="font-headline text-[11px] uppercase tracking-wider text-primary font-bold">Key Capabilities:</span>
                @for (cap of srv.capabilities.slice(0, 3); track cap) {
                  <div class="flex items-start gap-2 text-[13px] text-on-surface-variant">
                    <span class="text-secondary text-xs">•</span>
                    <span>{{ cap }}</span>
                  </div>
                }
              </div>
            </div>

            <div class="lg:col-span-3 aspect-[16/11] overflow-hidden bg-surface-container border border-outline-variant">
              <img 
                [src]="srv.image" 
                [alt]="srv.name" 
                class="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                loading="lazy"
              />
            </div>
          </article>
        }
      </section>

      <!-- Bottom Consultation Section -->
      <section class="max-w-7xl mx-auto px-6 lg:px-8 pt-16">
        <div class="p-8 lg:p-12 bg-primary text-white flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div class="flex flex-col gap-2">
            <span class="font-headline text-[10px] uppercase text-secondary font-bold tracking-widest">TECHNICAL CONSULTATION</span>
            <h3 class="font-headline text-[24px] font-medium text-white">Require constructability evaluation for an upcoming project?</h3>
            <p class="font-body text-[14px] text-white/80 max-w-xl">Our preconstruction and engineering directors are available to review schematic designs, budgets, and scheduling parameters.</p>
          </div>
          <a 
            routerLink="/contact"
            class="h-12 px-7 bg-secondary text-primary font-headline text-[11px] uppercase font-bold tracking-wider flex items-center justify-center gap-2 hover:bg-white transition-colors shrink-0"
          >
            <span>SUBMIT RFP / INQUIRY</span>
            <span class="material-symbols-outlined text-[16px]">arrow_forward</span>
          </a>
        </div>
      </section>

    </div>
  `
})
export class ServicesIndexComponent implements OnInit {
  readonly servicesService = inject(ServicesService);
  private seo = inject(SeoService);

  ngOnInit(): void {
    this.seo.setPageMeta({
      title: 'Construction & Engineering Services | CHECP',
      description: 'Explore CHECP 8 core disciplines: General Contracting, Construction Management, Design & Build, Preconstruction, Fit-Out, Renovation, Civil & Structural, and Specialized Infrastructure.',
      path: '/services'
    });
  }
}
