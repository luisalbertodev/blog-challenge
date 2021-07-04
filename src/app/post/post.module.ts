import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { PostComponent } from './components/post/post.component';
import { PostsComponent } from './components/posts/posts.component';
import { PostDetailComponent } from './components/post-detail/post-detail.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

@NgModule({
  declarations: [PostComponent, PostsComponent, PostDetailComponent, NotFoundComponent],
  exports: [PostComponent, PostsComponent, PostDetailComponent],
  imports: [CommonModule, RouterModule],
})
export class PostModule {}
