import { ApplyJobInterface } from './../../../interfaces/apply-job.interface';
import { EmployerService } from './../../../services/employer.service';
import { JobInterface } from './../../../interfaces/job.interface';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  appliedJobs: Array<ApplyJobInterface> = [];
  resumesCount = 0;
  jobs :Array<JobInterface> = [];
  jobsPosted;
  constructor(private router: Router, private empSer: EmployerService) { }

  ngOnInit() {
    this.getJobs();
    this.getResumes();
  }

  empJobSingle(index: number) {
    localStorage.setItem('jobSingleId', JSON.stringify(this.jobs[index].uid));
    this.router.navigate(['/employer/home/job-single']);
  }

  getJobs(){
    this.empSer.getJobsForCompany().subscribe(res => {
      this.jobs = res;
      this.jobsPosted = this.jobs.length;
      console.log(this.jobs);
    }, err => {
      console.log(err);
    });
  }

  getResumes(){
    const users = JSON.parse(localStorage.getItem('user'));
    this.empSer.getAppliedJobs(users.uid)
    .subscribe(res => {
      this.appliedJobs = res;
      this.resumesCount = this.appliedJobs.length;
    });
  }

  // getJobSingle
}
