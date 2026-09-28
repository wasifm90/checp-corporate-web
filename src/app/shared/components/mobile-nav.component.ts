import { Component, input, output, HostListener } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-mobile-nav',
  standalone: true,
  imports: [RouterLink],
  template: `
    @if (isOpen()) {
      <div 
        class="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm lg:hidden transition-opacity duration-300"
        (click)="close.emit()"
        aria-hidden="true"
      ></div>

      <aside 
        class="fixed inset-y-0 right-0 z-50 w-full max-w-sm bg-surface shadow-2xl flex flex-col justify-between border-l border-outline-variant overflow-y-auto"
        role="dialog"
        aria-modal="true"
        aria-label="Navigation Menu"
      >
        <div>
          <!-- Header Inside Drawer -->
          <div class="px-6 py-5 flex items-center justify-between border-b border-outline-variant bg-surface">
            <a routerLink="/" (click)="close.emit()" class="flex items-center gap-3">
              <div class="w-8 h-8 rounded bg-primary flex items-center justify-center p-1.5 shadow-sm">
                <div class="w-full h-full flex flex-col justify-between">
                  <span class="w-full h-1 bg-secondary rounded-xs"></span>
                  <span class="w-2/3 h-1 bg-surface rounded-xs"></span>
                  <span class="w-full h-1 bg-surface rounded-xs"></span>
                </div>
              </div>
              <span class="font-headline font-bold text-lg tracking-wider text-primary">CHECP</span>
            </a>

            <button 
              type="button"
              (click)="close.emit()"
              class="w-10 h-10 flex items-center justify-center text-primary hover:text-secondary focus-visible:outline-2 focus-visible:outline-secondary"
              aria-label="Close navigation menu"
            >
              <span class="material-symbols-outlined text-[24px]">close</span>
            </button>
          </div>

          <!-- Nav Items -->
          <div class="p-6 flex flex-col gap-6">
            <span class="font-headline text-[10px] text-secondary font-bold uppercase tracking-widest">DIRECTORY</span>
            <nav class="flex flex-col divide-y divide-outline-variant text-[16px] font-headline font-medium">
              <a routerLink="/about" (click)="close.emit()" class="py-3.5 flex items-center justify-between text-primary hover:text-secondary transition-colors">
                <span>About Our Company</span>
                <span class="material-symbols-outlined text-[18px]">arrow_forward</span>
              </a>
              <a routerLink="/services" (click)="close.emit()" class="py-3.5 flex items-center justify-between text-primary hover:text-secondary transition-colors">
                <span>Services &amp; Capabilities</span>
                <span class="material-symbols-outlined text-[18px]">arrow_forward</span>
              </a>
              <a routerLink="/projects" (click)="close.emit()" class="py-3.5 flex items-center justify-between text-primary hover:text-secondary transition-colors">
                <span>Selected Projects</span>
                <span class="material-symbols-outlined text-[18px]">arrow_forward</span>
              </a>
              <a routerLink="/industries" (click)="close.emit()" class="py-3.5 flex items-center justify-between text-primary hover:text-secondary transition-colors">
                <span>Sectors &amp; Industries</span>
                <span class="material-symbols-outlined text-[18px]">arrow_forward</span>
              </a>
              <a routerLink="/safety-quality" (click)="close.emit()" class="py-3.5 flex items-center justify-between text-primary hover:text-secondary transition-colors">
                <span>Safety &amp; Quality</span>
                <span class="material-symbols-outlined text-[18px]">arrow_forward</span>
              </a>
              <a routerLink="/careers" (click)="close.emit()" class="py-3.5 flex items-center justify-between text-primary hover:text-secondary transition-colors">
                <span>Careers</span>
                <span class="material-symbols-outlined text-[18px]">arrow_forward</span>
              </a>
              <a routerLink="/insights" (click)="close.emit()" class="py-3.5 flex items-center justify-between text-primary hover:text-secondary transition-colors">
                <span>Insights &amp; News</span>
                <span class="material-symbols-outlined text-[18px]">arrow_forward</span>
              </a>
              <a routerLink="/locations" (click)="close.emit()" class="py-3.5 flex items-center justify-between text-primary hover:text-secondary transition-colors">
                <span>Regional Offices</span>
                <span class="material-symbols-outlined text-[18px]">arrow_forward</span>
              </a>
              <a routerLink="/contact" (click)="close.emit()" class="py-3.5 flex items-center justify-between text-primary hover:text-secondary transition-colors">
                <span>Contact</span>
                <span class="material-symbols-outlined text-[18px]">arrow_forward</span>
              </a>
            </nav>
          </div>
        </div>

        <!-- Footer inside drawer -->
        <div class="p-6 border-t border-outline-variant bg-surface-container-low space-y-4">
          <a 
            routerLink="/contact" 
            (click)="close.emit()"
            class="w-full h-12 bg-primary text-white font-headline text-[12px] uppercase font-bold tracking-wider flex items-center justify-center gap-2 hover:bg-secondary hover:text-primary transition-colors"
          >
            <span>START A PROJECT</span>
            <span class="material-symbols-outlined text-[16px]">arrow_forward</span>
          </a>
          <p class="font-body text-[12px] text-on-surface-variant text-center">
            +966 11 450 8900 • inquiries&#64;checp.com
          </p>
        </div>
      </aside>
    }
  `
})
export class MobileNavComponent {
  isOpen = input<boolean>(false);
  close = output<void>();

  @HostListener('document:keydown.escape')
  onEscape(): void {
    if (this.isOpen()) {
      this.close.emit();
    }
  }
}
