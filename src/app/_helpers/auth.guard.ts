import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, CanLoad } from '@angular/router';
import { AuthenticationService } from '@app/_services';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanLoad, CanActivate {
  constructor(
    private router: Router,
    private authenticationService: AuthenticationService
  ) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const user = this.authenticationService.userValue;
    if (user) return true;
    // not logged in
    this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
    return false;
  }

  canLoad() {
    const user = this.authenticationService.userValue;
    if (user) return true;
    // not logged in
    this.router.navigate(['/login']);
    return false;
  }
}