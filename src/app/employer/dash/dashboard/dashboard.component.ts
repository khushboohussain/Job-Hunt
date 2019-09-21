import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  isEmp = true;
  constructor(private router: Router) { }

  ngOnInit() {
    // loggedin user type;
    // if (this.isEmp) {
    //   this.router.navigate(['/dashboard/employer/home']);
    // } else {
    //   this.router.navigate(['/dashboard/candidate']);
    // }
  }

}
