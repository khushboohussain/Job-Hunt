import { Component, OnInit } from '@angular/core';
import { EmployerService } from 'src/app/services/employer.service';
import { JobInterface } from 'src/app/interfaces/job.interface';
import { EmployerProfileInterface } from 'src/app/interfaces/employer-profile.interface';

@Component({
  selector: 'app-job-single',
  templateUrl: './job-single.component.html',
  styleUrls: ['./job-single.component.css']
})
export class JobSingleComponent implements OnInit {
  constructor(private empSer: EmployerService) { }
  jobID = JSON.parse(localStorage.getItem('jobSingleId'));
  jobSingle = {} as JobInterface;
  ngOnInit() {
    console.log(this.jobID);
    this.empSer.getJobSingle(this.jobID).subscribe(res => {
      this.jobSingle = res;
      console.log(this.jobSingle);
    }, err => {
      console.log(err);
    });
  }
}
