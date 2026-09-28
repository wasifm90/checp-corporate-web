import { Component, inject, signal, OnInit, OnDestroy } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CompanyService } from '../../core/services/company.service';
import { ProjectService } from '../../core/services/project.service';
import { ServicesService } from '../../core/services/services.service';
import { IndustryService } from '../../core/services/industry.service';
import { InsightsService } from '../../core/services/insights.service';
import { SeoService } from '../../core/services/seo.service';

import { CounterComponent } from '../../shared/components/counter.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, CounterComponent],
  template: `
    <!-- SECTION 1 — CINEMATIC HERO (Fresh Architectural Video Reel Experience) -->
    <section 
      class="relative w-full min-h-[92vh] lg:min-h-screen flex flex-col justify-end overflow-hidden bg-primary cursor-pointer select-none"
      (click)="onBannerClick($event)"
      (touchstart)="onTouchStart($event)"
      (touchend)="onTouchEnd($event)"
    >
      
      <!-- Video Viewport & Multi-Camera Dynamic Backgrounds -->
      <div class="absolute inset-0 overflow-hidden pointer-events-none">
        
        <!-- Multi-Camera Background Layers with Cross-Fade & Dynamic Faster Motion -->
        @for (feed of videoFeeds; track feed.id; let idx = $index) {
          <div 
            class="absolute inset-[-6%] w-[112%] h-[112%] bg-cover bg-center bg-no-repeat transition-opacity duration-1000 ease-in-out"
            [class.opacity-100]="activeFeedIndex() === idx"
            [class.opacity-0]="activeFeedIndex() !== idx"
            [class.hero-video-active-0]="activeFeedIndex() === 0 && idx === 0"
            [class.hero-video-active-1]="activeFeedIndex() === 1 && idx === 1"
            [class.hero-video-active-2]="activeFeedIndex() === 2 && idx === 2"
            [class.hero-video-active-3]="activeFeedIndex() === 3 && idx === 3"
            [style.backgroundImage]="'url(' + feed.image + ')'"
          ></div>
        }

        <!-- Broadcast Video Scanlines & HUD Texture -->
        <div class="video-scanline-overlay absolute inset-0 opacity-25 pointer-events-none"></div>

        <!-- Atmospheric Architectural Light Sweep Sheen -->
        <div class="hero-light-sweep absolute inset-0 pointer-events-none"></div>

        <!-- Active Structural Laser Alignment Level Line -->
        <div class="laser-scan-line absolute left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-secondary to-transparent shadow-[0_0_12px_#C8963E]"></div>

        <!-- Active Structural Welding Arc Flash Nodes on Superstructure -->
        <div class="welding-flash-1 absolute top-[30%] left-[48%] w-3.5 h-3.5 rounded-full bg-white"></div>
        <div class="welding-flash-2 absolute top-[42%] right-[32%] w-4 h-4 rounded-full bg-white"></div>

        <!-- Upward Drifting Spark / Dust Particles -->
        <div class="particle-1 absolute bottom-[32%] left-[46%] w-1.5 h-1.5 rounded-full bg-secondary"></div>
        <div class="particle-2 absolute bottom-[28%] left-[54%] w-1 h-1 rounded-full bg-white"></div>
        <div class="particle-1 absolute bottom-[38%] right-[38%] w-1.5 h-1.5 rounded-full bg-secondary" style="animation-delay: 1.8s;"></div>

        <!-- Warm Amber/Gold Ambient Lighting Bloom -->
        <div class="absolute inset-0 bg-[radial-gradient(circle_at_60%_35%,rgba(200,150,62,0.18),transparent_65%)] pointer-events-none"></div>

        <!-- Multi-tier Contrast Gradients for Optimal Legibility -->
        <div class="absolute inset-0 bg-gradient-to-t from-primary via-primary/80 to-primary/30 pointer-events-none"></div>
      </div>

      <!-- Viewfinder Architectural Corner Brackets Overlay -->
      <div class="absolute inset-4 sm:inset-6 lg:inset-8 pointer-events-none flex flex-col justify-between z-10">
        <div class="flex justify-between items-start">
          <div class="w-5 h-5 border-t-2 border-l-2 border-secondary/70"></div>
          <div class="w-5 h-5 border-t-2 border-r-2 border-secondary/70"></div>
        </div>
        <div class="flex justify-between items-end">
          <div class="w-5 h-5 border-b-2 border-l-2 border-secondary/70"></div>
          <div class="w-5 h-5 border-b-2 border-r-2 border-secondary/70"></div>
        </div>
      </div>

      <!-- Hero Content Container -->
      <div class="relative z-20 max-w-7xl mx-auto w-full px-6 lg:px-8 pb-8 pt-28 lg:pt-36 flex flex-col gap-6 text-on-primary">
        
        <!-- Live Video Header Bar & Telemetry HUD -->
        <div class="flex flex-wrap items-center justify-between gap-3">
          <div class="flex items-center gap-3">
            <span class="w-2.5 h-2.5 rounded-full bg-secondary inline-block live-beacon shadow-sm shadow-secondary/50"></span>
            <span class="font-headline text-[11px] uppercase tracking-[0.2em] text-secondary font-bold">
              {{ company.profile().heroEyebrow }}
            </span>
          </div>

          <!-- Video Broadcast Telemetry HUD Pill -->
          <div class="flex items-center gap-2.5 px-3 py-1.5 bg-black/65 backdrop-blur-md border border-white/20 text-white font-headline text-[10px] sm:text-[11px] tracking-wider uppercase">
            <div class="flex items-center gap-2">
              <span class="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
              <span class="font-bold text-red-400">REC</span>
              <span class="text-white/40">|</span>
              <span class="font-mono text-[11px] sm:text-[12px] text-white tracking-widest font-semibold">{{ timecode() }}</span>
            </div>
            <span class="hidden sm:inline text-white/30">•</span>
            <span class="hidden sm:inline text-white/80">4K UHD &bull; 60 FPS</span>
            <span class="hidden md:inline text-white/30">•</span>
            <span class="hidden md:inline text-secondary font-bold">{{ videoFeeds[activeFeedIndex()].title }}</span>
          </div>
        </div>

        <h1 class="font-headline text-fluid-hero leading-[1.08] font-medium tracking-tight text-white max-w-4xl">
          Building with precision.<br>Creating lasting value.
        </h1>

        <p class="font-body text-fluid-body text-white/85 leading-relaxed max-w-2xl">
          {{ company.profile().heroSupportingCopy }}
        </p>

        <div class="flex flex-col sm:flex-row gap-4 pt-1">
          <a 
            routerLink="/contact"
            class="h-13 py-3.5 px-7 bg-secondary text-primary font-headline text-[12px] uppercase font-bold tracking-wider flex items-center justify-center gap-2 hover:bg-white transition-colors"
          >
            <span>START A PROJECT</span>
            <span class="material-symbols-outlined text-[16px]">arrow_forward</span>
          </a>
          <a 
            routerLink="/projects"
            class="h-13 py-3.5 px-7 border border-white/25 bg-white/5 backdrop-blur-sm text-white font-headline text-[12px] uppercase tracking-wider flex items-center justify-center hover:bg-white/15 transition-colors"
          >
            EXPLORE OUR WORK
          </a>
        </div>

        <!-- Video Reel Timeline & Interaction Bar -->
        <div class="mt-2 pt-4 border-t border-white/15 flex flex-col gap-3">
          
          <!-- Segmented Video Timeline Progress Bars -->
          <div class="grid grid-cols-4 gap-2.5 w-full max-w-xl">
            @for (feed of videoFeeds; track feed.id; let idx = $index) {
              <div 
                (click)="selectFeed(idx); $event.stopPropagation()"
                class="group flex flex-col gap-1.5 cursor-pointer py-1"
                [title]="feed.title"
              >
                <div class="h-1 sm:h-1.5 w-full bg-white/20 rounded-full overflow-hidden transition-colors group-hover:bg-white/40">
                  <div 
                    class="h-full bg-secondary transition-all duration-500 rounded-full"
                    [class.w-full]="activeFeedIndex() === idx"
                    [class.w-0]="activeFeedIndex() !== idx"
                  ></div>
                </div>
                <div class="hidden sm:flex justify-between items-center text-[10px] font-headline tracking-wider uppercase">
                  <span [class]="activeFeedIndex() === idx ? 'text-secondary font-bold' : 'text-white/50 group-hover:text-white/80'">
                    {{ feed.title }}
                  </span>
                </div>
              </div>
            }
          </div>

          <!-- Active Site Telemetry Readout & Interaction Controls -->
          <div class="flex flex-wrap items-center justify-between gap-3 text-[11px] font-headline tracking-wider">
            <!-- Active Site Telemetry Readout -->
            <div class="flex items-center gap-2 text-white/85 bg-black/45 backdrop-blur-sm px-3.5 py-1.5 border border-white/15">
              <span class="w-1.5 h-1.5 rounded-full bg-secondary animate-ping"></span>
              <span class="text-secondary font-bold">{{ videoFeeds[activeFeedIndex()].location }}:</span>
              <span class="text-white">{{ videoFeeds[activeFeedIndex()].task }}</span>
            </div>

            <!-- Interaction Hints & Navigation Chevrons -->
            <div class="flex items-center gap-3">
              <span class="text-white/50 text-[10px] sm:text-[11px] tracking-wider uppercase flex items-center gap-1.5">
                <span class="material-symbols-outlined text-[14px] text-secondary">swipe</span>
                <span class="hidden sm:inline">Click banner or swipe to advance</span>
                <span class="sm:hidden">Swipe or tap banner</span>
              </span>

              <div class="flex items-center gap-1">
                <button
                  type="button"
                  (click)="prevFeed(); $event.stopPropagation()"
                  class="w-7 h-7 flex items-center justify-center bg-black/50 hover:bg-white/20 border border-white/20 text-white rounded-sm transition-colors cursor-pointer"
                  title="Previous scene"
                >
                  <span class="material-symbols-outlined text-[15px]">chevron_left</span>
                </button>
                <button
                  type="button"
                  (click)="nextFeed(); $event.stopPropagation()"
                  class="w-7 h-7 flex items-center justify-center bg-black/50 hover:bg-white/20 border border-white/20 text-white rounded-sm transition-colors cursor-pointer"
                  title="Next scene"
                >
                  <span class="material-symbols-outlined text-[15px]">chevron_right</span>
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>

    <!-- SECTION 2 — COMPANY INTRODUCTION -->
    <section class="w-full bg-surface-container-low px-6 lg:px-8 py-20 flex flex-col gap-6 border-b border-outline-variant" id="who-we-are">
      <div class="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        <div class="lg:col-span-4 flex flex-col gap-2">
          <div class="flex items-center gap-2">
            <span class="w-1.5 h-1.5 bg-secondary inline-block"></span>
            <span class="font-headline text-[11px] uppercase tracking-[0.18em] text-secondary font-bold">
              WHO WE ARE
            </span>
          </div>
          <h2 class="font-headline text-[28px] lg:text-[36px] leading-[36px] lg:leading-[44px] text-primary font-medium">
            Built on experience.<br>Driven by relationships.
          </h2>
        </div>

        <div class="lg:col-span-8 flex flex-col gap-6">
          <p class="font-body text-[16px] text-on-surface-variant leading-relaxed">
            {{ company.profile().whoWeAreBody }}
          </p>
          <div>
            <a 
              routerLink="/about" 
              class="inline-flex items-center gap-2 text-primary font-headline text-[12px] uppercase font-bold tracking-wider hover:text-secondary transition-colors"
            >
              <span>ABOUT OUR COMPANY</span>
              <span class="material-symbols-outlined text-[16px]">arrow_forward</span>
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- SECTION 3 — COMPANY METRICS -->
    <section class="w-full bg-primary text-on-primary px-6 lg:px-8 py-16">
      <div class="max-w-7xl mx-auto w-full grid grid-cols-2 md:grid-cols-4 gap-8">
        @for (metric of company.profile().metrics; track metric.label) {
          <div class="flex flex-col gap-1 border-l border-secondary/40 pl-5">
            <span class="font-headline text-[42px] lg:text-[52px] leading-tight font-light text-white tracking-tight">
              @if (metric.targetNumber !== undefined) {
                <app-counter [target]="metric.targetNumber" [suffix]="metric.suffix || ''" [duration]="2200" />
              } @else {
                {{ metric.value }}
              }
            </span>
            <span class="font-headline text-[11px] text-white/70 uppercase tracking-wider">
              {{ metric.label }}
            </span>
          </div>
        }
      </div>
    </section>

    <!-- SECTION 4 — SELECTED PROJECTS (Editorial Presentation) -->
    <section class="w-full px-6 lg:px-8 py-20 lg:py-28 flex flex-col gap-12 bg-surface" id="selected-work">
      <div class="max-w-7xl mx-auto w-full flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4">
        <div class="flex flex-col gap-2">
          <span class="font-headline text-[11px] uppercase tracking-[0.18em] text-secondary font-bold">SELECTED WORK</span>
          <h2 class="font-headline text-fluid-h2 text-primary font-medium">
            Projects built to perform. Designed to endure.
          </h2>
        </div>
        <p class="font-body text-[15px] text-on-surface-variant max-w-md">
          Flagship engineering executions and high-specification architectural works completed across the region.
        </p>
      </div>

      <div class="max-w-7xl mx-auto w-full flex flex-col gap-10 lg:gap-14">
        <!-- Project 1: Large Feature -->
        @if (projectService.projects()[0]; as p1) {
          <article class="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center bg-surface-container-low p-6 lg:p-10 border border-outline-variant">
            <div class="w-full lg:col-span-7 aspect-[16/10] overflow-hidden bg-surface-container">
              <img 
                [src]="p1.featuredImage" 
                [alt]="p1.name" 
                class="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                loading="lazy"
              />
            </div>
            <div class="w-full lg:col-span-5 flex flex-col gap-4">
              <div class="text-[11px] font-headline uppercase tracking-wider text-on-surface-variant flex items-center justify-between border-b border-outline-variant pb-3">
                <span>{{ p1.location }}</span>
                <span class="text-secondary font-bold">{{ p1.sector }}</span>
              </div>
              <h3 class="font-headline text-[24px] lg:text-[30px] font-medium text-primary leading-tight">
                {{ p1.name }}
              </h3>
              <p class="font-body text-[14px] text-on-surface-variant leading-relaxed">
                {{ p1.shortDescription }}
              </p>
              <div class="pt-2">
                <a 
                  [routerLink]="['/projects', p1.slug]" 
                  class="inline-flex items-center gap-2 font-headline text-[12px] uppercase font-bold tracking-wider text-primary hover:text-secondary transition-colors"
                >
                  <span class="border-b border-primary pb-0.5 hover:border-secondary">VIEW PROJECT</span>
                  <span class="material-symbols-outlined text-[16px]">arrow_forward</span>
                </a>
              </div>
            </div>
          </article>
        }

        <!-- Project 2 & 3: Two-Column Desktop -->
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
          @if (projectService.projects()[1]; as p2) {
            <article class="flex flex-col gap-5 bg-surface-container-low p-6 border border-outline-variant">
              <div class="w-full aspect-[16/10] overflow-hidden bg-surface-container">
                <img 
                  [src]="p2.featuredImage" 
                  [alt]="p2.name" 
                  class="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div class="flex flex-col gap-3">
                <div class="text-[11px] font-headline uppercase tracking-wider text-on-surface-variant flex items-center justify-between border-b border-outline-variant pb-2.5">
                  <span>{{ p2.location }}</span>
                  <span class="text-secondary font-medium">{{ p2.sector }}</span>
                </div>
                <h3 class="font-headline text-[22px] font-medium text-primary leading-snug">
                  {{ p2.name }}
                </h3>
                <p class="font-body text-[14px] text-on-surface-variant leading-relaxed">
                  {{ p2.shortDescription }}
                </p>
                <div class="pt-1">
                  <a 
                    [routerLink]="['/projects', p2.slug]" 
                    class="inline-flex items-center gap-1.5 font-headline text-[11px] uppercase font-bold tracking-wider text-primary hover:text-secondary transition-colors"
                  >
                    <span>VIEW PROJECT</span>
                    <span class="material-symbols-outlined text-[15px]">arrow_forward</span>
                  </a>
                </div>
              </div>
            </article>
          }

          @if (projectService.projects()[2]; as p3) {
            <article class="flex flex-col gap-5 bg-surface-container-low p-6 border border-outline-variant">
              <div class="w-full aspect-[16/10] overflow-hidden bg-surface-container">
                <img 
                  [src]="p3.featuredImage" 
                  [alt]="p3.name" 
                  class="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div class="flex flex-col gap-3">
                <div class="text-[11px] font-headline uppercase tracking-wider text-on-surface-variant flex items-center justify-between border-b border-outline-variant pb-2.5">
                  <span>{{ p3.location }}</span>
                  <span class="text-secondary font-medium">{{ p3.sector }}</span>
                </div>
                <h3 class="font-headline text-[22px] font-medium text-primary leading-snug">
                  {{ p3.name }}
                </h3>
                <p class="font-body text-[14px] text-on-surface-variant leading-relaxed">
                  {{ p3.shortDescription }}
                </p>
                <div class="pt-1">
                  <a 
                    [routerLink]="['/projects', p3.slug]" 
                    class="inline-flex items-center gap-1.5 font-headline text-[11px] uppercase font-bold tracking-wider text-primary hover:text-secondary transition-colors"
                  >
                    <span>VIEW PROJECT</span>
                    <span class="material-symbols-outlined text-[15px]">arrow_forward</span>
                  </a>
                </div>
              </div>
            </article>
          }
        </div>

        <!-- Project 4 & 5: Two-Column Desktop Grid -->
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
          @if (projectService.projects()[3]; as p4) {
            <article class="flex flex-col gap-5 bg-surface-container-low p-6 border border-outline-variant">
              <div class="w-full aspect-[16/10] overflow-hidden bg-surface-container">
                <img 
                  [src]="p4.featuredImage" 
                  [alt]="p4.name" 
                  class="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div class="flex flex-col gap-3">
                <div class="text-[11px] font-headline uppercase tracking-wider text-on-surface-variant flex items-center justify-between border-b border-outline-variant pb-2.5">
                  <span>{{ p4.location }}</span>
                  <span class="text-secondary font-medium">{{ p4.sector }}</span>
                </div>
                <h3 class="font-headline text-[22px] font-medium text-primary leading-snug">
                  {{ p4.name }}
                </h3>
                <p class="font-body text-[14px] text-on-surface-variant leading-relaxed">
                  {{ p4.shortDescription }}
                </p>
                <div class="pt-1">
                  <a 
                    [routerLink]="['/projects', p4.slug]" 
                    class="inline-flex items-center gap-1.5 font-headline text-[11px] uppercase font-bold tracking-wider text-primary hover:text-secondary transition-colors"
                  >
                    <span>VIEW PROJECT</span>
                    <span class="material-symbols-outlined text-[15px]">arrow_forward</span>
                  </a>
                </div>
              </div>
            </article>
          }

          @if (projectService.projects()[4]; as p5) {
            <article class="flex flex-col gap-5 bg-surface-container-low p-6 border border-outline-variant">
              <div class="w-full aspect-[16/10] overflow-hidden bg-surface-container">
                <img 
                  [src]="p5.featuredImage" 
                  [alt]="p5.name" 
                  class="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div class="flex flex-col gap-3">
                <div class="text-[11px] font-headline uppercase tracking-wider text-on-surface-variant flex items-center justify-between border-b border-outline-variant pb-2.5">
                  <span>{{ p5.location }}</span>
                  <span class="text-secondary font-medium">{{ p5.sector }}</span>
                </div>
                <h3 class="font-headline text-[22px] font-medium text-primary leading-snug">
                  {{ p5.name }}
                </h3>
                <p class="font-body text-[14px] text-on-surface-variant leading-relaxed">
                  {{ p5.shortDescription }}
                </p>
                <div class="pt-1">
                  <a 
                    [routerLink]="['/projects', p5.slug]" 
                    class="inline-flex items-center gap-1.5 font-headline text-[11px] uppercase font-bold tracking-wider text-primary hover:text-secondary transition-colors"
                  >
                    <span>VIEW PROJECT</span>
                    <span class="material-symbols-outlined text-[15px]">arrow_forward</span>
                  </a>
                </div>
              </div>
            </article>
          }
        </div>
      </div>

      <div class="pt-4 max-w-7xl mx-auto w-full flex justify-center">
        <a 
          routerLink="/projects" 
          class="w-full sm:w-auto px-10 py-4 border border-primary text-primary font-headline text-[12px] uppercase font-bold tracking-wider flex items-center justify-center gap-2 hover:bg-primary hover:text-white transition-colors"
        >
          <span>VIEW ALL PROJECTS</span>
          <span class="material-symbols-outlined text-[16px]">arrow_forward</span>
        </a>
      </div>
    </section>

    <!-- SECTION 5 — SERVICES ACCORDION -->
    <section class="w-full bg-surface-container-low px-6 lg:px-8 py-20 flex flex-col gap-8 border-y border-outline-variant" id="services-section">
      <div class="max-w-7xl mx-auto w-full flex flex-col gap-3">
        <span class="font-headline text-[11px] uppercase tracking-[0.18em] text-secondary font-bold">WHAT WE DO</span>
        <h2 class="font-headline text-fluid-h2 text-primary font-medium">Building expertise across every stage.</h2>
      </div>

      <div class="max-w-7xl mx-auto w-full flex flex-col divide-y divide-outline-variant border-y border-outline-variant">
        @for (service of servicesService.services(); track service.id; let idx = $index) {
          <div class="py-5">
            <button 
              type="button"
              class="w-full flex items-center justify-between text-left cursor-pointer group focus-visible:outline-2 focus-visible:outline-secondary"
              (click)="toggleAccordion(idx)"
              [attr.aria-expanded]="activeAccordionIndex() === idx"
            >
              <div class="flex items-center gap-4">
                <span class="font-headline text-[12px] font-bold text-secondary">
                  0{{ idx + 1 }}
                </span>
                <span class="font-headline text-[18px] lg:text-[20px] font-medium text-primary group-hover:text-secondary transition-colors">
                  {{ service.name }}
                </span>
              </div>
              <span 
                class="material-symbols-outlined text-primary/60 group-hover:text-primary transition-transform duration-300 text-[22px]"
                [class.rotate-180]="activeAccordionIndex() === idx"
              >
                {{ activeAccordionIndex() === idx ? 'remove' : 'add' }}
              </span>
            </button>

            @if (activeAccordionIndex() === idx) {
              <div class="pt-4 pb-2 flex flex-col md:flex-row md:items-center justify-between gap-4 animate-fadeIn">
                <p class="font-body text-[15px] text-on-surface-variant max-w-3xl leading-relaxed">
                  {{ service.description }}
                </p>
                <a 
                  [routerLink]="['/services', service.slug]"
                  class="shrink-0 inline-flex items-center gap-1.5 font-headline text-[11px] uppercase font-bold tracking-wider text-secondary hover:text-primary transition-colors"
                >
                  <span>EXPLORE CAPABILITIES</span>
                  <span class="material-symbols-outlined text-[15px]">arrow_forward</span>
                </a>
              </div>
            }
          </div>
        }
      </div>
    </section>

    <!-- SECTION 6 — MARKETS / INDUSTRIES (Photographic Panels, NO Icons) -->
    <section class="w-full px-6 lg:px-8 py-20 lg:py-28 flex flex-col gap-12 bg-surface" id="markets-section">
      <div class="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4 max-w-7xl mx-auto w-full">
        <div class="flex flex-col gap-2">
          <span class="font-headline text-[11px] uppercase tracking-[0.18em] text-secondary font-bold">MARKETS</span>
          <h2 class="font-headline text-fluid-h2 text-primary font-medium">Expertise across complex environments.</h2>
        </div>
        <p class="font-body text-[15px] text-on-surface-variant max-w-md">
          Sector-specialized engineering teams managing high-complexity technical parameters and strict delivery tolerances.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-5 max-w-7xl mx-auto w-full">
        <!-- 01 Featured: Commercial -->
        @if (industryService.industries()[0]; as ind1) {
          <div class="lg:col-span-8 relative overflow-hidden bg-primary text-white h-72 lg:h-96 flex flex-col justify-end p-6 lg:p-10 group">
            <div 
              class="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105 opacity-40"
              [style.backgroundImage]="'url(' + ind1.featuredImage + ')'"
            ></div>
            <div class="absolute inset-0 bg-gradient-to-t from-primary via-primary/70 to-transparent"></div>
            <div class="relative z-10 flex flex-col gap-2.5">
              <span class="font-headline text-[10px] text-secondary tracking-widest uppercase font-bold">01 • FEATURED SECTOR</span>
              <h3 class="font-headline text-[24px] lg:text-[30px] font-medium text-white">{{ ind1.name }}</h3>
              <p class="font-body text-[14px] text-white/80 max-w-xl">{{ ind1.subtitle }}</p>
              <div class="pt-2">
                <a [routerLink]="['/industries', ind1.slug]" class="inline-flex items-center gap-1.5 font-headline text-[11px] uppercase font-bold tracking-wider text-secondary hover:text-white transition-colors">
                  <span class="border-b border-secondary/50 pb-0.5">EXPLORE SECTOR</span>
                  <span class="material-symbols-outlined text-[15px]">arrow_forward</span>
                </a>
              </div>
            </div>
          </div>
        }

        <!-- 02 Healthcare -->
        @if (industryService.industries()[1]; as ind2) {
          <div class="lg:col-span-4 relative overflow-hidden bg-primary text-white h-72 lg:h-96 flex flex-col justify-end p-6 lg:p-8 group">
            <div 
              class="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105 opacity-40"
              [style.backgroundImage]="'url(' + ind2.featuredImage + ')'"
            ></div>
            <div class="absolute inset-0 bg-gradient-to-t from-primary via-primary/70 to-transparent"></div>
            <div class="relative z-10 flex flex-col gap-2">
              <span class="font-headline text-[10px] text-secondary tracking-widest uppercase font-bold">02 • SECTOR</span>
              <h3 class="font-headline text-[22px] font-medium text-white">{{ ind2.name }}</h3>
              <p class="font-body text-[13px] text-white/75 line-clamp-2">{{ ind2.subtitle }}</p>
              <div class="pt-2">
                <a [routerLink]="['/industries', ind2.slug]" class="inline-flex items-center gap-1.5 font-headline text-[11px] uppercase font-bold tracking-wider text-secondary hover:text-white transition-colors">
                  <span class="border-b border-secondary/50 pb-0.5">EXPLORE SECTOR</span>
                  <span class="material-symbols-outlined text-[15px]">arrow_forward</span>
                </a>
              </div>
            </div>
          </div>
        }

        <!-- 03 Industrial -->
        @if (industryService.industries()[2]; as ind3) {
          <div class="lg:col-span-4 relative overflow-hidden bg-primary text-white h-72 flex flex-col justify-end p-6 group">
            <div 
              class="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105 opacity-40"
              [style.backgroundImage]="'url(' + ind3.featuredImage + ')'"
            ></div>
            <div class="absolute inset-0 bg-gradient-to-t from-primary via-primary/70 to-transparent"></div>
            <div class="relative z-10 flex flex-col gap-2">
              <span class="font-headline text-[10px] text-secondary tracking-widest uppercase font-bold">03 • SECTOR</span>
              <h3 class="font-headline text-[20px] font-medium text-white">{{ ind3.name }}</h3>
              <p class="font-body text-[13px] text-white/75 line-clamp-2">{{ ind3.subtitle }}</p>
              <div class="pt-1.5">
                <a [routerLink]="['/industries', ind3.slug]" class="inline-flex items-center gap-1.5 font-headline text-[11px] uppercase font-bold tracking-wider text-secondary hover:text-white transition-colors">
                  <span class="border-b border-secondary/50 pb-0.5">EXPLORE SECTOR</span>
                  <span class="material-symbols-outlined text-[15px]">arrow_forward</span>
                </a>
              </div>
            </div>
          </div>
        }

        <!-- 04 Hospitality -->
        @if (industryService.industries()[3]; as ind4) {
          <div class="lg:col-span-4 relative overflow-hidden bg-primary text-white h-72 flex flex-col justify-end p-6 group">
            <div 
              class="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105 opacity-40"
              [style.backgroundImage]="'url(' + ind4.featuredImage + ')'"
            ></div>
            <div class="absolute inset-0 bg-gradient-to-t from-primary via-primary/70 to-transparent"></div>
            <div class="relative z-10 flex flex-col gap-2">
              <span class="font-headline text-[10px] text-secondary tracking-widest uppercase font-bold">04 • SECTOR</span>
              <h3 class="font-headline text-[20px] font-medium text-white">{{ ind4.name }}</h3>
              <p class="font-body text-[13px] text-white/75 line-clamp-2">{{ ind4.subtitle }}</p>
              <div class="pt-1.5">
                <a [routerLink]="['/industries', ind4.slug]" class="inline-flex items-center gap-1.5 font-headline text-[11px] uppercase font-bold tracking-wider text-secondary hover:text-white transition-colors">
                  <span class="border-b border-secondary/50 pb-0.5">EXPLORE SECTOR</span>
                  <span class="material-symbols-outlined text-[15px]">arrow_forward</span>
                </a>
              </div>
            </div>
          </div>
        }

        <!-- 05 Mission Critical -->
        @if (industryService.industries()[4]; as ind5) {
          <div class="lg:col-span-4 relative overflow-hidden bg-primary text-white h-72 flex flex-col justify-end p-6 group">
            <div 
              class="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105 opacity-40"
              [style.backgroundImage]="'url(' + ind5.featuredImage + ')'"
            ></div>
            <div class="absolute inset-0 bg-gradient-to-t from-primary via-primary/70 to-transparent"></div>
            <div class="relative z-10 flex flex-col gap-2">
              <span class="font-headline text-[10px] text-secondary tracking-widest uppercase font-bold">05 • SECTOR</span>
              <h3 class="font-headline text-[20px] font-medium text-white">{{ ind5.name }}</h3>
              <p class="font-body text-[13px] text-white/75 line-clamp-2">{{ ind5.subtitle }}</p>
              <div class="pt-1.5">
                <a [routerLink]="['/industries', ind5.slug]" class="inline-flex items-center gap-1.5 font-headline text-[11px] uppercase font-bold tracking-wider text-secondary hover:text-white transition-colors">
                  <span class="border-b border-secondary/50 pb-0.5">EXPLORE SECTOR</span>
                  <span class="material-symbols-outlined text-[15px]">arrow_forward</span>
                </a>
              </div>
            </div>
          </div>
        }
      </div>
    </section>

    <!-- SECTION 7 — BRAND STATEMENT / CONVICTION -->
    <section class="relative w-full py-28 px-6 lg:px-8 overflow-hidden bg-primary">
      <div 
        class="absolute inset-0 bg-cover bg-center"
        style="background-image: url('/images/hero/hero-main.jpg');"
      ></div>
      <div class="absolute inset-0 bg-primary/90"></div>

      <div class="relative z-10 max-w-7xl mx-auto w-full flex flex-col gap-6 text-on-primary">
        <div class="flex items-center gap-2">
          <span class="w-2 h-2 bg-secondary inline-block"></span>
          <span class="font-headline text-[11px] uppercase tracking-[0.2em] text-secondary font-bold">OUR CONVICTION</span>
        </div>
        <p class="font-headline text-[28px] lg:text-[40px] leading-[36px] lg:leading-[48px] font-medium text-white max-w-3xl">
          {{ company.profile().convictionHeading }}
        </p>
        <p class="font-body text-[16px] text-white/80 leading-relaxed max-w-xl">
          {{ company.profile().convictionSubtext }}
        </p>
        <div class="pt-3">
          <a 
            routerLink="/services"
            class="inline-flex items-center gap-2 bg-secondary text-primary font-headline text-[12px] uppercase px-7 py-4 font-bold tracking-wider hover:bg-white transition-colors"
          >
            <span>HOW WE BUILD</span>
            <span class="material-symbols-outlined text-[16px]">arrow_forward</span>
          </a>
        </div>
      </div>
    </section>

    <!-- SECTION 8 — PROJECT DELIVERY PROCESS -->
    <section class="w-full bg-surface px-6 lg:px-8 py-20 lg:py-28 flex flex-col gap-12">
      <div class="max-w-7xl mx-auto w-full flex flex-col gap-3">
        <span class="font-headline text-[11px] uppercase tracking-[0.18em] text-secondary font-bold">FROM VISION TO COMPLETION</span>
        <h2 class="font-headline text-fluid-h2 text-primary font-medium">A disciplined approach to delivery.</h2>
      </div>

      <!-- Desktop: Connected horizontal process / Mobile: Vertical timeline -->
      <div class="max-w-7xl mx-auto w-full">
        <!-- Desktop Grid -->
        <div class="hidden lg:grid grid-cols-5 gap-6 relative">
          <div class="absolute top-4 left-6 right-6 h-0.5 bg-outline z-0"></div>
          @for (stage of company.profile().deliveryStages; track stage.step) {
            <div class="relative z-10 flex flex-col gap-3 bg-surface pr-4">
              <div class="w-8 h-8 bg-secondary text-primary font-headline font-bold text-xs flex items-center justify-center">
                {{ stage.step }}
              </div>
              <h3 class="font-headline text-[20px] font-semibold text-primary pt-2">{{ stage.name }}</h3>
              <p class="font-body text-[14px] text-on-surface-variant leading-relaxed">{{ stage.description }}</p>
            </div>
          }
        </div>

        <!-- Mobile Timeline -->
        <div class="lg:hidden relative pl-6 flex flex-col gap-8">
          <div class="absolute left-2 top-2 bottom-3 w-px bg-outline"></div>
          @for (stage of company.profile().deliveryStages; track stage.step) {
            <div class="relative flex flex-col gap-1.5">
              <div class="absolute -left-[27px] top-1.5 w-2.5 h-2.5 bg-secondary"></div>
              <div class="flex items-baseline gap-2">
                <span class="font-headline text-[12px] font-bold text-secondary">{{ stage.step }}</span>
                <h3 class="font-headline text-[18px] font-semibold text-primary">{{ stage.name }}</h3>
              </div>
              <p class="font-body text-[14px] text-on-surface-variant leading-relaxed">{{ stage.description }}</p>
            </div>
          }
        </div>
      </div>
    </section>

    <!-- SECTION 9 — SAFETY & QUALITY -->
    <section class="w-full bg-surface-container-low px-6 lg:px-8 py-20 flex flex-col gap-8 border-y border-outline-variant" id="safety-section">
      <div class="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        <div class="lg:col-span-6 flex flex-col gap-6">
          <div class="flex flex-col gap-2">
            <span class="font-headline text-[11px] uppercase tracking-[0.18em] text-secondary font-bold">SAFETY &amp; QUALITY</span>
            <h2 class="font-headline text-fluid-h2 text-primary font-medium">
              {{ company.safety().headline }}
            </h2>
          </div>
          <p class="font-body text-[15px] text-on-surface-variant leading-relaxed">
            {{ company.safety().subheadline }}
          </p>

          <div class="flex flex-col divide-y divide-outline-variant border-y border-outline-variant">
            @for (metric of company.safety().metrics; track metric.id) {
              <div class="py-3.5 flex items-center justify-between">
                <span class="font-headline text-[15px] text-primary font-medium">{{ metric.label }}</span>
                <span class="font-headline text-[13px] text-secondary font-bold tracking-wider">
                  @if (metric.targetNumber !== undefined) {
                    <app-counter [target]="metric.targetNumber" [suffix]="metric.suffix || ''" [duration]="1800" />
                  } @else {
                    {{ metric.value }}
                  }
                  <span class="text-xs font-normal text-on-surface-variant ml-1">({{ metric.period }})</span>
                </span>
              </div>
            }
          </div>

          <div class="pt-2">
            <a 
              routerLink="/safety-quality"
              class="inline-flex items-center gap-2 text-primary font-headline text-[12px] uppercase font-bold tracking-wider hover:text-secondary transition-colors"
            >
              <span>OUR APPROACH TO SAFETY</span>
              <span class="material-symbols-outlined text-[16px]">arrow_forward</span>
            </a>
          </div>
        </div>

        <div class="lg:col-span-6 aspect-[16/10] overflow-hidden bg-surface-container border border-outline-variant">
          <img 
            [src]="company.safety().image" 
            alt="Safety and site governance team" 
            class="w-full h-full object-cover"
            loading="lazy"
          />
        </div>
      </div>
    </section>

    <!-- SECTION 10 — COMPANY PRESENCE (OFFICES) -->
    <section class="w-full bg-surface px-6 lg:px-8 py-20 flex flex-col gap-8">
      <div class="max-w-7xl mx-auto w-full flex flex-col gap-2">
        <span class="font-headline text-[11px] uppercase tracking-[0.18em] text-secondary font-bold">OUR PRESENCE</span>
        <h2 class="font-headline text-fluid-h2 text-primary font-medium">Building wherever our clients need us.</h2>
      </div>

      <div class="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-3 gap-8">
        @for (office of company.locations(); track office.id) {
          <div class="p-6 bg-surface-container-low border border-outline-variant flex flex-col justify-between gap-4">
            <div class="flex flex-col gap-2">
              <div class="flex justify-between items-baseline">
                <h3 class="font-headline text-[18px] font-semibold text-primary">{{ office.title }}</h3>
                <span class="font-headline text-[10px] uppercase text-secondary font-bold tracking-widest">{{ office.region }}</span>
              </div>
              <p class="font-body text-[13px] text-on-surface-variant leading-relaxed">{{ office.address }}</p>
            </div>
            <div class="pt-2 border-t border-outline-variant flex flex-col gap-1">
              <span class="font-headline text-[12px] text-primary font-medium">{{ office.phone }}</span>
              <span class="font-headline text-[12px] text-on-surface-variant">{{ office.email }}</span>
            </div>
          </div>
        }
      </div>
    </section>

    <!-- SECTION 11 — CLIENT TESTIMONIAL -->
    <section class="w-full bg-surface-container-low px-6 lg:px-8 py-16 flex flex-col gap-6 border-y border-outline-variant">
      <div class="max-w-4xl mx-auto w-full flex flex-col gap-6">
        <div class="w-8 h-1 bg-secondary"></div>
        <blockquote class="font-headline text-[22px] lg:text-[28px] leading-[32px] lg:leading-[40px] text-primary font-medium">
          "CHECP demonstrated relentless precision in managing complex structural parameters while maintaining absolute schedule discipline and transparent communication on our flagship development."
        </blockquote>
        <div class="flex flex-col gap-0.5">
          <span class="font-headline text-[13px] font-bold uppercase tracking-wider text-primary">Executive Development Directorate</span>
          <span class="font-body text-[13px] text-on-surface-variant">Regional Sovereign Real Estate Partner</span>
        </div>
      </div>
    </section>

    <!-- SECTION 12 — NEWS & INSIGHTS -->
    <section class="w-full bg-surface px-6 lg:px-8 py-20 flex flex-col gap-10">
      <div class="max-w-7xl mx-auto w-full flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4">
        <div class="flex flex-col gap-2">
          <span class="font-headline text-[11px] uppercase tracking-[0.18em] text-secondary font-bold">INSIGHTS</span>
          <h2 class="font-headline text-fluid-h2 text-primary font-medium">Latest from our projects and our people.</h2>
        </div>
        <a 
          routerLink="/insights" 
          class="inline-flex items-center gap-1.5 font-headline text-[11px] uppercase font-bold tracking-wider text-primary hover:text-secondary transition-colors"
        >
          <span>VIEW ALL ARTICLES</span>
          <span class="material-symbols-outlined text-[15px]">arrow_forward</span>
        </a>
      </div>

      <div class="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-8">
        <!-- Featured Insight (Large Left) -->
        @if (insightsService.articles()[0]; as art1) {
          <article class="lg:col-span-7 flex flex-col gap-4">
            <div class="w-full aspect-[16/10] overflow-hidden bg-surface-container border border-outline-variant">
              <img 
                [src]="art1.featuredImage" 
                [alt]="art1.title" 
                class="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                loading="lazy"
              />
            </div>
            <div class="flex flex-col gap-2">
              <div class="flex justify-between items-center text-[11px] font-headline uppercase tracking-wider text-on-surface-variant">
                <span class="text-secondary font-bold">{{ art1.category }}</span>
                <span>{{ art1.date }}</span>
              </div>
              <h3 class="font-headline text-[22px] font-semibold text-primary leading-snug">
                <a [routerLink]="['/insights', art1.slug]" class="hover:text-secondary transition-colors">
                  {{ art1.title }}
                </a>
              </h3>
              <p class="font-body text-[14px] text-on-surface-variant leading-relaxed">
                {{ art1.excerpt }}
              </p>
            </div>
          </article>
        }

        <!-- Secondary Insights (Stacked Right) -->
        <div class="lg:col-span-5 flex flex-col divide-y divide-outline-variant">
          @for (art of insightsService.articles().slice(1, 3); track art.id) {
            <article class="py-6 first:pt-0 flex gap-5 items-start">
              <div class="w-28 h-28 shrink-0 overflow-hidden bg-surface-container border border-outline-variant">
                <img 
                  [src]="art.featuredImage" 
                  [alt]="art.title" 
                  class="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div class="flex flex-col justify-between py-0.5 gap-2">
                <div class="flex items-center gap-3 text-[10px] font-headline uppercase tracking-wider text-secondary font-bold">
                  <span>{{ art.category }}</span>
                  <span class="text-outline">•</span>
                  <span class="text-on-surface-variant font-normal">{{ art.date }}</span>
                </div>
                <h4 class="font-headline text-[16px] font-semibold text-primary leading-snug">
                  <a [routerLink]="['/insights', art.slug]" class="hover:text-secondary transition-colors">
                    {{ art.title }}
                  </a>
                </h4>
              </div>
            </article>
          }
        </div>
      </div>
    </section>

    <!-- SECTION 13 — CAREERS & CULTURE -->
    <section class="w-full bg-surface-container-low px-6 lg:px-8 py-20 flex flex-col gap-8 border-y border-outline-variant" id="careers-section">
      <div class="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        <div class="lg:col-span-6 aspect-[16/10] overflow-hidden bg-surface-container border border-outline-variant order-2 lg:order-1">
          <img 
            [src]="company.careers().image" 
            alt="Engineering collaboration on active site" 
            class="w-full h-full object-cover"
            loading="lazy"
          />
        </div>

        <div class="lg:col-span-6 flex flex-col gap-5 order-1 lg:order-2">
          <span class="font-headline text-[11px] uppercase tracking-[0.18em] text-secondary font-bold">CAREERS</span>
          <h2 class="font-headline text-fluid-h2 text-primary font-medium">
            {{ company.careers().headline }}
          </h2>
          <p class="font-body text-[15px] text-on-surface-variant leading-relaxed">
            {{ company.careers().cultureDescription }}
          </p>
          <div class="pt-2">
            <a 
              routerLink="/careers"
              class="inline-flex items-center gap-2 bg-primary text-white font-headline text-[12px] uppercase px-7 py-4 font-bold tracking-wider hover:bg-secondary hover:text-primary transition-colors"
            >
              <span>VIEW OPPORTUNITIES</span>
              <span class="material-symbols-outlined text-[16px]">arrow_forward</span>
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- SECTION 14 — FINAL CALL TO ACTION -->
    <section class="w-full bg-primary px-6 lg:px-8 py-24 text-on-primary flex flex-col gap-6" id="contact-section">
      <div class="max-w-4xl mx-auto w-full text-center flex flex-col items-center gap-5">
        <div class="flex items-center gap-2">
          <span class="w-2 h-2 bg-secondary inline-block"></span>
          <span class="font-headline text-[11px] uppercase tracking-[0.2em] text-secondary font-bold">HAVE A PROJECT IN MIND?</span>
        </div>
        <h2 class="font-headline text-fluid-h2 text-white font-medium">
          Let's build something remarkable.
        </h2>
        <p class="font-body text-[16px] text-white/80 leading-relaxed max-w-xl">
          Connect with CHECP preconstruction specialists to discuss scheduling, constructability feasibility, and contracting models.
        </p>
        <div class="pt-4">
          <a 
            routerLink="/contact"
            class="h-14 px-8 bg-secondary text-primary font-headline text-[12px] uppercase tracking-wider flex items-center gap-3 font-bold hover:bg-white transition-colors"
          >
            <span>START A CONVERSATION</span>
            <span class="material-symbols-outlined text-[18px]">arrow_forward</span>
          </a>
        </div>
      </div>
    </section>
  `
})
export class HomeComponent implements OnInit, OnDestroy {
  readonly company = inject(CompanyService);
  readonly projectService = inject(ProjectService);
  readonly servicesService = inject(ServicesService);
  readonly industryService = inject(IndustryService);
  readonly insightsService = inject(InsightsService);
  private seo = inject(SeoService);

