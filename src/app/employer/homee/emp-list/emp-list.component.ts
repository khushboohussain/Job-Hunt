import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployerService } from 'src/app/services/employer.service';
import { UserInterface } from 'src/app/interfaces/user.interface';

@Component({
  selector: 'app-emp-list',
  templateUrl: './emp-list.component.html',
  styleUrls: ['./emp-list.component.css']
})
export class EmpListComponent implements OnInit {

  constructor(private router: Router, private empSer: EmployerService) { }
  emptoDisplay: Array<UserInterface> = [];
  emps: Array<UserInterface> = [];
  ngOnInit() {
    localStorage.setItem('empSingle', null);
    this.getEmployers();
  }
  empSingleRoute(id) {
    console.log(id);
    localStorage.setItem('empSingle', JSON.stringify(id));
    this.router.navigate(['/employer/dashboard/single-emp']);
  }
  getEmployers() {
    this.empSer.getEmps().subscribe(res => {
      this.emps = res;
      this.emptoDisplay = this.emps;
    }, err => {
      console.log(err);
    });
  }
  filterEmp(val: string) {
    this.emptoDisplay = this.emps;
    const data: Array<UserInterface> = [];
    if (val === 'all') {
      this.emptoDisplay = this.emps;
    } else {
      this.emptoDisplay.forEach((item) => {
        if (item.name[0].toLowerCase() === val) {
          data.push(item);
        }
      });
      this.emptoDisplay = data;
    }
  }
}
