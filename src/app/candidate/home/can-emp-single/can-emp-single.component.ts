import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployerService } from 'src/app/services/employer.service';
import { JobInterface } from 'src/app/interfaces/job.interface';
import { EmployerProfileInterface } from 'src/app/interfaces/employer-profile.interface';

@Component({
  selector: 'app-can-emp-single',
  templateUrl: './can-emp-single.component.html',
  styleUrls: ['./can-emp-single.component.css']
})
export class CanEmpSingleComponent implements OnInit {
  empId = localStorage.getItem('empSingle');
  empProfile = {} as EmployerProfileInterface;
  jobs: Array<JobInterface> = [];
  constructor(private router: Router, private empSer: EmployerService) { }

  ngOnInit() {
    localStorage.setItem('jobSingleId', null);
    this.getEmp();
    this.getJobs();
  }
  canJobSingle(index: number) {
    const uid = this.jobs[index].uid;
    localStorage.setItem('jobSingleId', uid);
    this.router.navigate(['/candidate/home/job-single']);
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
