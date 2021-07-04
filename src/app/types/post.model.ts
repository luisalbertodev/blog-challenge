type SourceType = {
  id: string;
  name: string;
};

export interface Post {
  status: string;
  totalResults: number;
  source: SourceType;
  author: string;
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
  content: string;
}

export interface FetchService {
  status: string;
  totalResults: number;
  articles: Post[];
}
