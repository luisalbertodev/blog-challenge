import { Component, OnInit, Input } from '@angular/core';
import { Post } from '@app/types/post.model';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
})
export class PostComponent implements OnInit {
  @Input() post: Post;
  views: number = Math.round(Math.random() * 1000);

  constructor() {}

  ngOnInit(): void {}
}
