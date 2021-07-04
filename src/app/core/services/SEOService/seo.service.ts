import { Injectable } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

interface ISeoOptions {
  title: string;
  description: string;
  pathSlug: string;
  image: string;
  keywords: string[];
}

@Injectable({
  providedIn: 'root',
})
export class SEOService {
  constructor(private titleService: Title, private metaTagService: Meta) {}

  public updateTitle = (title: string) => {
    this.titleService.setTitle(title);
  };

  public setTagsAndTitleToPage = ({
    title,
    description,
    pathSlug = window.location.pathname + window.location.search,
    image = 'https://blog-challenge-18f9b.web.app/assets/logo.png',
    keywords = ['blog', 'challenge', 'angular'],
  }: Partial<ISeoOptions>) => {
    const url = `https://blog-challenge-18f9b.web.app${pathSlug}`;
    this.updateTitle(title);
    return this.metaTagService.addTags([
      {
        name: 'description',
        content: description,
      },
      {
        name: 'image',
        content: image,
      },
      {
        name: 'keywords',
        content: keywords.join(),
      },
      // Open Graph / Facebook
      {
        name: 'og:title',
        content: title,
      },
      {
        name: 'og:image',
        content: image,
      },
      {
        name: 'og:description',
        content: description,
      },
      {
        name: 'og:url',
        content: url,
      },
      {
        name: 'og:type',
        content: 'website',
      },
      // Twitter
      {
        name: 'twitter:card',
        content: image,
      },
      {
        name: 'twitter:url',
        content: url,
      },
      {
        name: 'twitter:title',
        content: title,
      },
      {
        name: 'twitter:description',
        content: description,
      },
      {
        name: 'twitter:image',
        content: image,
      },
    ]);
  };
}
