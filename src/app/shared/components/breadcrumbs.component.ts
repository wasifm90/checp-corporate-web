import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';

export interface BreadcrumbItem {
  label: string;
  url?: string;
}

@Component({
  selector: 'app-breadcrumbs',
  standalone: true,
  imports: [RouterLink],
  template: `
    <nav aria-label="Breadcrumbs" class="flex items-center gap-2 text-[12px] font-headline uppercase tracking-wider text-on-surface-variant">
      <a routerLink="/" class="hover:text-secondary transition-colors">Home</a>
      @for (item of items(); track $index) {
        <span class="text-outline">/</span>
        @if (item.url) {
          <a [routerLink]="item.url" class="hover:text-secondary transition-colors">{{ item.label }}</a>
        } @else {
          <span class="text-primary font-semibold" aria-current="page">{{ item.label }}</span>
        }
      }
    </nav>
  `
})
export class BreadcrumbsComponent {
  items = input.required<BreadcrumbItem[]>();
}
