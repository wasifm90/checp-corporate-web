import { Component, inject, signal, computed, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ProjectService } from '../../core/services/project.service';
import { SeoService } from '../../core/services/seo.service';
import { BreadcrumbsComponent } from '../../shared/components/breadcrumbs.component';

@Component({
  selector: 'app-projects-index',
  standalone: true,
  imports: [RouterLink, BreadcrumbsComponent],
  template: `
    <div class="pt-24 lg:pt-32 pb-20">
      
      <!-- Header -->
      <section class="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col gap-6">
        <app-breadcrumbs [items]="[{ label: 'Projects' }]" />

        <div class="flex flex-col gap-3 pt-4">
          <span class="font-headline text-[11px] uppercase tracking-[0.2em] text-secondary font-bold">
            PORTFOLIO OF EXCELLENCE
          </span>
          <h1 class="font-headline text-fluid-h2 text-primary font-medium max-w-4xl">
            Selected Works &amp; Landmark Deliveries
          </h1>
        </div>

        <p class="font-body text-fluid-body text-on-surface-variant max-w-3xl leading-relaxed">
          From central banking headquarters and high-rise structural foundations to sovereign luxury atriums and coastal maritime spines, CHECP executes high-complexity assignments with surgical precision.
        </p>

        <!-- Filter Tabs -->
        <div class="flex flex-wrap gap-2 pt-6 border-b border-outline-variant pb-4">
          @for (filter of availableFilters; track filter) {
            <button 
              type="button"
              (click)="selectedFilter.set(filter)"
              class="px-4 py-2 text-[12px] font-headline font-semibold uppercase tracking-wider transition-colors border"
              [class.bg-primary]="selectedFilter() === filter"
              [class.text-white]="selectedFilter() === filter"
              [class.border-primary]="selectedFilter() === filter"
              [class.bg-surface]="selectedFilter() !== filter"
              [class.text-primary]="selectedFilter() !== filter"
              [class.border-outline-variant]="selectedFilter() !== filter"
              [class.hover:border-primary]="selectedFilter() !== filter"
            >
              {{ filter }}
            </button>
          }
        </div>
      </section>

      <!-- Projects Grid -->
      <section class="max-w-7xl mx-auto px-6 lg:px-8 pt-12">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          @for (proj of filteredProjects(); track proj.id) {
            <article class="flex flex-col gap-5 bg-surface-container-low p-6 lg:p-8 border border-outline-variant">
              <div class="w-full aspect-[16/10] overflow-hidden bg-surface-container">
                <img 
                  [src]="proj.featuredImage" 
                  [alt]="proj.name" 
                  class="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  loading="lazy"
                />
              </div>

              <div class="flex flex-col gap-3">
                <div class="text-[11px] font-headline uppercase tracking-wider text-on-surface-variant flex items-center justify-between border-b border-outline-variant pb-3">
                  <span>{{ proj.location }}</span>
                  <span class="text-secondary font-bold">{{ proj.sector }}</span>
                </div>

                <h2 class="font-headline text-[22px] lg:text-[26px] font-medium text-primary leading-tight">
                  <a [routerLink]="['/projects', proj.slug]" class="hover:text-secondary transition-colors">
                    {{ proj.name }}
                  </a>
                </h2>

                <p class="font-body text-[14px] text-on-surface-variant leading-relaxed">
                  {{ proj.shortDescription }}
                </p>

                <!-- Project Metrics preview -->
                @if (proj.metrics && proj.metrics.length > 0) {
                  <div class="grid grid-cols-2 gap-3 pt-2 pb-1 border-t border-outline-variant/60">
                    @for (m of proj.metrics.slice(0, 2); track m.label) {
                      <div>
                        <span class="font-headline text-[10px] uppercase tracking-wider text-on-surface-variant block">{{ m.label }}</span>
                        <span class="font-headline text-[14px] font-bold text-primary">{{ m.value }}</span>
                      </div>
                    }
                  </div>
                }

                <div class="pt-2">
                  <a 
                    [routerLink]="['/projects', proj.slug]" 
                    class="inline-flex items-center gap-1.5 font-headline text-[12px] uppercase font-bold tracking-wider text-primary hover:text-secondary transition-colors"
                  >
                    <span class="border-b border-primary pb-0.5 hover:border-secondary">EXPLORE CASE STUDY</span>
                    <span class="material-symbols-outlined text-[16px]">arrow_forward</span>
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
export class ProjectsIndexComponent implements OnInit {
  private projectService = inject(ProjectService);
  private seo = inject(SeoService);

  readonly availableFilters = ['All', 'Commercial', 'Civil & Structural', 'Interior Fit-Out', 'Specialized Infrastructure'];
  readonly selectedFilter = signal<string>('All');

  readonly filteredProjects = computed(() => {
    const f = this.selectedFilter();
    const all = this.projectService.projects();
    if (f === 'All') return all;
    return all.filter((p) => p.sector.toLowerCase().includes(f.toLowerCase()));
  });

  ngOnInit(): void {
    this.seo.setPageMeta({
      title: 'Projects Portfolio & Case Studies | CHECP',
      description: 'Explore landmark construction and engineering case studies executed by CHECP across commercial, civil structural, interior fit-out, and marine infrastructure.',
      path: '/projects'
    });
  }
}
