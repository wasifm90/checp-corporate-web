import { Component, signal, computed, inject, HostListener } from '@angular/core';
import { Router, NavigationEnd, RouterLink, RouterLinkActive } from '@angular/router';
import { filter } from 'rxjs/operators';
import { MobileNavComponent } from './mobile-nav.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, MobileNavComponent],
  template: `
    <a 
      href="#main-content" 
      class="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-secondary focus:text-primary focus:font-headline focus:font-bold focus:shadow-lg"
    >
      Skip to main content
    </a>

    <header 
      [class]="isSolidHeader() ? 'fixed top-0 w-full z-40 transition-all duration-300 border-b bg-surface/95 backdrop-blur-md border-outline-variant py-2.5 shadow-xs' : 'fixed top-0 w-full z-40 transition-all duration-300 border-b bg-transparent border-transparent py-4'"
    >
      <div class="max-w-7xl mx-auto px-5 lg:px-8 flex items-center justify-between">
        
        <!-- Logo -->
        <a routerLink="/" class="flex items-center gap-3 group focus-visible:outline-2 focus-visible:outline-secondary">
          <div class="h-9 w-auto flex items-center">
            <svg class="h-8 w-auto" viewBox="0 0 240 50" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g transform="translate(4, 5)">
                <rect x="0" y="0" width="40" height="40" rx="4" [attr.fill]="isSolidHeader() ? '#12161F' : '#FFFFFF'"/>
                <path d="M10 12h20v4H10z" fill="#C8963E"/>
                <path d="M10 18h12v4H10z" [attr.fill]="isSolidHeader() ? '#FAF9F5' : '#12161F'"/>
                <path d="M10 24h20v4H10z" [attr.fill]="isSolidHeader() ? '#FAF9F5' : '#12161F'"/>
                <rect x="26" y="18" width="4" height="4" fill="#C8963E"/>
              </g>
              <text x="56" y="32" font-family="'Space Grotesk', sans-serif" font-size="24" font-weight="700" letter-spacing="0.08em" [attr.fill]="isSolidHeader() ? '#12161F' : '#FFFFFF'">CHECP</text>
              <text x="56" y="42" font-family="'Space Grotesk', sans-serif" font-size="7.5" font-weight="600" letter-spacing="0.22em" [attr.fill]="isSolidHeader() ? '#787E87' : '#C8963E'">CONSTRUCTION &amp; ENGINEERING</text>
            </svg>
          </div>
        </a>

        <!-- Desktop Navigation -->
        <nav 
          class="hidden lg:flex items-center gap-7 xl:gap-8 font-headline text-[12px] uppercase tracking-wider font-semibold"
          [class.text-primary]="isSolidHeader()"
          [class.text-white]="!isSolidHeader()"
          aria-label="Main Navigation"
        >
          <a routerLink="/about" routerLinkActive="text-secondary" [routerLinkActiveOptions]="{exact: false}" class="hover:text-secondary transition-colors">About</a>
          <a routerLink="/services" routerLinkActive="text-secondary" [routerLinkActiveOptions]="{exact: false}" class="hover:text-secondary transition-colors">Services</a>
          <a routerLink="/projects" routerLinkActive="text-secondary" [routerLinkActiveOptions]="{exact: false}" class="hover:text-secondary transition-colors">Projects</a>
          <a routerLink="/industries" routerLinkActive="text-secondary" [routerLinkActiveOptions]="{exact: false}" class="hover:text-secondary transition-colors">Industries</a>
          <a routerLink="/safety-quality" routerLinkActive="text-secondary" class="hover:text-secondary transition-colors">Safety &amp; Quality</a>
          <a routerLink="/careers" routerLinkActive="text-secondary" class="hover:text-secondary transition-colors">Careers</a>
          <a routerLink="/insights" routerLinkActive="text-secondary" [routerLinkActiveOptions]="{exact: false}" class="hover:text-secondary transition-colors">Insights</a>
          <a routerLink="/contact" routerLinkActive="text-secondary" class="hover:text-secondary transition-colors">Contact</a>
        </nav>

        <!-- CTA and Mobile Trigger -->
        <div class="flex items-center gap-3">
          <a 
            routerLink="/contact"
            class="h-9 px-4 font-headline text-[11px] font-bold tracking-wider uppercase flex items-center justify-center gap-1.5 transition-all duration-300"
            [class.bg-primary]="isSolidHeader()"
            [class.text-white]="isSolidHeader()"
            [class.hover:bg-secondary]="isSolidHeader()"
            [class.hover:text-primary]="isSolidHeader()"
            [class.bg-secondary]="!isSolidHeader()"
            [class.text-primary]="!isSolidHeader()"
            [class.hover:bg-white]="!isSolidHeader()"
          >
            <span>START A PROJECT</span>
            <span class="material-symbols-outlined text-[15px]">arrow_forward</span>
          </a>

          <button 
            type="button"
            (click)="isMobileNavOpen.set(true)"
            class="lg:hidden w-10 h-10 flex items-center justify-center transition-colors focus-visible:outline-2 focus-visible:outline-secondary"
            [class.text-primary]="isSolidHeader()"
            [class.text-white]="!isSolidHeader()"
            aria-label="Open mobile navigation"
          >
            <span class="material-symbols-outlined text-[26px]">menu</span>
          </button>
        </div>

      </div>
    </header>

    <app-mobile-nav 
      [isOpen]="isMobileNavOpen()" 
      (close)="isMobileNavOpen.set(false)"
    />
  `
})
export class HeaderComponent {
  private router = inject(Router);

  readonly isScrolled = signal<boolean>(false);
  readonly isMobileNavOpen = signal<boolean>(false);
  readonly currentUrl = signal<string>('/');

  readonly isHomePage = computed(() => {
    const url = this.currentUrl().split('?')[0].split('#')[0];
    return url === '/' || url === '';
  });

  readonly isSolidHeader = computed(() => {
    return !this.isHomePage() || this.isScrolled();
  });

  constructor() {
    this.currentUrl.set(this.router.url);
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event: NavigationEnd) => {
      this.currentUrl.set(event.urlAfterRedirects || event.url);
      this.isMobileNavOpen.set(false);
    });
  }

  @HostListener('window:scroll')
  onWindowScroll(): void {
    if (typeof window !== 'undefined') {
      this.isScrolled.set(window.scrollY > 40);
    }
  }
}
