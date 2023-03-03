import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AuthService } from '../auth.service';

@Injectable()
export class AuthGuardService implements CanActivate {

  private loginUrl: string = '';

  constructor(private authService: AuthService) { 
    this.loginUrl = environment.loginUrl;
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    return this.authService.isAuthenticated().pipe(
      tap((authenticated) => {
          if(!authenticated) {
            window.location.href = this.loginUrl;
          }
      })
    )
  }
}