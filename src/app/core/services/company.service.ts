import { Injectable, inject, signal } from '@angular/core';
import { CompanyProfile, SiteSettings, LocationOffice, SafetyRecord } from '../models';
import { COMPANY_REPOSITORY_TOKEN } from '../repositories/company.repository';
import { COMPANY_PROFILE, SITE_SETTINGS } from '../data/company.data';
import { LOCATIONS_DATA } from '../data/locations.data';
import { SAFETY_DATA } from '../data/safety.data';
import { CAREERS_DATA } from '../data/careers.data';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {
  private repo = inject(COMPANY_REPOSITORY_TOKEN);

  readonly profile = signal<CompanyProfile>(COMPANY_PROFILE);
  readonly settings = signal<SiteSettings>(SITE_SETTINGS);
  readonly locations = signal<LocationOffice[]>(LOCATIONS_DATA);
  readonly safety = signal<SafetyRecord>(SAFETY_DATA);
  readonly careers = signal<typeof CAREERS_DATA>(CAREERS_DATA);

  constructor() {
    this.refreshAll();
  }

  async refreshAll(): Promise<void> {
    const [p, s, l, sf, c] = await Promise.all([
      this.repo.getProfile(),
      this.repo.getSiteSettings(),
      this.repo.getLocations(),
      this.repo.getSafetyRecord(),
      this.repo.getCareersData()
    ]);
    this.profile.set(p);
    this.settings.set(s);
    this.locations.set(l);
    this.safety.set(sf);
    this.careers.set(c);
  }
}