  readonly activeAccordionIndex = signal<number | null>(0);

  readonly videoFeeds = [
    {
      id: 'feed-01',
      title: 'SUPERSTRUCTURE CORE',
      location: 'Riyadh Financial District',
      task: 'Crane Hoist & Continuous Core Pour [+185m]',
      image: '/images/services/general-contracting.jpg'
    },
    {
      id: 'feed-02',
      title: 'HEAVY CIVIL FOUNDATIONS',
      location: 'Metropolitan Substructure',
      task: 'Mass Concrete Raft & Steel Reinforcement [14,000 m³]',
      image: '/images/services/civil-structural.jpg'
    },
    {
      id: 'feed-03',
      title: 'FACADE & ENCLOSURE',
      location: 'Commercial Tower',
      task: 'Parametric Glazing & Thermal Facade Erection',
      image: '/images/services/design-build.jpg'
    },
    {
      id: 'feed-04',
      title: 'STRUCTURAL STEEL ERECTION',
      location: 'Tower Infrastructure',
      task: '24/7 Tower Crane Swing & Structural Erection',
      image: '/images/hero/hero-construction-dusk.jpg'
    }
  ];

  readonly activeFeedIndex = signal<number>(0);
  readonly isPlaying = signal<boolean>(true);
  readonly timecode = signal<string>('00:14:28:09');

