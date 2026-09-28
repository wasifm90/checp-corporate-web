import { Component, inject, OnInit } from '@angular/core';
import { SeoService } from '../../core/services/seo.service';
import { BreadcrumbsComponent } from '../../shared/components/breadcrumbs.component';

@Component({
  selector: 'app-terms',
  standalone: true,
  imports: [BreadcrumbsComponent],
  template: `
    <div class="pt-24 lg:pt-32 pb-20 max-w-4xl mx-auto px-6 lg:px-8">
      <app-breadcrumbs [items]="[{ label: 'Terms of Service' }]" />

      <div class="flex flex-col gap-3 pt-6 pb-8 border-b border-outline-variant">
        <span class="font-headline text-[11px] uppercase tracking-[0.2em] text-secondary font-bold">LEGAL &amp; COMPLIANCE</span>
        <h1 class="font-headline text-[32px] lg:text-[40px] text-primary font-medium">Terms of Service</h1>
        <p class="font-body text-sm text-on-surface-variant">Effective as of January 2026</p>
      </div>

      <div class="flex flex-col gap-8 pt-8 font-body text-[15px] text-on-surface leading-relaxed">
        <section class="flex flex-col gap-3">
          <h2 class="font-headline text-[20px] font-semibold text-primary">1. Acceptance of Terms</h2>
          <p>By accessing and utilizing the website of CHECP Engineering &amp; Contracting Co. ("CHECP"), you agree to be bound by these corporate Terms of Service. If you do not agree to these terms, please discontinue use of this site.</p>
        </section>

        <section class="flex flex-col gap-3">
          <h2 class="font-headline text-[20px] font-semibold text-primary">2. Intellectual Property Rights</h2>
          <p>All architectural renderings, photographic case studies, brand marks, engineering descriptions, and proprietary materials on this website are the intellectual property of CHECP or licensed for our exclusive use. Reproduction or redistribution without written permission is strictly prohibited.</p>
        </section>

        <section class="flex flex-col gap-3">
          <h2 class="font-headline text-[20px] font-semibold text-primary">3. No Contractual Offer</h2>
          <p>The information on this website is for informational and portfolio showcase purposes only and does not constitute a formal binding bid, warranty of performance, or contractual commitment. Formal contractual obligations are established solely through executed construction contracts.</p>
        </section>

        <section class="flex flex-col gap-3">
          <h2 class="font-headline text-[20px] font-semibold text-primary">4. Governing Law &amp; Jurisdiction</h2>
          <p>These terms and any disputes arising from website use shall be governed by and construed in accordance with the laws and regulations of the Kingdom of Saudi Arabia, subject to the jurisdiction of the competent courts in Riyadh.</p>
        </section>
      </div>
    </div>
  `
})
export class TermsComponent implements OnInit {
  private seo = inject(SeoService);

  ngOnInit(): void {
    this.seo.setPageMeta({
      title: 'Terms of Service | CHECP',
      description: 'Corporate terms of service and website usage conditions for CHECP.',
      path: '/terms'
    });
  }
}
