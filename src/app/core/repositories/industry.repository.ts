import { InjectionToken } from '@angular/core';
import { Industry } from '../models';
import { INDUSTRIES_DATA } from '../data/industries.data';

export interface IIndustryRepository {
  getAll(): Promise<Industry[]>;
  getBySlug(slug: string): Promise<Industry | undefined>;
}

export class StaticIndustryRepository implements IIndustryRepository {
  async getAll(): Promise<Industry[]> {
    return INDUSTRIES_DATA.sort((a, b) => a.order - b.order);
  }

  async getBySlug(slug: string): Promise<Industry | undefined> {
    return INDUSTRIES_DATA.find((i) => i.slug === slug);
  }
}

export const INDUSTRY_REPOSITORY_TOKEN = new InjectionToken<IIndustryRepository>(
  'INDUSTRY_REPOSITORY_TOKEN',
  {
    providedIn: 'root',
    factory: () => new StaticIndustryRepository()
  }
);
