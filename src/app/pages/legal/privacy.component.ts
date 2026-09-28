import { Component, inject, OnInit } from '@angular/core';
import { SeoService } from '../../core/services/seo.service';
import { BreadcrumbsComponent } from '../../shared/components/breadcrumbs.component';

@Component({
  selector: 'app-privacy',
  standalone: true,
  imports: [BreadcrumbsComponent],
  template: `
    <div class="pt-24 lg:pt-32 pb-20 max-w-4xl mx-auto px-6 lg:px-8">
      <app-breadcrumbs [items]="[{ label: 'Privacy Policy' }]" />

      <div class="flex flex-col gap-3 pt-6 pb-8 border-b border-outline-variant">
        <span class="font-headline text-[11px] uppercase tracking-[0.2em] text-secondary font-bold">LEGAL &amp; COMPLIANCE</span>
        <h1 class="font-headline text-[32px] lg:text-[40px] text-primary font-medium">Privacy Policy</h1>
        <p class="font-body text-sm text-on-surface-variant">Last updated: January 2026 • Compliant with Saudi Personal Data Protection Law (PDPL)</p>
      </div>

      <div class="flex flex-col gap-8 pt-8 font-body text-[15px] text-on-surface leading-relaxed">
        <section class="flex flex-col gap-3">
          <h2 class="font-headline text-[20px] font-semibold text-primary">1. Commitment to Confidentiality</h2>
          <p>CHECP Engineering &amp; Contracting Co. ("CHECP", "we", "our") is dedicated to protecting the privacy and personal data of institutional clients, subcontractors, vendors, and job applicants. This Privacy Policy details our protocols regarding the collection, processing, and protection of information obtained through checp.com.</p>
        </section>

        <section class="flex flex-col gap-3">
          <h2 class="font-headline text-[20px] font-semibold text-primary">2. Information Collection</h2>
          <p>We collect only necessary information explicitly submitted through our project inquiry forms, including full name, corporate entity, official email address, telephone contact, and project specifications. We do not engage in covert behavioral tracking or non-essential profiling.</p>
        </section>

        <section class="flex flex-col gap-3">
          <h2 class="font-headline text-[20px] font-semibold text-primary">3. Data Usage &amp; Lawful Processing</h2>
          <p>Data submitted to CHECP is utilized exclusively for evaluating construction tenders, preconstruction advisory, commercial communication, and contract execution. No corporate or personal information is monetized, sold, or shared with third-party commercial marketing entities.</p>
        </section>

        <section class="flex flex-col gap-3">
          <h2 class="font-headline text-[20px] font-semibold text-primary">4. Data Security &amp; Retention</h2>
          <p>We deploy robust enterprise cybersecurity controls, encrypted transmission protocols (TLS 1.3), and strict role-based access limits to safeguard institutional data against unauthorized access, disclosure, or alteration.</p>
        </section>

        <section class="flex flex-col gap-3">
          <h2 class="font-headline text-[20px] font-semibold text-primary">5. Contact Data Protection Officer</h2>
          <p>For inquiries regarding data compliance or requests to review or purge submitted information, contact: privacy&#64;checp.com or write to CHECP Corporate Governance, King Abdullah Financial District, Riyadh, Kingdom of Saudi Arabia.</p>
        </section>
      </div>
    </div>
  `
})
export class PrivacyComponent implements OnInit {
  private seo = inject(SeoService);

  ngOnInit(): void {
    this.seo.setPageMeta({
      title: 'Privacy Policy | CHECP',
      description: 'Review the CHECP privacy policy governing personal and institutional data protection in accordance with Saudi Arabian PDPL and international regulations.',
      path: '/privacy'
    });
  }
}
