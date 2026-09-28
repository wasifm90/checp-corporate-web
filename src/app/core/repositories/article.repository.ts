import { InjectionToken } from '@angular/core';
import { Article } from '../models';
import { ARTICLES_DATA } from '../data/articles.data';

export interface IArticleRepository {
  getAll(): Promise<Article[]>;
  getBySlug(slug: string): Promise<Article | undefined>;
  getRelated(slug: string, limit?: number): Promise<Article[]>;
}

export class StaticArticleRepository implements IArticleRepository {
  async getAll(): Promise<Article[]> {
    return ARTICLES_DATA;
  }

  async getBySlug(slug: string): Promise<Article | undefined> {
    return ARTICLES_DATA.find((a) => a.slug === slug);
  }

  async getRelated(slug: string, limit = 2): Promise<Article[]> {
    return ARTICLES_DATA.filter((a) => a.slug !== slug).slice(0, limit);
  }
}

export const ARTICLE_REPOSITORY_TOKEN = new InjectionToken<IArticleRepository>(
  'ARTICLE_REPOSITORY_TOKEN',
  {
    providedIn: 'root',
    factory: () => new StaticArticleRepository()
  }
);