  private feedCycleTimer?: any;
  private timecodeTimer?: any;
  private frameCounter = 14 * 60 * 30 + 28 * 30 + 9;

  private touchStartX = 0;
  private touchStartY = 0;

  ngOnInit(): void {
    this.seo.setPageMeta({
      title: 'CHECP — Building with Precision. Creating Lasting Value.',
      description: 'CHECP delivers complex construction and engineering projects through disciplined planning, technical expertise, safety and uncompromising quality.',
      path: '/'
    });

    if (typeof window !== 'undefined') {
      // Fast ticking real-time camera timecode (30 fps)
      this.timecodeTimer = setInterval(() => {
        this.frameCounter++;
        const totalSec = Math.floor(this.frameCounter / 30);
        const frames = this.frameCounter % 30;
        const hours = Math.floor(totalSec / 3600);
        const mins = Math.floor((totalSec % 3600) / 60);
        const secs = totalSec % 60;
        const pad = (n: number) => n.toString().padStart(2, '0');
        this.timecode.set(`${pad(hours)}:${pad(mins)}:${pad(secs)}:${pad(frames)}`);
      }, 33);

      // Automated multi-camera cycle
      this.startFeedCycle();
    }
  }

  ngOnDestroy(): void {
    if (this.timecodeTimer) {
      clearInterval(this.timecodeTimer);
    }
    if (this.feedCycleTimer) {
      clearInterval(this.feedCycleTimer);
    }
  }

