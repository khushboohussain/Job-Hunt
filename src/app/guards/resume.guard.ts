import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticationService } from '../services/authentication.service';

@Injectable({
  providedIn: 'root'
})
export class ResumeGuard implements CanActivate {
  constructor(private auth: AuthenticationService, private router: Router) {}

  public canActivate(): boolean {
    console.log(this.auth.isLoggedIn());
    if (this.auth.isLoggedIn()) {
      return true;
    } else {
      this.router.navigate(['/']);
      return false;
    }
  }
}
