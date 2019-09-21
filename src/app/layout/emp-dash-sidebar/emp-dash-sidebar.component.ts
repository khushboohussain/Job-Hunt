import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-emp-dash-sidebar',
  templateUrl: './emp-dash-sidebar.component.html',
  styleUrls: ['./emp-dash-sidebar.component.css']
})
export class EmpDashSidebarComponent implements OnInit {

  constructor(private auth: AuthenticationService) { }

  ngOnInit() {
  }
  signOut() {
    this.auth.logout();
  }
}