  private startFeedCycle(): void {
    if (this.feedCycleTimer) {
      clearInterval(this.feedCycleTimer);
    }
    this.feedCycleTimer = setInterval(() => {
      if (this.isPlaying()) {
        this.activeFeedIndex.update((curr) => (curr + 1) % this.videoFeeds.length);
      }
    }, 5500);
  }

  selectFeed(index: number): void {
    this.activeFeedIndex.set(index);
    if (this.isPlaying()) {
      this.startFeedCycle();
    }
  }

  nextFeed(): void {
    this.activeFeedIndex.update((curr) => (curr + 1) % this.videoFeeds.length);
    if (this.isPlaying()) {
      this.startFeedCycle();
    }
  }

  prevFeed(): void {
    this.activeFeedIndex.update((curr) => (curr - 1 + this.videoFeeds.length) % this.videoFeeds.length);
    if (this.isPlaying()) {
      this.startFeedCycle();
    }
  }

  onBannerClick(event: MouseEvent): void {
    const target = event.target as HTMLElement;
    // Don't advance scene if clicking on interactive CTA links, buttons or icons
    if (target.closest('a, button, input')) {
      return;
    }
    this.nextFeed();
  }

  onTouchStart(event: TouchEvent): void {
    if (event.touches.length > 0) {
      this.touchStartX = event.touches[0].clientX;
      this.touchStartY = event.touches[0].clientY;
    }
  }

  onTouchEnd(event: TouchEvent): void {
    if (event.changedTouches.length > 0) {
      const diffX = event.changedTouches[0].clientX - this.touchStartX;
      const diffY = event.changedTouches[0].clientY - this.touchStartY;
      // Horizontal swipe threshold
      if (Math.abs(diffX) > 40 && Math.abs(diffX) > Math.abs(diffY)) {
        if (diffX < 0) {
          this.nextFeed();
        } else {
          this.prevFeed();
        }
      }
    }
  }

  togglePlay(): void {
    this.isPlaying.update((val) => !val);
  }

  toggleAccordion(index: number): void {
    this.activeAccordionIndex.update((curr) => (curr === index ? null : index));
  }
}
