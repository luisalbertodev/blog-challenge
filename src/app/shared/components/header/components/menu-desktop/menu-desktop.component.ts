import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { ICountry } from '@app/types/query.model';

@Component({
  selector: 'app-menu-desktop',
  templateUrl: './menu-desktop.component.html',
  styleUrls: ['./menu-desktop.component.scss'],
})
export class MenuDesktopComponent implements OnInit {
  @Input() currentUser: string;
  @Input() title: string;
  @Input() selectedOption: any;
  @Input() dataSource: ICountry[] = [];
  @Input() updateOption: (option: any) => void;
  @Output() onLogout: EventEmitter<any> = new EventEmitter();

  constructor(private router: Router) {}

  ngOnInit(): void {}

  logout() {
    this.onLogout.emit();
  }
}
