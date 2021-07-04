import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { PostsService } from '@app/core/services/posts/posts.service';
import { Post } from '@app/types/post.model';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss'],
})
export class PostsComponent implements OnInit {
  posts: Post[] = [];

  constructor(
    private postsService: PostsService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.fetchProducts();
  }

  fetchProducts() {
    this.route.queryParams.subscribe((params: Params) => {
      this.postsService
        .getAllPosts(params.pais ?? '', params.categoria ?? '')
        .subscribe(({ articles }) => {
          this.posts = articles;
        });
    });
  }
}
