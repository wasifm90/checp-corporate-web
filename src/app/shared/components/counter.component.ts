import { Component, input, signal, OnInit, OnDestroy, inject, PLATFORM_ID, ElementRef } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-counter',
  standalone: true,
  template: `
    <span>{{ prefix() }}{{ currentDisplay() }}{{ suffix() }}</span>
  `
})
export class CounterComponent implements OnInit, OnDestroy {
  target = input.required<number>();
  duration = input<number>(2000); // 2 seconds animation
  suffix = input<string>('');
  prefix = input<string>('');

  private platformId = inject(PLATFORM_ID);
  private el = inject(ElementRef);
  private observer?: IntersectionObserver;
  private animFrameId?: number;

  readonly currentDisplay = signal<number | string>(0);

  ngOnInit(): void {
    if (!isPlatformBrowser(this.platformId)) {
      // In SSR prerender, show the full target number
      this.currentDisplay.set(this.target());
      return;
    }

    // Obey reduced motion
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      this.currentDisplay.set(this.target());
      return;
    }

    // In browser, initialize with 0
    this.currentDisplay.set(0);

    // Observe intersection so it counts up when appearing on screen
    this.observer = new IntersectionObserver(
      (entries) => {
        if (entries[0] && entries[0].isIntersecting) {
          this.startCounting();
          this.observer?.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    this.observer.observe(this.el.nativeElement);
  }

  private startCounting(): void {
    const end = this.target();
    if (end === 0) {
      this.currentDisplay.set(0);
      return;
    }

    const startTime = performance.now();
    const duration = this.duration();

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Cubic ease-out deceleration curve
      const easeOut = 1 - Math.pow(1 - progress, 3);
      const current = Math.floor(easeOut * end);

      this.currentDisplay.set(current);

      if (progress < 1) {
        this.animFrameId = requestAnimationFrame(animate);
      } else {
        this.currentDisplay.set(end);
      }
    };

    this.animFrameId = requestAnimationFrame(animate);
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
    if (this.animFrameId) {
      cancelAnimationFrame(this.animFrameId);
    }
  }
}
