import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-nav-canhome',
  templateUrl: './nav-canhome.component.html',
  styleUrls: ['./nav-canhome.component.css']
})
export class NavCanhomeComponent implements OnInit {

  constructor(private auth: AuthenticationService) { }

  ngOnInit() {
  }
  signOut() {
    this.auth.logout();
  }
}
