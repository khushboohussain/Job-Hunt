import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { EmployerService } from 'src/app/services/employer.service';
import { JobInterface } from 'src/app/interfaces/job.interface';
import swal from 'sweetalert2';
import { ApplyJobInterface } from 'src/app/interfaces/apply-job.interface';
@Component({
  selector: 'app-manage-jobs',
  templateUrl: './manage-jobs.component.html',
  styleUrls: ['./manage-jobs.component.css']
})
export class ManageJobsComponent implements OnInit {
  constructor(private router: Router, private empSer: EmployerService) { }
  jobs: Array<JobInterface> = [];
  appliedJobs: Array<ApplyJobInterface> = [];
  getApplied: Array<ApplyJobInterface> = [];
  countApplyJobs = 0;
  jobPosted = 0;
  jobApplications = [];
  ngOnInit() {
    localStorage.setItem('jobSingleId', null);
    this.getJobs();
    this.getAppliedJobs();
    this.getApplications();
  }
  empJobSingle(index: number) {
    localStorage.setItem('jobSingleId', JSON.stringify(this.jobs[index].uid));
    this.router.navigate(['/employer/home/job-single']);
  }
  getJobs() {
    this.empSer.getJobsForCompany().subscribe(res => {
      this.jobs = res;
      this.jobPosted = this.jobs.length;
      res.forEach((item, i)=> {
        this.empSer.getAppliedJobsById(item.jobId).subscribe(res1 => {
          this.getApplied = res1;
          this.jobApplications.push(this.getApplied.length);
          console.log(item);
        });
      });
    }, err => {
      console.log(err);
    });
  }

  getApplications() {
  }
  deleteJob(index: number) {
    const uid = this.jobs[index].uid;
    this.empSer.deleteJob(uid).subscribe(res => {
      this.jobs.splice(index, 1);
      swal.fire('Job Delete', 'Succesfully Deleted Job', 'success');
    }, err => {
      console.log(err);
    });
  }
  getAppliedJobs(){
    const users = JSON.parse(localStorage.getItem('user'));
    this.empSer.getAppliedJobs(users.uid).subscribe(res => {
      this.appliedJobs = res;
      this.countApplyJobs = this.appliedJobs.length;
    }, err => {
      console.log(err);
    });
  }
}
