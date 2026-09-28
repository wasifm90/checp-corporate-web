import { Component, inject, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IndustryService } from '../../core/services/industry.service';
import { SeoService } from '../../core/services/seo.service';
import { BreadcrumbsComponent } from '../../shared/components/breadcrumbs.component';

@Component({
  selector: 'app-industries-index',
  standalone: true,
  imports: [RouterLink, BreadcrumbsComponent],
  template: `
    <div class="pt-24 lg:pt-32 pb-20">
      
      <!-- Header -->
      <section class="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col gap-6">
        <app-breadcrumbs [items]="[{ label: 'Industries' }]" />

        <div class="flex flex-col gap-3 pt-4">
          <span class="font-headline text-[11px] uppercase tracking-[0.2em] text-secondary font-bold">
            SECTORS &amp; MARKETS
          </span>
          <h1 class="font-headline text-fluid-h2 text-primary font-medium max-w-4xl">
            Expertise Across Specialized Operating Environments
          </h1>
        </div>

        <p class="font-body text-fluid-body text-on-surface-variant max-w-3xl leading-relaxed">
          Different industries demand tailored engineering frameworks, statutory compliance protocols, and technical tolerances. CHECP brings dedicated sector expertise across institutional developments.
        </p>
      </section>

      <!-- Photographic Panels Grid -->
      <section class="max-w-7xl mx-auto px-6 lg:px-8 pt-16">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6">
          @for (ind of industryService.industries(); track ind.id; let idx = $index) {
            <div 
              class="relative overflow-hidden bg-primary text-white flex flex-col justify-end p-8 group border border-outline-variant"
              [class.lg:col-span-8]="idx === 0"
              [class.lg:col-span-4]="idx !== 0"
              [class.h-80]="idx !== 0"
              [class.lg:h-96]="idx === 0"
            >
              <div 
                class="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105 opacity-40"
                [style.backgroundImage]="'url(' + ind.featuredImage + ')'"
              ></div>
              <div class="absolute inset-0 bg-gradient-to-t from-primary via-primary/75 to-transparent"></div>
              
              <div class="relative z-10 flex flex-col gap-3">
                <span class="font-headline text-[10px] text-secondary tracking-widest uppercase font-bold">
                  0{{ idx + 1 }} • SECTOR
                </span>
                <h2 class="font-headline text-[24px] lg:text-[28px] font-medium text-white">
                  {{ ind.name }}
                </h2>
                <p class="font-body text-[14px] text-white/80 max-w-xl">
                  {{ ind.subtitle }}
                </p>
                <div class="pt-2">
                  <a 
                    [routerLink]="['/industries', ind.slug]" 
                    class="inline-flex items-center gap-1.5 font-headline text-[11px] uppercase font-bold tracking-wider text-secondary hover:text-white transition-colors"
                  >
                    <span class="border-b border-secondary/50 pb-0.5">EXPLORE SECTOR</span>
                    <span class="material-symbols-outlined text-[15px]">arrow_forward</span>
                  </a>
                </div>
              </div>
            </div>
          }
        </div>
      </section>

      <!-- Bottom Advisory -->
      <section class="max-w-7xl mx-auto px-6 lg:px-8 pt-20">
        <div class="p-8 lg:p-12 bg-surface-container-low border border-outline-variant flex flex-col md:flex-row items-center justify-between gap-6">
          <div class="flex flex-col gap-2">
            <span class="font-headline text-[10px] uppercase text-secondary font-bold tracking-widest">SECTOR INQUIRIES</span>
            <h3 class="font-headline text-[22px] font-medium text-primary">Need sector-specific engineering insights?</h3>
            <p class="font-body text-[14px] text-on-surface-variant max-w-xl">Our technical directors possess deep regulatory knowledge across Saudi Ministry and international technical standards.</p>
          </div>
          <a 
            routerLink="/contact"
            class="h-12 px-7 bg-primary text-white font-headline text-[11px] uppercase font-bold tracking-wider flex items-center justify-center gap-2 hover:bg-secondary hover:text-primary transition-colors shrink-0"
          >
            <span>CONTACT TECHNICAL TEAM</span>
            <span class="material-symbols-outlined text-[16px]">arrow_forward</span>
          </a>
        </div>
      </section>

    </div>
  `
})
export class IndustriesIndexComponent implements OnInit {
  readonly industryService = inject(IndustryService);
  private seo = inject(SeoService);

  ngOnInit(): void {
    this.seo.setPageMeta({
      title: 'Industries & Sectors | CHECP Construction & Engineering',
      description: 'CHECP provides specialized engineering delivery across Commercial, Healthcare, Industrial & Logistics, Hospitality, and Mission Critical Infrastructure.',
      path: '/industries'
    });
  }
}
