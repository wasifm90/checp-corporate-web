import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CompanyService } from '../../core/services/company.service';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink],
  template: `
    <footer class="w-full bg-surface-container-high px-6 lg:px-12 py-16 flex flex-col gap-12 text-primary border-t border-outline-variant">
      <div class="max-w-7xl mx-auto w-full flex flex-col gap-12">
        
        <!-- Top Row: Brand & Tagline -->
        <div class="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-8 border-b border-outline-variant">
          <div class="flex flex-col gap-3">
            <svg class="h-8 w-auto self-start" viewBox="0 0 240 50" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g transform="translate(4, 5)">
                <rect x="0" y="0" width="40" height="40" rx="4" fill="#12161F"/>
                <path d="M10 12h20v4H10z" fill="#C8963E"/>
                <path d="M10 18h12v4H10z" fill="#FAF9F5"/>
                <path d="M10 24h20v4H10z" fill="#FAF9F5"/>
                <rect x="26" y="18" width="4" height="4" fill="#C8963E"/>
              </g>
              <text x="56" y="32" font-family="'Space Grotesk', sans-serif" font-size="24" font-weight="700" letter-spacing="0.08em" fill="#12161F">CHECP</text>
              <text x="56" y="42" font-family="'Space Grotesk', sans-serif" font-size="7.5" font-weight="600" letter-spacing="0.22em" fill="#787E87">CONSTRUCTION &amp; ENGINEERING</text>
            </svg>
            <p class="font-headline text-[13px] text-on-surface-variant font-medium">
              {{ company.profile().tagline }}
            </p>
          </div>

          <div class="flex items-center gap-4">
            <a 
              routerLink="/contact"
              class="h-11 px-6 bg-primary text-white font-headline text-[11px] font-bold uppercase tracking-wider flex items-center gap-2 hover:bg-secondary hover:text-primary transition-colors"
            >
              <span>INQUIRE / RFP</span>
              <span class="material-symbols-outlined text-[15px]">arrow_forward</span>
            </a>
          </div>
        </div>

        <!-- 4 Column Directory -->
        <div class="grid grid-cols-2 md:grid-cols-4 gap-8 text-[12px] font-headline">
          <!-- Col 1: COMPANY -->
          <div class="flex flex-col gap-3">
            <span class="text-[11px] uppercase tracking-wider font-bold text-secondary">COMPANY</span>
            <div class="flex flex-col gap-2.5 text-on-surface-variant">
              <a routerLink="/about" class="hover:text-primary transition-colors">About Us</a>
              <a routerLink="/projects" class="hover:text-primary transition-colors">Selected Projects</a>
              <a routerLink="/careers" class="hover:text-primary transition-colors">Careers &amp; Culture</a>
              <a routerLink="/safety-quality" class="hover:text-primary transition-colors">HSE &amp; Quality</a>
            </div>
          </div>

          <!-- Col 2: EXPERTISE -->
          <div class="flex flex-col gap-3">
            <span class="text-[11px] uppercase tracking-wider font-bold text-secondary">EXPERTISE</span>
            <div class="flex flex-col gap-2.5 text-on-surface-variant">
              <a routerLink="/services" class="hover:text-primary transition-colors">Services Directory</a>
              <a routerLink="/industries" class="hover:text-primary transition-colors">Sectors &amp; Markets</a>
              <a routerLink="/services/general-contracting" class="hover:text-primary transition-colors">General Contracting</a>
              <a routerLink="/services/design-build" class="hover:text-primary transition-colors">Design &amp; Build</a>
            </div>
          </div>

          <!-- Col 3: REGIONS -->
          <div class="flex flex-col gap-3">
            <span class="text-[11px] uppercase tracking-wider font-bold text-secondary">REGIONS</span>
            <div class="flex flex-col gap-2.5 text-on-surface-variant">
              <a routerLink="/locations" class="hover:text-primary transition-colors">Riyadh (Head Office)</a>
              <a routerLink="/locations" class="hover:text-primary transition-colors">Jeddah (Western Region)</a>
              <a routerLink="/locations" class="hover:text-primary transition-colors">Dammam (Eastern Hub)</a>
            </div>
          </div>

          <!-- Col 4: CONNECT -->
          <div class="flex flex-col gap-3">
            <span class="text-[11px] uppercase tracking-wider font-bold text-secondary">CONNECT</span>
            <div class="flex flex-col gap-2.5 text-on-surface-variant">
              <a routerLink="/contact" class="hover:text-primary transition-colors">Contact Directorate</a>
              <a [href]="company.settings().linkedinUrl" target="_blank" rel="noopener noreferrer" class="hover:text-primary transition-colors">LinkedIn</a>
              <a routerLink="/insights" class="hover:text-primary transition-colors">Insights &amp; Papers</a>
            </div>
          </div>
        </div>

        <!-- Bottom Copyright & Legal -->
        <div class="pt-8 border-t border-outline-variant flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-[12px] font-body text-on-surface-variant">
          <div>
            &copy; {{ company.settings().copyrightYear }} {{ company.profile().name }}. All rights reserved.
          </div>
          <div class="flex items-center gap-6">
            <a routerLink="/privacy" class="hover:text-primary transition-colors">Privacy Policy</a>
            <span>•</span>
            <a routerLink="/terms" class="hover:text-primary transition-colors">Terms of Service</a>
          </div>
        </div>

      </div>
    </footer>
  `
})
export class FooterComponent {
  readonly company = inject(CompanyService);
}
