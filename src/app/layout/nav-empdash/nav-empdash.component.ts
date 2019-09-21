import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { EmployerService } from 'src/app/services/employer.service';
import { EmployerProfileInterface } from 'src/app/interfaces/employer-profile.interface';

@Component({
  selector: 'app-nav-empdash',
  templateUrl: './nav-empdash.component.html',
  styleUrls: ['./nav-empdash.component.css']
})
export class NavEmpdashComponent implements OnInit {
  emp = {} as EmployerProfileInterface;
  constructor(private auth: AuthenticationService, private empSer: EmployerService) { }

  ngOnInit() {
    this.getProfile();
  }
  signOut() {
    this.auth.logout();
  }
  getProfile() {
    this.empSer.getEmpProfile().subscribe(res => {
      if (res.length > 0) {
        this.emp = res[0];
      }
    }, err => {
      console.log(err);
    });
  }
}
