import { Injectable, inject, signal } from '@angular/core';
import { Industry } from '../models';
import { INDUSTRY_REPOSITORY_TOKEN } from '../repositories/industry.repository';
import { INDUSTRIES_DATA } from '../data/industries.data';

@Injectable({
  providedIn: 'root'
})
export class IndustryService {
  private repo = inject(INDUSTRY_REPOSITORY_TOKEN);

  readonly industries = signal<Industry[]>(INDUSTRIES_DATA);

  constructor() {
    this.refreshIndustries();
  }

  async refreshIndustries(): Promise<void> {
    const data = await this.repo.getAll();
    this.industries.set(data);
  }

  getIndustryBySlug(slug: string): Industry | undefined {
    return this.industries().find((i) => i.slug === slug);
  }

  async fetchIndustryBySlug(slug: string): Promise<Industry | undefined> {
    return this.repo.getBySlug(slug);
  }
}
