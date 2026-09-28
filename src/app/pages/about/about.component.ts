import { Component, inject, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CompanyService } from '../../core/services/company.service';
import { SeoService } from '../../core/services/seo.service';
import { BreadcrumbsComponent } from '../../shared/components/breadcrumbs.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [RouterLink, BreadcrumbsComponent],
  template: `
    <div class="pt-24 lg:pt-32 pb-20">
      
      <!-- Top Hero Header -->
      <section class="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col gap-6">
        <app-breadcrumbs [items]="[{ label: 'About Us' }]" />

        <div class="flex flex-col gap-3 pt-4">
          <span class="font-headline text-[11px] uppercase tracking-[0.2em] text-secondary font-bold">
            ABOUT CHECP
          </span>
          <h1 class="font-headline text-fluid-h2 text-primary font-medium max-w-4xl">
            Built on experience.<br>Driven by relationships.
          </h1>
        </div>

        <p class="font-body text-fluid-body text-on-surface-variant max-w-3xl leading-relaxed">
          CHECP directs landmark commercial developments, specialized industrial assets, and heavy civil engineering across Saudi Arabia and the GCC. Through disciplined engineering, digital preconstruction, and master craft, we build enduring infrastructure for institutional partners.
        </p>
      </section>

      <!-- Visual Feature Banner -->
      <section class="max-w-7xl mx-auto px-6 lg:px-8 pt-12 pb-16">
        <div class="w-full aspect-[21/9] overflow-hidden bg-primary border border-outline-variant relative">
          <img 
            src="/images/about/about-hero.jpg" 
            alt="CHECP site supervision and structural engineering" 
            class="w-full h-full object-cover opacity-85"
          />
          <div class="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent"></div>
          <div class="absolute bottom-6 left-6 right-6 flex items-center justify-between text-white font-headline text-[11px] tracking-wider uppercase">
            <span>RIYADH • JEDDAH • DAMMAM</span>
            <span class="text-secondary font-bold">ENGINEERING EXCELLENCE</span>
          </div>
        </div>
      </section>

      <!-- Company History & Philosophy -->
      <section class="w-full bg-surface-container-low py-20 border-y border-outline-variant">
        <div class="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div class="lg:col-span-5 flex flex-col gap-4">
            <span class="font-headline text-[11px] uppercase tracking-[0.18em] text-secondary font-bold">OUR HERITAGE</span>
            <h2 class="font-headline text-[26px] lg:text-[34px] leading-tight text-primary font-medium">
              A legacy of uncompromising engineering standards.
            </h2>
          </div>
          <div class="lg:col-span-7 flex flex-col gap-6 font-body text-[15px] text-on-surface-variant leading-relaxed">
            <p>
              Founded on the belief that enduring construction requires both mathematical discipline and collaborative integrity, CHECP has grown to become a trusted general contracting and engineering partner for the Kingdom's most demanding institutional clients.
            </p>
            <p>
              Our multidisciplinary teams unite certified professional engineers, seasoned project superintendents, preconstruction cost estimators, and specialized craftspeople. We approach every assignment with a holistic perspective: optimizing structural efficiency, integrating low-carbon materials, and ensuring worker safety at every elevation.
            </p>
            <p>
              With strategic regional offices in Riyadh, Jeddah, and Dammam, CHECP is positioned to mobilize rapidly across the Kingdom, delivering complex commercial towers, mission-critical infrastructure, and refined interior fit-outs with unyielding fidelity to schedule and budget.
            </p>
          </div>
        </div>
      </section>

      <!-- Core Values -->
      <section class="max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-28 flex flex-col gap-12">
        <div class="flex flex-col gap-2">
          <span class="font-headline text-[11px] uppercase tracking-[0.18em] text-secondary font-bold">OUR PILLARS</span>
          <h2 class="font-headline text-fluid-h2 text-primary font-medium">The principles guiding every build.</h2>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          @for (val of company.profile().values; track val.title; let idx = $index) {
            <div class="p-6 bg-surface-container-low border border-outline-variant flex flex-col gap-4">
              <span class="font-headline text-[12px] font-bold text-secondary">0{{ idx + 1 }}</span>
              <h3 class="font-headline text-[20px] font-semibold text-primary">{{ val.title }}</h3>
              <p class="font-body text-[14px] text-on-surface-variant leading-relaxed">{{ val.description }}</p>
            </div>
          }
        </div>
      </section>

      <!-- Corporate Governance & Board Commitment -->
      <section class="w-full bg-primary text-white py-20 px-6 lg:px-8">
        <div class="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div class="lg:col-span-6 flex flex-col gap-6">
            <span class="font-headline text-[11px] uppercase tracking-[0.2em] text-secondary font-bold">GOVERNANCE &amp; ETHICS</span>
            <h2 class="font-headline text-fluid-h2 text-white font-medium">
              Institutional accountability in every contract.
            </h2>
            <p class="font-body text-[15px] text-white/80 leading-relaxed">
              CHECP operates under strict institutional compliance, third-party audited accounting, and comprehensive risk mitigation frameworks. Our governance models ensure transparent reporting, subcontractor ethics enforcement, and anti-corruption policies across all procurement channels.
            </p>
          </div>
          <div class="lg:col-span-6 grid grid-cols-2 gap-6">
            <div class="p-6 border border-white/15 bg-white/5">
              <span class="font-headline text-secondary font-bold text-lg">ISO 9001</span>
              <p class="font-body text-xs text-white/70 pt-1">Quality Management System certified across all operations.</p>
            </div>
            <div class="p-6 border border-white/15 bg-white/5">
              <span class="font-headline text-secondary font-bold text-lg">ISO 45001</span>
              <p class="font-body text-xs text-white/70 pt-1">Occupational Health &amp; Safety verified at every jobsite.</p>
            </div>
            <div class="p-6 border border-white/15 bg-white/5">
              <span class="font-headline text-secondary font-bold text-lg">ISO 14001</span>
              <p class="font-body text-xs text-white/70 pt-1">Environmental stewardship &amp; sustainability compliance.</p>
            </div>
            <div class="p-6 border border-white/15 bg-white/5">
              <span class="font-headline text-secondary font-bold text-lg">HCIS Ready</span>
              <p class="font-body text-xs text-white/70 pt-1">High Commission for Industrial Security operational clearance.</p>
            </div>
          </div>
        </div>
      </section>

      <!-- CTA -->
      <section class="max-w-7xl mx-auto px-6 lg:px-8 pt-20 flex flex-col items-center text-center gap-6">
        <h2 class="font-headline text-[26px] lg:text-[34px] font-medium text-primary">
          Partner with CHECP on your next landmark development.
        </h2>
        <a 
          routerLink="/contact"
          class="h-13 px-8 bg-secondary text-primary font-headline text-[12px] uppercase font-bold tracking-wider flex items-center gap-2 hover:bg-primary hover:text-white transition-colors"
        >
          <span>SPEAK WITH OUR DIRECTORS</span>
          <span class="material-symbols-outlined text-[16px]">arrow_forward</span>
        </a>
      </section>

    </div>
  `
})
export class AboutComponent implements OnInit {
  readonly company = inject(CompanyService);
  private seo = inject(SeoService);

  ngOnInit(): void {
    this.seo.setPageMeta({
      title: 'About CHECP — Built on Experience, Driven by Relationships',
      description: 'Learn about CHECP engineering heritage, leadership governance, core values, and regional construction capabilities across Saudi Arabia and the GCC.',
      path: '/about'
    });
  }
}
