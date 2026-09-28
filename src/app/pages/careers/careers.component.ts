import { Component, inject, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CompanyService } from '../../core/services/company.service';
import { SeoService } from '../../core/services/seo.service';
import { BreadcrumbsComponent } from '../../shared/components/breadcrumbs.component';

@Component({
  selector: 'app-careers',
  standalone: true,
  imports: [RouterLink, BreadcrumbsComponent],
  template: `
    <div class="pt-24 lg:pt-32 pb-20">
      
      <!-- Header -->
      <section class="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col gap-6">
        <app-breadcrumbs [items]="[{ label: 'Careers' }]" />

        <div class="flex flex-col gap-3 pt-4">
          <span class="font-headline text-[11px] uppercase tracking-[0.2em] text-secondary font-bold">
            CAREERS AT CHECP
          </span>
          <h1 class="font-headline text-fluid-h2 text-primary font-medium max-w-4xl">
            {{ company.careers().headline }}
          </h1>
        </div>

        <p class="font-body text-fluid-body text-on-surface-variant max-w-3xl leading-relaxed">
          {{ company.careers().subheadline }}
        </p>
      </section>

      <!-- Visual Feature Banner -->
      <section class="max-w-7xl mx-auto px-6 lg:px-8 pt-10 pb-16">
        <div class="w-full aspect-[21/9] overflow-hidden bg-surface-container border border-outline-variant">
          <img 
            [src]="company.careers().image" 
            alt="CHECP engineers collaborating on site" 
            class="w-full h-full object-cover"
          />
        </div>
      </section>

      <!-- Culture & Craftsmanship -->
      <section class="max-w-7xl mx-auto px-6 lg:px-8 py-10 flex flex-col gap-12">
        <div class="max-w-3xl flex flex-col gap-4">
          <span class="font-headline text-[11px] uppercase tracking-[0.18em] text-secondary font-bold">OUR CULTURE</span>
          <h2 class="font-headline text-[26px] lg:text-[34px] font-medium text-primary">
            Engineering excellence through shared accountability.
          </h2>
          <p class="font-body text-[16px] text-on-surface-variant leading-relaxed">
            {{ company.careers().cultureDescription }}
          </p>
        </div>

        <!-- 4 Pillars -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pt-4">
          @for (pillar of company.careers().pillars; track pillar.title) {
            <div class="p-6 bg-surface-container-low border border-outline-variant flex flex-col gap-3">
              <h3 class="font-headline text-[18px] font-semibold text-primary">{{ pillar.title }}</h3>
              <p class="font-body text-[13px] text-on-surface-variant leading-relaxed">{{ pillar.description }}</p>
            </div>
          }
        </div>
      </section>

      <!-- Open Opportunities / Professional Empty State -->
      <section class="w-full bg-surface-container-low py-20 border-y border-outline-variant">
        <div class="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col gap-8">
          <div class="flex flex-col gap-2">
            <span class="font-headline text-[11px] uppercase tracking-[0.18em] text-secondary font-bold">CURRENT OPENINGS</span>
            <h2 class="font-headline text-fluid-h2 text-primary font-medium">Join Our Team</h2>
          </div>

          @if (company.careers().jobs.length > 0) {
            <div class="flex flex-col divide-y divide-outline-variant border-y border-outline-variant">
              @for (job of company.careers().jobs; track job.id) {
                <div class="py-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div>
                    <h3 class="font-headline text-[20px] font-semibold text-primary">{{ job.title }}</h3>
                    <div class="flex gap-4 text-xs font-body text-on-surface-variant pt-1">
                      <span>{{ job.department }}</span>
                      <span>•</span>
                      <span>{{ job.location }}</span>
                      <span>•</span>
                      <span>{{ job.type }}</span>
                    </div>
                  </div>
                  <a routerLink="/contact" class="h-10 px-5 bg-primary text-white font-headline text-xs uppercase font-bold tracking-wider flex items-center justify-center hover:bg-secondary hover:text-primary transition-colors">
                    Apply Now
                  </a>
                </div>
              }
            </div>
          } @else {
            <div class="p-10 bg-surface border border-outline-variant flex flex-col items-center text-center gap-4 max-w-2xl mx-auto">
              <span class="material-symbols-outlined text-secondary text-[36px]">work_outline</span>
              <h3 class="font-headline text-[20px] font-medium text-primary">No Immediate Vacancies Posted</h3>
              <p class="font-body text-[14px] text-on-surface-variant leading-relaxed">
                {{ company.careers().noVacanciesNotice }}
              </p>
              <div class="pt-2">
                <a 
                  href="mailto:careers@checp.com?subject=Speculative%20Application%20-%20CHECP%20Engineering" 
                  class="h-12 px-7 bg-primary text-white font-headline text-[11px] uppercase font-bold tracking-wider flex items-center gap-2 hover:bg-secondary hover:text-primary transition-colors"
                >
                  <span>SEND SPECULATIVE CV</span>
                  <span class="material-symbols-outlined text-[16px]">mail</span>
                </a>
              </div>
            </div>
          }
        </div>
      </section>

    </div>
  `
})
export class CareersComponent implements OnInit {
  readonly company = inject(CompanyService);
  private seo = inject(SeoService);

  ngOnInit(): void {
    this.seo.setPageMeta({
      title: 'Careers & Opportunities | CHECP',
      description: 'Explore engineering and construction careers at CHECP. Join a team dedicated to technical craft, safety, and landmark project delivery.',
      path: '/careers'
    });
  }
}
