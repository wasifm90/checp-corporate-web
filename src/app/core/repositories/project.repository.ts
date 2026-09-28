import { InjectionToken } from '@angular/core';
import { Project } from '../models';
import { PROJECTS_DATA } from '../data/projects.data';

export interface IProjectRepository {
  getAll(): Promise<Project[]>;
  getBySlug(slug: string): Promise<Project | undefined>;
  getFeatured(): Promise<Project[]>;
  getRelated(slug: string, limit?: number): Promise<Project[]>;
}

export class StaticProjectRepository implements IProjectRepository {
  async getAll(): Promise<Project[]> {
    return PROJECTS_DATA;
  }

  async getBySlug(slug: string): Promise<Project | undefined> {
    return PROJECTS_DATA.find((p) => p.slug === slug);
  }

  async getFeatured(): Promise<Project[]> {
    return PROJECTS_DATA.filter((p) => p.featured);
  }

  async getRelated(slug: string, limit = 2): Promise<Project[]> {
    return PROJECTS_DATA.filter((p) => p.slug !== slug).slice(0, limit);
  }
}

export const PROJECT_REPOSITORY_TOKEN = new InjectionToken<IProjectRepository>(
  'PROJECT_REPOSITORY_TOKEN',
  {
    providedIn: 'root',
    factory: () => new StaticProjectRepository()
  }
);
