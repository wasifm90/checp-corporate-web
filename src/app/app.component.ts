import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet, Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { HeaderComponent } from './shared/components/header.component';
import { FooterComponent } from './shared/components/footer.component';
import { SeoService } from './core/services/seo.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent],
  template: `
    <app-header />
    <main id="main-content" class="flex-1 flex flex-col relative w-full bg-surface">
      <router-outlet />
    </main>
    <app-footer />
  `
})
export class AppComponent implements OnInit {
  private router = inject(Router);
  private seo = inject(SeoService);

  ngOnInit(): void {
    // Scroll to top on route change
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      if (typeof window !== 'undefined') {
        window.scrollTo(0, 0);
      }
    });

    // Default global Organization schema
    this.seo.setPageMeta({
      title: 'CHECP — Construction, Engineering & Delivery',
      description: 'CHECP delivers complex construction and engineering projects through disciplined planning, technical expertise, safety and uncompromising quality.',
      path: '/',
      structuredData: {
        '@context': 'https://schema.org',
        '@graph': [
          {
            '@type': 'Organization',
            '@id': 'https://checp.com/#organization',
            'name': 'CHECP',
            'legalName': 'CHECP Engineering & Contracting Co.',
            'url': 'https://checp.com',
            'logo': 'https://checp.com/images/checp-logo.svg',
            'sameAs': ['https://linkedin.com/company/checp'],
            'address': {
              '@type': 'PostalAddress',
              'streetAddress': 'King Abdullah Financial District (KAFD)',
              'addressLocality': 'Riyadh',
              'addressCountry': 'SA'
            },
            'contactPoint': {
              '@type': 'ContactPoint',
              'telephone': '+966-11-450-8900',
              'contactType': 'customer support',
              'areaServed': ['SA', 'AE', 'GCC'],
              'availableLanguage': ['English', 'Arabic']
            }
          },
          {
            '@type': 'WebSite',
            '@id': 'https://checp.com/#website',
            'url': 'https://checp.com',
            'name': 'CHECP',
            'publisher': { '@id': 'https://checp.com/#organization' }
          }
        ]
      }
    });
  }
}
