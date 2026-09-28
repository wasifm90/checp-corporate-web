import { Injectable, inject, signal, computed } from '@angular/core';
import { Project } from '../models';
import { PROJECT_REPOSITORY_TOKEN } from '../repositories/project.repository';
import { PROJECTS_DATA } from '../data/projects.data';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  private repo = inject(PROJECT_REPOSITORY_TOKEN);

  readonly projects = signal<Project[]>(PROJECTS_DATA);
  readonly featuredProjects = computed(() => this.projects().filter((p) => p.featured));

  constructor() {
    this.refreshProjects();
  }

  async refreshProjects(): Promise<void> {
    const data = await this.repo.getAll();
    this.projects.set(data);
  }

  getProjectBySlug(slug: string): Project | undefined {
    return this.projects().find((p) => p.slug === slug);
  }

  async fetchProjectBySlug(slug: string): Promise<Project | undefined> {
    return this.repo.getBySlug(slug);
  }

  async getRelatedProjects(slug: string, limit = 2): Promise<Project[]> {
    return this.repo.getRelated(slug, limit);
  }
}
