import { Component, inject, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SeoService } from '../../core/services/seo.service';

@Component({
  selector: 'app-not-found',
  standalone: true,
  imports: [RouterLink],
  template: `
    <div class="min-h-[80vh] flex flex-col items-center justify-center px-6 text-center pt-24 pb-16">
      <span class="font-headline text-[14px] font-bold uppercase tracking-[0.25em] text-secondary">
        404 ERROR
      </span>
      <h1 class="font-headline text-[44px] lg:text-[64px] font-medium text-primary mt-2 mb-4 tracking-tight">
        Structure Not Found
      </h1>
      <p class="font-body text-[16px] text-on-surface-variant max-w-md leading-relaxed mb-8">
        The page or project documentation you requested does not exist or has been relocated to another directory.
      </p>

      <div class="flex flex-col sm:flex-row items-center gap-4">
        <a 
          routerLink="/"
          class="h-12 px-7 bg-primary text-white font-headline text-[12px] uppercase font-bold tracking-wider flex items-center justify-center gap-2 hover:bg-secondary hover:text-primary transition-colors"
        >
          <span>RETURN TO HOMEPAGE</span>
          <span class="material-symbols-outlined text-[16px]">arrow_forward</span>
        </a>
        <a 
          routerLink="/projects"
          class="h-12 px-7 border border-primary text-primary font-headline text-[12px] uppercase font-bold tracking-wider flex items-center justify-center hover:bg-surface-container-low transition-colors"
        >
          EXPLORE PROJECTS
        </a>
      </div>
    </div>
  `
})
export class NotFoundComponent implements OnInit {
  private seo = inject(SeoService);

  ngOnInit(): void {
    this.seo.setPageMeta({
      title: '404 — Structure Not Found | CHECP',
      description: 'The requested page could not be located on the CHECP server.',
      path: '/404'
    });
  }
}
