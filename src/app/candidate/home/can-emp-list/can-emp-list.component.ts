import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserInterface } from 'src/app/interfaces/user.interface';
import { EmployerService } from 'src/app/services/employer.service';

@Component({
  selector: 'app-can-emp-list',
  templateUrl: './can-emp-list.component.html',
  styleUrls: ['./can-emp-list.component.css']
})
export class CanEmpListComponent implements OnInit {
  constructor(private router: Router, private empSer: EmployerService) { }
  emptoDisplay: Array<UserInterface> = [];
  emps: Array<UserInterface> = [];
  ngOnInit() {
    localStorage.setItem('empSingle', null);
    this.getEmployers();
  }
  empSingleRoute(id) {
    console.log(id);
    localStorage.setItem('empSingle', id);
    this.router.navigate(['/candidate/home/employer-single']);
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
