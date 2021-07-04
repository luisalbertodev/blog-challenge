import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  RouterStateSnapshot,
  UrlTree,
  Router,
} from '@angular/router';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { AuthService } from '@app/core/services/auth/auth.service';

@Injectable({
  providedIn: 'root',
})
export class AppGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    return this.authService.hasUser().pipe(
      map((hasUser) => {
        return hasUser !== null;
      }),
      tap((hasUser) => {
        if (!hasUser) {
          this.router.navigate(['/seguridad/identificate']);
        }
      })
    );
  }
}
