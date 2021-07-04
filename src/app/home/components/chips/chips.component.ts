import { Component, OnInit } from '@angular/core';
import categoriesJson from '@app/shared/constants/categories.json';

@Component({
  selector: 'app-chips',
  templateUrl: './chips.component.html',
  styleUrls: ['./chips.component.scss'],
})
export class ChipsComponent implements OnInit {
  categories: string[];

  constructor() {
    this.categories = categoriesJson.categories ?? [];
  }
  ngOnInit(): void {}
}
