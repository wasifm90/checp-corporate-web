import { Component, inject, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CompanyService } from '../../core/services/company.service';
import { SeoService } from '../../core/services/seo.service';
import { BreadcrumbsComponent } from '../../shared/components/breadcrumbs.component';

@Component({
  selector: 'app-locations',
  standalone: true,
  imports: [BreadcrumbsComponent],
  template: `
    <div class="pt-24 lg:pt-32 pb-20">
      
      <!-- Header -->
      <section class="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col gap-6">
        <app-breadcrumbs [items]="[{ label: 'Regional Presence' }]" />

        <div class="flex flex-col gap-3 pt-4">
          <span class="font-headline text-[11px] uppercase tracking-[0.2em] text-secondary font-bold">
            KINGDOM-WIDE OPERATIONS
          </span>
          <h1 class="font-headline text-fluid-h2 text-primary font-medium max-w-4xl">
            Regional Presence &amp; Operational Hubs
          </h1>
        </div>

        <p class="font-body text-fluid-body text-on-surface-variant max-w-3xl leading-relaxed">
          Strategically deployed across the Central, Western, and Eastern regions of Saudi Arabia, CHECP maintains self-sufficient engineering directorates capable of rapid site mobilization and logistics coordination.
        </p>
      </section>

      <!-- Locations Grid -->
      <section class="max-w-7xl mx-auto px-6 lg:px-8 pt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
        @for (office of company.locations(); track office.id) {
          <article class="p-8 bg-surface-container-low border border-outline-variant flex flex-col justify-between gap-6">
            <div class="flex flex-col gap-3">
              <div class="flex items-center justify-between">
                <span class="font-headline text-[11px] uppercase text-secondary font-bold tracking-widest">{{ office.region }}</span>
                @if (office.isHQ) {
                  <span class="px-2 py-0.5 bg-primary text-white font-headline text-[10px] font-bold uppercase tracking-wider">HEADQUARTERS</span>
                }
              </div>

              <h2 class="font-headline text-[22px] font-semibold text-primary">{{ office.title }}</h2>
              <p class="font-body text-[14px] text-on-surface-variant leading-relaxed">{{ office.description }}</p>
            </div>

            <div class="pt-4 border-t border-outline-variant flex flex-col gap-3 font-body text-[13px]">
              <div class="flex items-start gap-2.5">
                <span class="material-symbols-outlined text-secondary text-[18px] shrink-0 mt-0.5">location_on</span>
                <span class="text-primary">{{ office.address }}</span>
              </div>
              <div class="flex items-center gap-2.5">
                <span class="material-symbols-outlined text-secondary text-[18px] shrink-0">call</span>
                <span class="text-primary font-headline">{{ office.phone }}</span>
              </div>
              <div class="flex items-center gap-2.5">
                <span class="material-symbols-outlined text-secondary text-[18px] shrink-0">mail</span>
                <span class="text-secondary font-headline">{{ office.email }}</span>
              </div>
            </div>
          </article>
        }
      </section>

    </div>
  `
})
export class LocationsComponent implements OnInit {
  readonly company = inject(CompanyService);
  private seo = inject(SeoService);

  ngOnInit(): void {
    this.seo.setPageMeta({
      title: 'Regional Offices & Locations | CHECP',
      description: 'Explore CHECP corporate headquarters in Riyadh and regional operating divisions in Jeddah and Dammam.',
      path: '/locations'
    });
  }
}
