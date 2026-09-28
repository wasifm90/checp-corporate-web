import { Component, inject, signal, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { ProjectService } from '../../core/services/project.service';
import { SeoService } from '../../core/services/seo.service';
import { BreadcrumbsComponent } from '../../shared/components/breadcrumbs.component';
import { Project } from '../../core/models';

@Component({
  selector: 'app-project-detail',
  standalone: true,
  imports: [RouterLink, BreadcrumbsComponent],
  template: `
    @if (project(); as p) {
      <div class="pt-24 lg:pt-32 pb-20">
        
        <!-- Header & Breadcrumbs -->
        <section class="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col gap-6">
          <app-breadcrumbs [items]="[{ label: 'Projects', url: '/projects' }, { label: p.name }]" />

          <div class="flex flex-col gap-3 pt-4">
            <div class="flex items-center gap-2">
              <span class="w-2 h-2 bg-secondary inline-block"></span>
              <span class="font-headline text-[11px] uppercase tracking-[0.2em] text-secondary font-bold">
                {{ p.sector }}
              </span>
            </div>
            <h1 class="font-headline text-fluid-h2 text-primary font-medium max-w-4xl">
              {{ p.name }}
            </h1>
          </div>

          <p class="font-body text-fluid-body text-on-surface-variant max-w-3xl leading-relaxed">
            {{ p.shortDescription }}
          </p>

          <!-- Key Project Parameters Bar -->
          <div class="grid grid-cols-2 md:grid-cols-4 gap-6 py-6 border-y border-outline-variant mt-2 font-headline text-[12px]">
            <div>
              <span class="text-on-surface-variant uppercase tracking-wider block text-[10px]">Location</span>
              <span class="text-primary font-semibold text-[15px]">{{ p.location }}</span>
            </div>
            <div>
              <span class="text-on-surface-variant uppercase tracking-wider block text-[10px]">Sector / Discipline</span>
              <span class="text-primary font-semibold text-[15px]">{{ p.sector }}</span>
            </div>
            <div>
              <span class="text-on-surface-variant uppercase tracking-wider block text-[10px]">Delivery Year</span>
              <span class="text-primary font-semibold text-[15px]">{{ p.year }}</span>
            </div>
            <div>
              <span class="text-on-surface-variant uppercase tracking-wider block text-[10px]">Client / Stakeholder</span>
              <span class="text-primary font-semibold text-[15px]">{{ p.client || 'Institutional Partner' }}</span>
            </div>
          </div>
        </section>

        <!-- Project Hero Visual -->
        <section class="max-w-7xl mx-auto px-6 lg:px-8 pt-10 pb-16">
          <div class="w-full aspect-[21/10] overflow-hidden bg-surface-container border border-outline-variant">
            <img 
              [src]="p.featuredImage" 
              [alt]="p.name" 
              class="w-full h-full object-cover"
            />
          </div>
        </section>

        <!-- Editorial Content: Overview & Scope -->
        <section class="max-w-7xl mx-auto px-6 lg:px-8 py-10 grid grid-cols-1 lg:grid-cols-12 gap-12">
          <!-- Left: Narrative Overview -->
          <div class="lg:col-span-7 flex flex-col gap-8">
            <div class="flex flex-col gap-4">
              <span class="font-headline text-[11px] uppercase tracking-[0.18em] text-secondary font-bold">PROJECT OVERVIEW</span>
              <p class="font-body text-[16px] text-on-surface-variant leading-relaxed">
                {{ p.description }}
              </p>
            </div>

            @if (p.approach) {
              <div class="flex flex-col gap-3 pt-4 border-t border-outline-variant">
                <span class="font-headline text-[11px] uppercase tracking-[0.18em] text-secondary font-bold">ENGINEERING APPROACH</span>
                <h2 class="font-headline text-[22px] font-medium text-primary">Disciplined execution and constructability foresight</h2>
                <p class="font-body text-[15px] text-on-surface-variant leading-relaxed">
                  {{ p.approach }}
                </p>
              </div>
            }

            @if (p.outcome) {
              <div class="flex flex-col gap-3 pt-4 border-t border-outline-variant">
                <span class="font-headline text-[11px] uppercase tracking-[0.18em] text-secondary font-bold">OUTCOME &amp; PERFORMANCE</span>
                <p class="font-body text-[15px] text-on-surface-variant leading-relaxed">
                  {{ p.outcome }}
                </p>
              </div>
            }
          </div>

          <!-- Right: Scope & Technical Specs -->
          <div class="lg:col-span-5 flex flex-col gap-8">
            <!-- Scope Checklist -->
            <div class="bg-surface-container-low p-8 border border-outline-variant flex flex-col gap-5">
              <span class="font-headline text-[11px] uppercase tracking-[0.18em] text-secondary font-bold">SCOPE OF WORK</span>
              <ul class="flex flex-col divide-y divide-outline-variant">
                @for (item of p.scope; track item) {
                  <li class="py-3 flex items-start gap-3 text-[14px] text-primary">
                    <span class="material-symbols-outlined text-secondary text-[18px] shrink-0 mt-0.5">check</span>
                    <span>{{ item }}</span>
                  </li>
                }
              </ul>
            </div>

            <!-- Technical Specifications -->
            @if (p.technicalSpecs && p.technicalSpecs.length > 0) {
              <div class="bg-primary text-white p-8 border border-outline-variant flex flex-col gap-5">
                <span class="font-headline text-[11px] uppercase tracking-[0.2em] text-secondary font-bold">TECHNICAL PARAMETERS</span>
                <div class="flex flex-col divide-y divide-white/10">
                  @for (spec of p.technicalSpecs; track spec.label) {
                    <div class="py-2.5 flex justify-between items-baseline text-[13px]">
                      <span class="text-white/70 font-body">{{ spec.label }}</span>
                      <span class="text-white font-headline font-semibold">{{ spec.value }}</span>
                    </div>
                  }
                </div>
              </div>
            }
          </div>
        </section>

        <!-- Phased Construction Sequence (Architectural Timeline) -->
        @if (p.phases && p.phases.length > 0) {
          <section class="w-full bg-surface-container-low py-16 lg:py-20 border-y border-outline-variant">
            <div class="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col gap-10">
              
              <!-- Section Header -->
              <div class="flex flex-col md:flex-row md:items-end justify-between gap-4">
                <div class="flex flex-col gap-2">
                  <div class="flex items-center gap-2">
                    <span class="w-2 h-2 bg-secondary inline-block"></span>
                    <span class="font-headline text-[11px] uppercase tracking-[0.2em] text-secondary font-bold">
                      CONSTRUCTION CHRONOLOGY
                    </span>
                  </div>
                  <h2 class="font-headline text-fluid-h3 text-primary font-medium">
                    Phased Infrastructure Execution
                  </h2>
                </div>
                <p class="font-body text-[14px] text-on-surface-variant max-w-md">
                  From deep desert subgrade preparation and stormwater culverts to continuous slipform asphalt paving and live smart highway commissioning.
                </p>
              </div>

              <!-- Interactive Phase Tab Selector -->
              <div class="grid grid-cols-1 md:grid-cols-3 gap-4 border-b border-outline-variant pb-6">
                @for (phase of p.phases; track phase.phaseNumber; let idx = $index) {
                  <button
                    type="button"
                    (click)="selectedPhaseIndex.set(idx)"
                    class="text-left p-5 transition-all duration-300 border flex flex-col gap-2 rounded-none cursor-pointer"
                    [class]="selectedPhaseIndex() === idx 
                      ? 'bg-primary text-white border-secondary shadow-lg' 
                      : 'bg-surface-container text-primary border-outline-variant hover:border-secondary/40 hover:bg-surface-container-high'"
                  >
                    <div class="flex items-center justify-between">
                      <span 
                        class="font-headline text-[11px] tracking-widest uppercase font-bold"
                        [class]="selectedPhaseIndex() === idx ? 'text-secondary' : 'text-on-surface-variant'"
                      >
                        PHASE {{ phase.phaseNumber }}
                      </span>
                      <span 
                        class="w-2 h-2 rounded-full"
                        [class]="selectedPhaseIndex() === idx ? 'bg-secondary animate-pulse' : 'bg-outline-variant'"
                      ></span>
                    </div>
                    <h3 class="font-headline text-[15px] font-semibold leading-snug">
                      {{ phase.stageName }}
                    </h3>
                    <p 
                      class="text-[12px] line-clamp-1 font-body"
                      [class]="selectedPhaseIndex() === idx ? 'text-white/80' : 'text-on-surface-variant'"
                    >
                      {{ phase.title }}
                    </p>
                  </button>
                }
              </div>

              <!-- Active Phase Deep-Dive Feature Display -->
              @if (p.phases[selectedPhaseIndex()]; as activePhase) {
                <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-surface-container border border-outline-variant p-6 lg:p-8">
                  
                  <!-- Phase High-Res Visual Viewport -->
                  <div class="lg:col-span-7 relative aspect-[16/10] overflow-hidden bg-primary group">
                    <img 
                      [src]="activePhase.image" 
                      [alt]="activePhase.title" 
                      class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <!-- Telemetry HUD Overlay -->
                    <div class="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent p-4 sm:p-5 flex items-center justify-between gap-3 text-white">
                      <div class="flex items-center gap-2 text-[11px] font-headline tracking-wider uppercase">
                        <span class="w-2 h-2 rounded-full bg-secondary inline-block"></span>
                        <span class="text-secondary font-bold">STAGE {{ activePhase.phaseNumber }}:</span>
                        <span class="text-white/90 truncate">{{ activePhase.telemetryStatus }}</span>
                      </div>
                    </div>
                  </div>

                  <!-- Phase Engineering Details -->
                  <div class="lg:col-span-5 flex flex-col gap-5">
                    <div class="flex flex-col gap-2">
                      <span class="font-headline text-[11px] uppercase tracking-[0.2em] text-secondary font-bold">
                        PHASE {{ activePhase.phaseNumber }} • {{ activePhase.stageName }}
                      </span>
                      <h3 class="font-headline text-[22px] font-medium text-primary">
                        {{ activePhase.title }}
                      </h3>
                    </div>

                    <p class="font-body text-[14px] text-on-surface-variant leading-relaxed">
                      {{ activePhase.description }}
                    </p>

                    <!-- Technical Specs for this Phase -->
                    @if (activePhase.specs && activePhase.specs.length > 0) {
                      <div class="bg-surface-container-low p-5 border border-outline-variant flex flex-col gap-3">
                        <span class="font-headline text-[10px] uppercase tracking-widest text-secondary font-bold">
                          PHASE PARAMETERS
                        </span>
                        <div class="grid grid-cols-1 gap-2.5 divide-y divide-outline-variant">
                          @for (spec of activePhase.specs; track spec.label) {
                            <div class="pt-2 flex justify-between items-baseline text-[12px]">
                              <span class="text-on-surface-variant font-body">{{ spec.label }}</span>
                              <span class="text-primary font-headline font-semibold">{{ spec.value }}</span>
                            </div>
                          }
                        </div>
                      </div>
                    }

                    <!-- Progress Indicator Navigation -->
                    <div class="flex items-center justify-between pt-2">
                      <div class="flex items-center gap-2">
                        @for (pItem of p.phases; track pItem.phaseNumber; let pIdx = $index) {
                          <button
                            type="button"
                            (click)="selectedPhaseIndex.set(pIdx)"
                            class="h-1.5 transition-all duration-300 rounded-full cursor-pointer"
                            [class]="selectedPhaseIndex() === pIdx ? 'w-8 bg-secondary' : 'w-3 bg-outline-variant hover:bg-secondary/40'"
                            [attr.aria-label]="'Go to phase ' + (pIdx + 1)"
                          ></button>
                        }
                      </div>

                      <div class="flex items-center gap-2">
                        <button
                          type="button"
                          (click)="selectedPhaseIndex.set((selectedPhaseIndex() - 1 + p.phases.length) % p.phases.length)"
                          class="w-8 h-8 flex items-center justify-center border border-outline-variant bg-surface-container hover:bg-primary hover:text-white transition-colors cursor-pointer text-primary"
                          title="Previous Phase"
                        >
                          <span class="material-symbols-outlined text-[16px]">chevron_left</span>
                        </button>
                        <button
                          type="button"
                          (click)="selectedPhaseIndex.set((selectedPhaseIndex() + 1) % p.phases.length)"
                          class="w-8 h-8 flex items-center justify-center border border-outline-variant bg-surface-container hover:bg-primary hover:text-white transition-colors cursor-pointer text-primary"
                          title="Next Phase"
                        >
                          <span class="material-symbols-outlined text-[16px]">chevron_right</span>
                        </button>
                      </div>
                    </div>

                  </div>
                </div>
              }

              <!-- Side-by-Side 3-Phase Chronology Cards -->
              <div class="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
                @for (phase of p.phases; track phase.phaseNumber; let idx = $index) {
                  <div 
                    (click)="selectedPhaseIndex.set(idx)"
                    class="group flex flex-col gap-3 cursor-pointer bg-surface-container border border-outline-variant p-4 transition-all duration-300 hover:border-secondary"
                    [class.ring-2]="selectedPhaseIndex() === idx"
                    [class.ring-secondary]="selectedPhaseIndex() === idx"
                  >
                    <div class="relative aspect-[16/10] overflow-hidden bg-primary">
                      <img 
                        [src]="phase.image" 
                        [alt]="phase.stageName" 
                        class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        loading="lazy"
                      />
                      <span class="absolute top-2.5 left-2.5 px-2.5 py-1 bg-primary/90 backdrop-blur-sm text-secondary font-headline text-[10px] tracking-wider uppercase font-bold border border-secondary/30">
                        PHASE {{ phase.phaseNumber }}
                      </span>
                    </div>
                    <div class="flex flex-col gap-1">
                      <h4 class="font-headline text-[14px] font-semibold text-primary group-hover:text-secondary transition-colors">
                        {{ phase.stageName }}
                      </h4>
                      <p class="font-body text-[12px] text-on-surface-variant line-clamp-2 leading-relaxed">
                        {{ phase.title }}
                      </p>
                    </div>
                  </div>
                }
              </div>

            </div>
          </section>
        }

        <!-- Project Gallery -->
        @if (p.gallery && p.gallery.length > 1) {
          <section class="max-w-7xl mx-auto px-6 lg:px-8 py-16 flex flex-col gap-6">
            <span class="font-headline text-[11px] uppercase tracking-[0.18em] text-secondary font-bold">PHOTOGRAPHY</span>
            <h2 class="font-headline text-[24px] font-medium text-primary">Site Execution Gallery</h2>

            <div class="grid grid-cols-1 md:grid-cols-4 gap-6">
              @for (img of p.gallery; track img) {
                <div class="w-full aspect-[16/10] overflow-hidden bg-surface-container border border-outline-variant">
                  <img [src]="img" [alt]="p.name" class="w-full h-full object-cover transition-transform duration-700 hover:scale-105" loading="lazy" />
                </div>
              }
            </div>
          </section>
        }

        <!-- Related Projects -->
        @if (relatedProjects().length > 0) {
          <section class="w-full bg-surface-container-low py-20 border-t border-outline-variant">
            <div class="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col gap-10">
              <div class="flex items-center justify-between">
                <div>
                  <span class="font-headline text-[11px] uppercase tracking-[0.18em] text-secondary font-bold">PORTFOLIO CONTINUITY</span>
                  <h2 class="font-headline text-[24px] lg:text-[28px] font-medium text-primary">Related Projects</h2>
                </div>
                <a routerLink="/projects" class="font-headline text-[11px] uppercase font-bold tracking-wider text-secondary hover:text-primary transition-colors flex items-center gap-1">
                  <span>ALL PROJECTS</span>
                  <span class="material-symbols-outlined text-[15px]">arrow_forward</span>
                </a>
              </div>

              <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                @for (rel of relatedProjects(); track rel.id) {
                  <article class="flex flex-col gap-4 bg-surface p-6 border border-outline-variant">
                    <div class="w-full aspect-[16/10] overflow-hidden bg-surface-container">
                      <img [src]="rel.featuredImage" [alt]="rel.name" class="w-full h-full object-cover transition-transform duration-700 hover:scale-105" />
                    </div>
                    <div class="flex flex-col gap-2">
                      <div class="text-[11px] font-headline uppercase text-on-surface-variant flex justify-between border-b border-outline-variant pb-2">
                        <span>{{ rel.location }}</span>
                        <span class="text-secondary font-medium">{{ rel.sector }}</span>
                      </div>
                      <h3 class="font-headline text-[20px] font-medium text-primary">{{ rel.name }}</h3>
                      <div class="pt-1">
                        <a [routerLink]="['/projects', rel.slug]" class="inline-flex items-center gap-1.5 font-headline text-[11px] uppercase font-bold tracking-wider text-primary hover:text-secondary transition-colors">
                          <span>EXPLORE PROJECT</span>
                          <span class="material-symbols-outlined text-[15px]">arrow_forward</span>
                        </a>
                      </div>
                    </div>
                  </article>
                }
              </div>
            </div>
          </section>
        }

      </div>
    }
  `
})
export class ProjectDetailComponent implements OnInit {
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private projectService = inject(ProjectService);
  private seo = inject(SeoService);

  readonly project = signal<Project | null>(null);
  readonly relatedProjects = signal<Project[]>([]);
  readonly selectedPhaseIndex = signal<number>(0);

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const slug = params.get('slug');
      if (slug) {
        const item = this.projectService.getProjectBySlug(slug);
        if (item) {
          this.project.set(item);
          const related = this.projectService.projects().filter(p => p.slug !== item.slug).slice(0, 2);
          this.relatedProjects.set(related);

          this.seo.setPageMeta({
            title: `${item.name} | CHECP Case Study`,
            description: item.shortDescription,
            path: `/projects/${item.slug}`,
            ogImage: item.featuredImage,
            structuredData: {
              '@context': 'https://schema.org',
              '@type': 'CreativeWork',
              'name': item.name,
              'headline': item.name,
              'description': item.shortDescription,
              'image': item.featuredImage,
              'creator': {
                '@type': 'Organization',
                'name': 'CHECP'
              },
              'locationCreated': {
                '@type': 'Place',
                'name': item.location
              }
            }
          });
        } else {
          this.router.navigate(['/404']);
        }
      }
    });
  }
}
