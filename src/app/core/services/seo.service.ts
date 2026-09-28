import { Injectable, inject } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { DOCUMENT } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class SeoService {
  private titleService = inject(Title);
  private metaService = inject(Meta);
  private doc = inject(DOCUMENT);

  private readonly siteBaseUrl = 'https://checp.com';
  private readonly defaultOgImage = 'https://checp.com/images/projects/financial-district-hq.jpg';

  setPageMeta(opts: {
    title: string;
    description: string;
    path: string;
    ogImage?: string;
    ogType?: string;
    structuredData?: object;
  }): void {
    const fullTitle = opts.title.includes('CHECP') ? opts.title : `${opts.title} | CHECP`;
    const fullUrl = `${this.siteBaseUrl}${opts.path}`;
    const image = opts.ogImage || this.defaultOgImage;

    // Document Title
    this.titleService.setTitle(fullTitle);

    // Standard Meta
    this.metaService.updateTag({ name: 'description', content: opts.description });

    // OpenGraph
    this.metaService.updateTag({ property: 'og:title', content: fullTitle });
    this.metaService.updateTag({ property: 'og:description', content: opts.description });
    this.metaService.updateTag({ property: 'og:url', content: fullUrl });
    this.metaService.updateTag({ property: 'og:image', content: image });
    this.metaService.updateTag({ property: 'og:type', content: opts.ogType || 'website' });
    this.metaService.updateTag({ property: 'og:site_name', content: 'CHECP' });

    // Twitter
    this.metaService.updateTag({ name: 'twitter:card', content: 'summary_large_image' });
    this.metaService.updateTag({ name: 'twitter:title', content: fullTitle });
    this.metaService.updateTag({ name: 'twitter:description', content: opts.description });
    this.metaService.updateTag({ name: 'twitter:image', content: image });

    // Canonical link
    this.updateCanonicalUrl(fullUrl);

    // Structured Data
    if (opts.structuredData) {
      this.setStructuredData(opts.structuredData);
    }
  }

  private updateCanonicalUrl(url: string): void {
    let link: HTMLLinkElement | null = this.doc.querySelector('link[rel="canonical"]');
    if (!link) {
      link = this.doc.createElement('link');
      link.setAttribute('rel', 'canonical');
      this.doc.head.appendChild(link);
    }
    link.setAttribute('href', url);
  }

  private setStructuredData(data: object): void {
    let script: HTMLScriptElement | null = this.doc.querySelector('script[type="application/ld+json"]#page-schema');
    if (!script) {
      script = this.doc.createElement('script');
      script.type = 'application/ld+json';
      script.id = 'page-schema';
      this.doc.head.appendChild(script);
    }
    script.text = JSON.stringify(data);
  }
}
