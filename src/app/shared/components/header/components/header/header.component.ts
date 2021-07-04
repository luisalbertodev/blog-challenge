import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { ActivatedRoute, Router, Route, Params } from '@angular/router';
import { AuthService } from '@app/core/services/auth/auth.service';
import { ICountry } from '@app/types/query.model';
import countriesJson from '@app/shared/constants/countries.json';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  title: string;
  selectedOption: any;
  dataSource: ICountry[];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthService
  ) {
    this.dataSource = countriesJson.countries;
  }

  currentUser$: Observable<string> = this.authService
    .hasUser()
    .pipe(map((user) => user?.email ?? ''));

  ngOnInit(): void {
    this.getSlugForTitle();
    this.getSelectedOption();
  }

  getSlugForTitle() {
    const { path }: Route = this.route.routeConfig;
    this.title = path || 'Noticias';
  }

  getSelectedOption() {
    this.route.queryParams.subscribe((params: Params) => {
      this.selectedOption = this.dataSource.find(
        (el) => el.code === params.pais
      );
    });
  }

  updateOption(option) {
    this.router.navigate(['/inicio'], {
      queryParams: { pais: option },
      queryParamsHandling: 'merge',
    });
  }

  logout() {
    this.authService.logout().then(() => {
      this.router.navigate(['/seguridad/identificate']);
    });
  }
}
