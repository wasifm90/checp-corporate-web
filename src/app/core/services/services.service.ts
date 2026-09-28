import { Injectable, inject, signal } from '@angular/core';
import { ServiceItem } from '../models';
import { SERVICES_REPOSITORY_TOKEN } from '../repositories/services.repository';
import { SERVICES_DATA } from '../data/services.data';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {
  private repo = inject(SERVICES_REPOSITORY_TOKEN);

  readonly services = signal<ServiceItem[]>(SERVICES_DATA);

  constructor() {
    this.refreshServices();
  }

  async refreshServices(): Promise<void> {
    const data = await this.repo.getAll();
    this.services.set(data);
  }

  getServiceBySlug(slug: string): ServiceItem | undefined {
    return this.services().find((s) => s.slug === slug);
  }

  async fetchServiceBySlug(slug: string): Promise<ServiceItem | undefined> {
    return this.repo.getBySlug(slug);
  }
}
