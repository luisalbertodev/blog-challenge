import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Post, FetchService } from '@app/types/post.model';
import { environment } from 'src/environments/environment';

// apiKeyServiceNews
@Injectable({
  providedIn: 'root',
})
export class PostsService {
  posts: Post[];

  constructor(private http: HttpClient) {}

  getAllPosts(country: string, category: string) {
    return this.http.get<FetchService>(
      `${environment.baseUrl}&category=${category}&country=${country}`
    );
  }
}
