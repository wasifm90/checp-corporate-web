import { Component, inject, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { InsightsService } from '../../core/services/insights.service';
import { SeoService } from '../../core/services/seo.service';
import { BreadcrumbsComponent } from '../../shared/components/breadcrumbs.component';

@Component({
  selector: 'app-insights-index',
  standalone: true,
  imports: [RouterLink, BreadcrumbsComponent],
  template: `
    <div class="pt-24 lg:pt-32 pb-20">
      
      <!-- Header -->
      <section class="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col gap-6">
        <app-breadcrumbs [items]="[{ label: 'Insights' }]" />

        <div class="flex flex-col gap-3 pt-4">
          <span class="font-headline text-[11px] uppercase tracking-[0.2em] text-secondary font-bold">
            ENGINEERING PERSPECTIVES
          </span>
          <h1 class="font-headline text-fluid-h2 text-primary font-medium max-w-4xl">
            News, Technical Papers &amp; Field Insights
          </h1>
        </div>

        <p class="font-body text-fluid-body text-on-surface-variant max-w-3xl leading-relaxed">
          Examining building science innovations, sustainable material technologies, digital site logistics, and milestone progress across regional job sites.
        </p>
      </section>

      <!-- Articles Grid -->
      <section class="max-w-7xl mx-auto px-6 lg:px-8 pt-16">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          @for (art of insightsService.articles(); track art.id) {
            <article class="flex flex-col bg-surface-container-low border border-outline-variant overflow-hidden group">
              <div class="w-full aspect-[16/10] overflow-hidden bg-surface-container">
                <img 
                  [src]="art.featuredImage" 
                  [alt]="art.title" 
                  class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
              </div>

              <div class="p-6 flex flex-col justify-between flex-1 gap-4">
                <div class="flex flex-col gap-2.5">
                  <div class="flex items-center justify-between text-[11px] font-headline uppercase tracking-wider text-on-surface-variant">
                    <span class="text-secondary font-bold">{{ art.category }}</span>
                    <span>{{ art.date }}</span>
                  </div>

                  <h2 class="font-headline text-[20px] font-semibold text-primary leading-snug">
                    <a [routerLink]="['/insights', art.slug]" class="hover:text-secondary transition-colors">
                      {{ art.title }}
                    </a>
                  </h2>

                  <p class="font-body text-[14px] text-on-surface-variant leading-relaxed">
                    {{ art.excerpt }}
                  </p>
                </div>

                <div class="pt-4 border-t border-outline-variant flex items-center justify-between text-[12px] font-headline">
                  <span class="text-on-surface-variant">{{ art.readTime }}</span>
                  <a 
                    [routerLink]="['/insights', art.slug]" 
                    class="font-bold text-primary hover:text-secondary flex items-center gap-1 transition-colors"
                  >
                    <span>READ ARTICLE</span>
                    <span class="material-symbols-outlined text-[15px]">arrow_forward</span>
                  </a>
                </div>
              </div>
            </article>
          }
        </div>
      </section>

    </div>
  `
})
export class InsightsIndexComponent implements OnInit {
  readonly insightsService = inject(InsightsService);
  private seo = inject(SeoService);

  ngOnInit(): void {
    this.seo.setPageMeta({
      title: 'Insights & Technical Papers | CHECP',
      description: 'Read the latest technical perspectives, milestone developments, and building science research from CHECP engineering teams.',
      path: '/insights'
    });
  }
}
