import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { ICountry } from '@app/types/query.model';

@Component({
  selector: 'app-menu-mobile',
  templateUrl: './menu-mobile.component.html',
  styleUrls: ['./menu-mobile.component.scss'],
})
export class MenuMobileComponent implements OnInit {
  @Input() currentUser: string;
  @Input() title: string;
  @Input() selectedOption: any;
  @Input() dataSource: ICountry[] = [];
  @Input() updateOption: (option: any) => void;
  @Output() onLogout: EventEmitter<any> = new EventEmitter();

  constructor(private router: Router) {}

  ngOnInit(): void {}

  logout() {
    const btnMenu = document.getElementById(
      'btn-burger'
    ) as unknown as HTMLInputElement;
    btnMenu.checked = false;
    this.onLogout.emit();
  }
}
