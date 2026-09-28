import { Component, inject, signal, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { ServicesService } from '../../core/services/services.service';
import { ProjectService } from '../../core/services/project.service';
import { SeoService } from '../../core/services/seo.service';
import { BreadcrumbsComponent } from '../../shared/components/breadcrumbs.component';
import { ServiceItem, Project } from '../../core/models';

@Component({
  selector: 'app-service-detail',
  standalone: true,
  imports: [RouterLink, BreadcrumbsComponent],
  template: `
    @if (service(); as s) {
      <div class="pt-24 lg:pt-32 pb-20">
        
        <!-- Header -->
        <section class="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col gap-6">
          <app-breadcrumbs [items]="[{ label: 'Services', url: '/services' }, { label: s.name }]" />

          <div class="flex flex-col gap-3 pt-4">
            <span class="font-headline text-[11px] uppercase tracking-[0.2em] text-secondary font-bold">
              DISCIPLINE SPECIFICATION
            </span>
            <h1 class="font-headline text-fluid-h2 text-primary font-medium max-w-4xl">
              {{ s.name }}
            </h1>
          </div>

          <p class="font-body text-fluid-body text-on-surface-variant max-w-3xl leading-relaxed">
            {{ s.shortDescription }}
          </p>
        </section>

        <!-- Main Banner -->
        <section class="max-w-7xl mx-auto px-6 lg:px-8 pt-12 pb-16">
          <div class="w-full aspect-[21/9] overflow-hidden bg-surface-container border border-outline-variant">
            <img 
              [src]="s.image" 
              [alt]="s.name" 
              class="w-full h-full object-cover"
            />
          </div>
        </section>

        <!-- Detailed Overview & Capabilities -->
        <section class="max-w-7xl mx-auto px-6 lg:px-8 py-12 grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div class="lg:col-span-7 flex flex-col gap-6">
            <span class="font-headline text-[11px] uppercase tracking-[0.18em] text-secondary font-bold">OVERVIEW</span>
            <h2 class="font-headline text-[26px] lg:text-[32px] leading-tight text-primary font-medium">
              Disciplined technical leadership across every project variable.
            </h2>
            <p class="font-body text-[16px] text-on-surface-variant leading-relaxed">
              {{ s.description }}
            </p>
          </div>

          <div class="lg:col-span-5 bg-surface-container-low p-8 border border-outline-variant flex flex-col gap-6">
            <span class="font-headline text-[11px] uppercase tracking-[0.18em] text-secondary font-bold">CORE CAPABILITIES</span>
            <ul class="flex flex-col divide-y divide-outline-variant">
              @for (cap of s.capabilities; track cap) {
                <li class="py-3 flex items-start gap-3 text-[14px] text-primary font-medium">
                  <span class="material-symbols-outlined text-secondary text-[18px] shrink-0 mt-0.5">check</span>
                  <span>{{ cap }}</span>
                </li>
              }
            </ul>
          </div>
        </section>

        <!-- Methodology Stages -->
        @if (s.methodology && s.methodology.length > 0) {
          <section class="w-full bg-surface-container-low py-20 border-y border-outline-variant">
            <div class="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col gap-10">
              <div class="flex flex-col gap-2">
                <span class="font-headline text-[11px] uppercase tracking-[0.18em] text-secondary font-bold">EXECUTION PHASES</span>
                <h2 class="font-headline text-fluid-h2 text-primary font-medium">Delivery Methodology</h2>
              </div>

              <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                @for (m of s.methodology; track m.stage) {
                  <div class="p-6 bg-surface border border-outline-variant flex flex-col gap-3">
                    <span class="font-headline text-[11px] uppercase font-bold text-secondary tracking-widest">{{ m.stage }}</span>
                    <h3 class="font-headline text-[18px] font-semibold text-primary">{{ m.title }}</h3>
                    <p class="font-body text-[13px] text-on-surface-variant leading-relaxed">{{ m.description }}</p>
                  </div>
                }
              </div>
            </div>
          </section>
        }

        <!-- Related Projects -->
        @if (relatedProjects().length > 0) {
          <section class="max-w-7xl mx-auto px-6 lg:px-8 py-20 flex flex-col gap-8">
            <div class="flex items-center justify-between">
              <div>
                <span class="font-headline text-[11px] uppercase tracking-[0.18em] text-secondary font-bold">REPRESENTATIVE WORK</span>
                <h2 class="font-headline text-[24px] lg:text-[28px] font-medium text-primary">Related Projects</h2>
              </div>
              <a routerLink="/projects" class="font-headline text-[11px] uppercase font-bold tracking-wider text-secondary hover:text-primary transition-colors flex items-center gap-1">
                <span>ALL WORK</span>
                <span class="material-symbols-outlined text-[15px]">arrow_forward</span>
              </a>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
              @for (proj of relatedProjects(); track proj.id) {
                <article class="flex flex-col gap-4 bg-surface-container-low p-6 border border-outline-variant">
                  <div class="w-full aspect-[16/10] overflow-hidden bg-surface-container">
                    <img [src]="proj.featuredImage" [alt]="proj.name" class="w-full h-full object-cover transition-transform duration-700 hover:scale-105" />
                  </div>
                  <div class="flex flex-col gap-2">
                    <div class="text-[11px] font-headline uppercase text-on-surface-variant flex justify-between border-b border-outline-variant pb-2">
                      <span>{{ proj.location }}</span>
                      <span class="text-secondary font-medium">{{ proj.sector }}</span>
                    </div>
                    <h3 class="font-headline text-[20px] font-medium text-primary">{{ proj.name }}</h3>
                    <div class="pt-1">
                      <a [routerLink]="['/projects', proj.slug]" class="inline-flex items-center gap-1.5 font-headline text-[11px] uppercase font-bold tracking-wider text-primary hover:text-secondary transition-colors">
                        <span>VIEW CASE STUDY</span>
                        <span class="material-symbols-outlined text-[15px]">arrow_forward</span>
                      </a>
                    </div>
                  </div>
                </article>
              }
            </div>
          </section>
        }

        <!-- Final CTA -->
        <section class="max-w-7xl mx-auto px-6 lg:px-8 pt-8">
          <div class="p-8 lg:p-12 bg-primary text-white flex flex-col md:flex-row items-center justify-between gap-6">
            <div class="flex flex-col gap-2">
              <h3 class="font-headline text-[24px] font-medium text-white">Engage CHECP for {{ s.name }}</h3>
              <p class="font-body text-[14px] text-white/80">Connect with our commercial directorate to review program scope and contracting structures.</p>
            </div>
            <a 
              routerLink="/contact"
              class="h-12 px-7 bg-secondary text-primary font-headline text-[11px] uppercase font-bold tracking-wider flex items-center justify-center gap-2 hover:bg-white transition-colors shrink-0"
            >
              <span>DISCUSS YOUR PROJECT</span>
              <span class="material-symbols-outlined text-[16px]">arrow_forward</span>
            </a>
          </div>
        </section>

      </div>
    }
  `
})
export class ServiceDetailComponent implements OnInit {
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private servicesService = inject(ServicesService);
  private projectService = inject(ProjectService);
  private seo = inject(SeoService);

  readonly service = signal<ServiceItem | null>(null);
  readonly relatedProjects = signal<Project[]>([]);

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const slug = params.get('slug');
      if (slug) {
        const item = this.servicesService.getServiceBySlug(slug);
        if (item) {
          this.service.set(item);
          
          // Find related projects
          const related = this.projectService.projects().filter(p => item.relatedProjectSlugs.includes(p.slug));
          this.relatedProjects.set(related.length > 0 ? related : this.projectService.projects().slice(0, 2));

          this.seo.setPageMeta({
            title: `${item.name} | CHECP Engineering Services`,
            description: item.shortDescription,
            path: `/services/${item.slug}`,
            ogImage: item.image
          });
        } else {
          this.router.navigate(['/404']);
        }
      }
    });
  }
}
