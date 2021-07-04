import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { SEOService } from '@src/app/core/services/SEOService/seo.service';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.scss'],
})
export class PageNotFoundComponent implements OnInit {
  constructor(private route: ActivatedRoute, private SEOService: SEOService) {}

  ngOnInit(): void {
    const { meta } = this.route.snapshot.data;
    this.SEOService.setTagsAndTitleToPage(meta);
  }
}
