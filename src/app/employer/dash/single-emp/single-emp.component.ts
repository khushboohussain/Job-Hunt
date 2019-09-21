import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployerService } from 'src/app/services/employer.service';
import { EmployerProfileInterface } from 'src/app/interfaces/employer-profile.interface';
import { JobInterface } from 'src/app/interfaces/job.interface';

@Component({
  selector: 'app-single-emp',
  templateUrl: './single-emp.component.html',
  styleUrls: ['./single-emp.component.css']
})
export class SingleEmpComponent implements OnInit {
  empId;
  empProfile = {} as EmployerProfileInterface;
  jobs: Array<JobInterface> = [];
  constructor(private router: Router, private empSer: EmployerService) { }

  ngOnInit() {
    this.empId = JSON.parse(localStorage.getItem('empSingle'));
    console.log('Employee Id is '+ this.empId);
    localStorage.setItem('jobSingleId', null);
    this.getEmp();
    this.getJobs();
  }
  empJobSingle(index: number) {
    const uid = this.jobs[index].uid;
    localStorage.setItem('jobSingleId', JSON.stringify(uid));
    this.router.navigate(['/employer/home/job-single']);
  }
  getEmp() {
    this.empSer.getEmpById(this.empId).subscribe(res => {
      this.empProfile = res[0];
      console.log(this.empProfile);
    }, err => {
      console.log(err);
    });
  }
  getJobs() {
    this.empSer.getJobsById(this.empId).subscribe(res => {
      this.jobs = res;
    }, err => {
      console.log(err);
    });
  }
}
