import { CandidateService } from './../../../services/candidate.service';
import { EmployerService } from 'src/app/services/employer.service';
import { Router } from '@angular/router';
import { JobInterface } from './../../../interfaces/job.interface';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-can-candidate-home',
  templateUrl: './can-candidate-home.component.html',
  styleUrls: ['./can-candidate-home.component.css']
})
export class CanCandidateHomeComponent implements OnInit {

  jobs :Array<JobInterface> = [];
  jobsPosted;
  singleJob;
  search = {} as JobInterface;
  constructor(private router: Router, private canSer: CandidateService) { }

  ngOnInit() {
    this.getJobs();
  }

  getJobs(){
    this.canSer.getAllJobs().subscribe(res => {
      this.jobs = res;
      console.dir(this.jobs);
    }, err => {
      console.log(err);
    });
  }

  onSearch() {
    console.log('Keyword is ' + this.search.job_title);
    localStorage.setItem('searchKeyword', this.search.job_title);
    this.router.navigate(['/candidate/home/can-search']);
  }

  empJobSingle(index: number) {
    localStorage.setItem('jobSingleId', this.jobs[index].jobId);
    this.router.navigate(['/candidate/home/job-single']);
  }

}
