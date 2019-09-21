import { Injectable } from '@angular/core';
import { CanActivateChild, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticationService } from '../services/authentication.service';

@Injectable({
  providedIn: 'root'
})
export class EmployerGuard implements CanActivateChild {

  constructor(private auth: AuthenticationService, private router: Router) {}


  public canActivateChild(): boolean {
    console.log(this.auth.isLoggedIn());
    if (this.auth.isLoggedIn()) {
      const userType: string = this.auth.getUserType();
      if (userType === 'employer') {
        return true;
      } else {
        this.router.navigate(['/']);
        return false;
      }
    } else {
      this.router.navigate(['/']);
      return false;
    }
  }
}
