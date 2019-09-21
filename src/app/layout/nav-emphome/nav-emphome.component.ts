import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-nav-emphome',
  templateUrl: './nav-emphome.component.html',
  styleUrls: ['./nav-emphome.component.css']
})
export class NavEmphomeComponent implements OnInit {

  constructor(private auth: AuthenticationService) { }

  ngOnInit() {
  }
  signOut() {
    this.auth.logout();
  }
}
