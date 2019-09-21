import { JobInterface } from './../../interfaces/job.interface';
import { EmployerService } from './../../services/employer.service';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  encapsulation: ViewEncapsulation.None
})
export class HomepageComponent implements OnInit {

  constructor(private router: Router, private empSer: EmployerService) { }
  jobs: Array<JobInterface> = [];
  jobPosted = 0;
  ngOnInit() {
    // this.getJobs();
  }
  checkClick(num) {
    if (num === '1') {
      this.router.navigate(['/login']);
    } else {
      this.router.navigate(['/register']);
    }
  }
  // getJobs() {
  //   this.empSer.getJobsForCompany().subscribe(res => {
  //     this.jobs = res;
  //     this.jobPosted = this.jobs.length;
  //   }, err => {
  //     console.log(err);
  //   });
  // }
}
