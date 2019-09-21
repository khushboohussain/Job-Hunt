import { Router } from '@angular/router';
import { JobInterface } from './../../../interfaces/job.interface';
import { CandidateService } from './../../../services/candidate.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-can-search',
  templateUrl: './can-search.component.html',
  styleUrls: ['./can-search.component.css']
})
export class CanSearchComponent implements OnInit {
  keyword = localStorage.getItem("searchKeyword");
  jobs :Array<JobInterface> = [];
  displayJobs :Array<JobInterface> = [];
  search = {} as JobInterface;
  constructor(private canSer: CandidateService, private router: Router) { }

  ngOnInit() {
    this.getJobs();
    this.filterJobs();
  }


  getJobs(){
    const key = this.keyword;
    console.log('Key is '+ key);
    const data: Array<JobInterface> = [];
    this.canSer.getAllJobs().subscribe(res => {
      this.jobs = res;
      this.jobs.forEach(function (elem, i) {
        var re = new RegExp(key, "gi");
          if (elem.job_title.match(re)) {
              data.push(elem);
          }
        });
        this.displayJobs = data;
    }, err => {
      console.log(err);
    });
  }

  filterJobs(){
    console.dir(this.displayJobs);
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
