import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AuthService } from "./auth.service";
import { Router } from '@angular/router';

@Injectable()
export class AllRouteGuard implements CanActivate {

  status_code: number;

  constructor(private authService: AuthService,  public router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): any {

    const _this = this;

    return this.authService.isAuthenticated().then(
        (v) => {
          if (v.status === 200) {return true; }
          _this.router.navigate(['login']);
          return false;
        },
      () => {_this.router.navigate(['login']); });
  }

  setStatus(status: number): void {
    this.status_code = status;
    console.log(this.status_code);
  }
}
