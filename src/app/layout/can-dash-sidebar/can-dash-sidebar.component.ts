import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-can-dash-sidebar',
  templateUrl: './can-dash-sidebar.component.html',
  styleUrls: ['./can-dash-sidebar.component.css']
})
export class CanDashSidebarComponent implements OnInit {

  constructor(private auth: AuthenticationService) { }

  ngOnInit() {
  }
  signOut() {
    this.auth.logout();
  }
}
