import { Injectable } from '@angular/core';
import { CanActivateChild, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticationService } from '../services/authentication.service';

@Injectable({
  providedIn: 'root'
})
export class CandidateGuard implements CanActivateChild {

  constructor(private auth: AuthenticationService, private router: Router) {}

  public canActivateChild(): boolean {
    if (this.auth.isLoggedIn()) {
      const userType = this.auth.getUserType();
      if (userType === 'candidate') {
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
