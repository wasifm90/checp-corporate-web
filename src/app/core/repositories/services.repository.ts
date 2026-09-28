import { InjectionToken } from '@angular/core';
import { ServiceItem } from '../models';
import { SERVICES_DATA } from '../data/services.data';

export interface IServicesRepository {
  getAll(): Promise<ServiceItem[]>;
  getBySlug(slug: string): Promise<ServiceItem | undefined>;
}

export class StaticServicesRepository implements IServicesRepository {
  async getAll(): Promise<ServiceItem[]> {
    return SERVICES_DATA.sort((a, b) => a.order - b.order);
  }

  async getBySlug(slug: string): Promise<ServiceItem | undefined> {
    return SERVICES_DATA.find((s) => s.slug === slug);
  }
}

export const SERVICES_REPOSITORY_TOKEN = new InjectionToken<IServicesRepository>(
  'SERVICES_REPOSITORY_TOKEN',
  {
    providedIn: 'root',
    factory: () => new StaticServicesRepository()
  }
);
