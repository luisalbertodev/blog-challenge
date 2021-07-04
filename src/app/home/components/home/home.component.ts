import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SEOService } from '@src/app/core/services/SEOService/seo.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(private SEOService: SEOService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    const { meta } = this.route.snapshot.data;
    this.SEOService.setTagsAndTitleToPage(meta);
  }
}
