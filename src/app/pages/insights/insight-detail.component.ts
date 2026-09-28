import { Component, inject, signal, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { InsightsService } from '../../core/services/insights.service';
import { SeoService } from '../../core/services/seo.service';
import { BreadcrumbsComponent } from '../../shared/components/breadcrumbs.component';
import { Article } from '../../core/models';

@Component({
  selector: 'app-insight-detail',
  standalone: true,
  imports: [RouterLink, BreadcrumbsComponent],
  template: `
    @if (article(); as a) {
      <div class="pt-24 lg:pt-32 pb-20">
        
        <!-- Header & Breadcrumbs -->
        <article class="max-w-4xl mx-auto px-6 lg:px-8 flex flex-col gap-6">
          <app-breadcrumbs [items]="[{ label: 'Insights', url: '/insights' }, { label: a.title }]" />

          <div class="flex items-center gap-3 pt-4 text-[11px] font-headline uppercase tracking-wider text-on-surface-variant">
            <span class="text-secondary font-bold">{{ a.category }}</span>
            <span>•</span>
            <span>{{ a.date }}</span>
            <span>•</span>
            <span>{{ a.readTime }}</span>
          </div>

          <h1 class="font-headline text-[32px] lg:text-[44px] leading-tight font-medium text-primary">
            {{ a.title }}
          </h1>

          <!-- Author Byline -->
          <div class="flex items-center gap-3 py-4 border-y border-outline-variant">
            <div class="w-10 h-10 rounded-full bg-surface-container-high border border-outline-variant flex items-center justify-center font-headline font-bold text-xs text-primary">
              {{ a.author.name.substring(0, 2) }}
            </div>
            <div class="flex flex-col">
              <span class="font-headline text-[14px] font-semibold text-primary">{{ a.author.name }}</span>
              <span class="font-body text-[12px] text-on-surface-variant">{{ a.author.role }}</span>
            </div>
          </div>

          <!-- Featured Image -->
          <div class="w-full aspect-[16/9] overflow-hidden bg-surface-container border border-outline-variant my-4">
            <img [src]="a.featuredImage" [alt]="a.title" class="w-full h-full object-cover" />
          </div>

          <!-- Article Prose Content -->
          <div class="flex flex-col gap-6 text-[16px] lg:text-[18px] font-body text-on-surface leading-relaxed pt-2">
            @for (para of a.content; track $index) {
              <p>{{ para }}</p>
            }
          </div>

          <!-- Tags & Share -->
          <div class="pt-8 mt-6 border-t border-outline-variant flex flex-wrap items-center justify-between gap-4">
            <div class="flex items-center gap-2">
              <span class="font-headline text-xs text-on-surface-variant uppercase tracking-wider">Tags:</span>
              @for (tag of a.tags; track tag) {
                <span class="px-2.5 py-1 bg-surface-container-low border border-outline-variant font-headline text-[11px] text-primary">
                  {{ tag }}
                </span>
              }
            </div>

            <a 
              routerLink="/insights" 
              class="font-headline text-[12px] uppercase font-bold text-secondary hover:text-primary transition-colors flex items-center gap-1.5"
            >
              <span class="material-symbols-outlined text-[16px] rotate-180">arrow_forward</span>
              <span>BACK TO INSIGHTS</span>
            </a>
          </div>
        </article>

        <!-- Related Articles -->
        @if (relatedArticles().length > 0) {
          <section class="max-w-4xl mx-auto px-6 lg:px-8 pt-16 mt-16 border-t border-outline-variant">
            <h2 class="font-headline text-[22px] font-medium text-primary mb-6">Further Reading</h2>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              @for (rel of relatedArticles(); track rel.id) {
                <div class="p-5 bg-surface-container-low border border-outline-variant flex flex-col gap-2">
                  <span class="text-[10px] font-headline uppercase tracking-wider text-secondary font-bold">{{ rel.category }}</span>
                  <h3 class="font-headline text-[16px] font-semibold text-primary">
                    <a [routerLink]="['/insights', rel.slug]" class="hover:text-secondary transition-colors">{{ rel.title }}</a>
                  </h3>
                </div>
              }
            </div>
          </section>
        }

      </div>
    }
  `
})
export class InsightDetailComponent implements OnInit {
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private insightsService = inject(InsightsService);
  private seo = inject(SeoService);

  readonly article = signal<Article | null>(null);
  readonly relatedArticles = signal<Article[]>([]);

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const slug = params.get('slug');
      if (slug) {
        const item = this.insightsService.getArticleBySlug(slug);
        if (item) {
          this.article.set(item);
          const related = this.insightsService.articles().filter(a => a.slug !== item.slug).slice(0, 2);
          this.relatedArticles.set(related);

          this.seo.setPageMeta({
            title: item.seoTitle || `${item.title} | CHECP Insights`,
            description: item.seoDescription || item.excerpt,
            path: `/insights/${item.slug}`,
            ogImage: item.featuredImage,
            ogType: 'article',
            structuredData: {
              '@context': 'https://schema.org',
              '@type': 'Article',
              'headline': item.title,
              'description': item.excerpt,
              'image': item.featuredImage,
              'author': {
                '@type': 'Organization',
                'name': 'CHECP'
              },
              'publisher': {
                '@type': 'Organization',
                'name': 'CHECP',
                'logo': {
                  '@type': 'ImageObject',
                  'url': 'https://checp.com/images/checp-logo.svg'
                }
              },
              'datePublished': '2025-11-01'
            }
          });
        } else {
          this.router.navigate(['/404']);
        }
      }
    });
  }
}
