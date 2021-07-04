import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthService } from './services/auth/auth.service';
import { PostsService } from './services/posts/posts.service';
import { SEOService } from './services/SEOService/seo.service';

@NgModule({
  declarations: [],
  imports: [CommonModule],
  providers: [AuthService, PostsService, SEOService],
})
export class CoreModule {}
