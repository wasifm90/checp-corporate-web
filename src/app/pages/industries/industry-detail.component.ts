import { Component, inject, signal, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { IndustryService } from '../../core/services/industry.service';
import { SeoService } from '../../core/services/seo.service';
import { BreadcrumbsComponent } from '../../shared/components/breadcrumbs.component';
import { Industry } from '../../core/models';

@Component({
  selector: 'app-industry-detail',
  standalone: true,
  imports: [RouterLink, BreadcrumbsComponent],
  template: `
    @if (industry(); as ind) {
      <div class="pt-24 lg:pt-32 pb-20">
        
        <!-- Header -->
        <section class="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col gap-6">
          <app-breadcrumbs [items]="[{ label: 'Industries', url: '/industries' }, { label: ind.name }]" />

          <div class="flex flex-col gap-3 pt-4">
            <span class="font-headline text-[11px] uppercase tracking-[0.2em] text-secondary font-bold">
              INDUSTRY SECTOR
            </span>
            <h1 class="font-headline text-fluid-h2 text-primary font-medium max-w-4xl">
              {{ ind.name }}
            </h1>
          </div>

          <p class="font-body text-fluid-body text-on-surface-variant max-w-3xl leading-relaxed">
            {{ ind.subtitle }}
          </p>
        </section>

        <!-- Main Banner -->
        <section class="max-w-7xl mx-auto px-6 lg:px-8 pt-10 pb-16">
          <div class="w-full aspect-[21/9] overflow-hidden bg-surface-container border border-outline-variant">
            <img 
              [src]="ind.featuredImage" 
              [alt]="ind.name" 
              class="w-full h-full object-cover"
            />
          </div>
        </section>

        <!-- Overview & Capabilities -->
        <section class="max-w-7xl mx-auto px-6 lg:px-8 py-10 grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div class="lg:col-span-7 flex flex-col gap-8">
            <div class="flex flex-col gap-4">
              <span class="font-headline text-[11px] uppercase tracking-[0.18em] text-secondary font-bold">SECTOR PROFILE</span>
              <p class="font-body text-[16px] text-on-surface-variant leading-relaxed">
                {{ ind.description }}
              </p>
            </div>

            <!-- Key Challenges Addressed -->
            <div class="flex flex-col gap-4 pt-6 border-t border-outline-variant">
              <span class="font-headline text-[11px] uppercase tracking-[0.18em] text-secondary font-bold">TECHNICAL CHALLENGES WE SOLVE</span>
              <div class="flex flex-col gap-3">
                @for (ch of ind.keyChallenges; track ch) {
                  <div class="p-4 bg-surface-container-low border border-outline-variant flex items-start gap-3">
                    <span class="w-2 h-2 rounded-full bg-secondary mt-1.5 shrink-0"></span>
                    <span class="font-body text-[14px] text-primary">{{ ch }}</span>
                  </div>
                }
              </div>
            </div>
          </div>

          <div class="lg:col-span-5 flex flex-col gap-8">
            <!-- Sector Capabilities -->
            <div class="bg-surface-container-low p-8 border border-outline-variant flex flex-col gap-5">
              <span class="font-headline text-[11px] uppercase tracking-[0.18em] text-secondary font-bold">SECTOR CAPABILITIES</span>
              <ul class="flex flex-col divide-y divide-outline-variant">
                @for (cap of ind.capabilities; track cap) {
                  <li class="py-3 flex items-start gap-3 text-[14px] text-primary">
                    <span class="material-symbols-outlined text-secondary text-[18px] shrink-0 mt-0.5">check</span>
                    <span>{{ cap }}</span>
                  </li>
                }
              </ul>
            </div>

            <!-- Proven Highlights -->
            @if (ind.highlights && ind.highlights.length > 0) {
              <div class="bg-primary text-white p-8 border border-outline-variant flex flex-col gap-5">
                <span class="font-headline text-[11px] uppercase tracking-[0.2em] text-secondary font-bold">DELIVERY HIGHLIGHTS</span>
                <ul class="flex flex-col gap-3">
                  @for (hl of ind.highlights; track hl) {
                    <li class="flex items-start gap-2.5 text-[13px] text-white/90">
                      <span class="text-secondary font-bold">•</span>
                      <span>{{ hl }}</span>
                    </li>
                  }
                </ul>
              </div>
            }
          </div>
        </section>

        <!-- CTA -->
        <section class="max-w-7xl mx-auto px-6 lg:px-8 pt-10">
          <div class="p-8 lg:p-12 bg-surface-container-low border border-outline-variant flex flex-col md:flex-row items-center justify-between gap-6">
            <div class="flex flex-col gap-2">
              <h3 class="font-headline text-[22px] font-medium text-primary">Plan a {{ ind.name }} Project</h3>
              <p class="font-body text-[14px] text-on-surface-variant">Consult with our sector directorate on delivery parameters, regulatory codes, and feasibility.</p>
            </div>
            <a 
              routerLink="/contact"
              class="h-12 px-7 bg-primary text-white font-headline text-[11px] uppercase font-bold tracking-wider flex items-center justify-center gap-2 hover:bg-secondary hover:text-primary transition-colors shrink-0"
            >
              <span>DISCUSS SCOPE</span>
              <span class="material-symbols-outlined text-[16px]">arrow_forward</span>
            </a>
          </div>
        </section>

      </div>
    }
  `
})
export class IndustryDetailComponent implements OnInit {
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private industryService = inject(IndustryService);
  private seo = inject(SeoService);

  readonly industry = signal<Industry | null>(null);

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const slug = params.get('slug');
      if (slug) {
        const item = this.industryService.getIndustryBySlug(slug);
        if (item) {
          this.industry.set(item);
          this.seo.setPageMeta({
            title: `${item.name} | CHECP Sectors`,
            description: item.subtitle,
            path: `/industries/${item.slug}`,
            ogImage: item.featuredImage
          });
        } else {
          this.router.navigate(['/404']);
        }
      }
    });
  }
}
