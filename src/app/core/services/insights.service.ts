import { Injectable, inject, signal } from '@angular/core';
import { Article } from '../models';
import { ARTICLE_REPOSITORY_TOKEN } from '../repositories/article.repository';
import { ARTICLES_DATA } from '../data/articles.data';

@Injectable({
  providedIn: 'root'
})
export class InsightsService {
  private repo = inject(ARTICLE_REPOSITORY_TOKEN);

  readonly articles = signal<Article[]>(ARTICLES_DATA);

  constructor() {
    this.refreshArticles();
  }

  async refreshArticles(): Promise<void> {
    const data = await this.repo.getAll();
    this.articles.set(data);
  }

  getArticleBySlug(slug: string): Article | undefined {
    return this.articles().find((a) => a.slug === slug);
  }

  async fetchArticleBySlug(slug: string): Promise<Article | undefined> {
    return this.repo.getBySlug(slug);
  }

  async getRelatedArticles(slug: string, limit = 2): Promise<Article[]> {
    return this.repo.getRelated(slug, limit);
  }
}
