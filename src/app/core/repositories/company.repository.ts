import { InjectionToken } from '@angular/core';
import { CompanyProfile, SiteSettings, LocationOffice, SafetyRecord } from '../models';
import { COMPANY_PROFILE, SITE_SETTINGS } from '../data/company.data';
import { LOCATIONS_DATA } from '../data/locations.data';
import { SAFETY_DATA } from '../data/safety.data';
import { CAREERS_DATA } from '../data/careers.data';

export interface ICompanyRepository {
  getProfile(): Promise<CompanyProfile>;
  getSiteSettings(): Promise<SiteSettings>;
  getLocations(): Promise<LocationOffice[]>;
  getSafetyRecord(): Promise<SafetyRecord>;
  getCareersData(): Promise<typeof CAREERS_DATA>;
}

export class StaticCompanyRepository implements ICompanyRepository {
  async getProfile(): Promise<CompanyProfile> {
    return COMPANY_PROFILE;
  }

  async getSiteSettings(): Promise<SiteSettings> {
    return SITE_SETTINGS;
  }

  async getLocations(): Promise<LocationOffice[]> {
    return LOCATIONS_DATA;
  }

  async getSafetyRecord(): Promise<SafetyRecord> {
    return SAFETY_DATA;
  }

  async getCareersData(): Promise<typeof CAREERS_DATA> {
    return CAREERS_DATA;
  }
}

export const COMPANY_REPOSITORY_TOKEN = new InjectionToken<ICompanyRepository>(
  'COMPANY_REPOSITORY_TOKEN',
  {
    providedIn: 'root',
    factory: () => new StaticCompanyRepository()
  }
);
