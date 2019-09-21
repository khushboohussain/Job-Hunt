import { Component, OnInit } from '@angular/core';
import { EmployerService } from 'src/app/services/employer.service';
import { JobInterface } from 'src/app/interfaces/job.interface';
import { identifierModuleUrl } from '@angular/compiler';
import { ApplyJobInterface } from 'src/app/interfaces/apply-job.interface';
import { CandidateService } from 'src/app/services/candidate.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-can-job-single',
  templateUrl: './can-job-single.component.html',
  styleUrls: ['./can-job-single.component.css']
})
export class CanJobSingleComponent implements OnInit {
  constructor(private empSer: EmployerService, private canSer: CandidateService) { }
  jobID:string;
  jobSingle = {} as JobInterface;
  applyJobObj = {} as ApplyJobInterface;
  user = JSON.parse(localStorage.getItem('user'));
  ngOnInit() {
    this.jobID = localStorage.getItem('jobSingleId');
    this.canSer.getJobById(this.jobID).subscribe(res => {
      this.jobSingle = res;
    }, err => {
      console.log(err);
    });
  }
  applyJob() {
    const date = new Date();
    this.applyJobObj.job_title = this.jobSingle.job_title;
    this.applyJobObj.job_type = this.jobSingle.job_type;
    this.applyJobObj.address = this.jobSingle.address;
    this.applyJobObj.applied_date = date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate();
    this.applyJobObj.jobId = this.jobID;
    this.applyJobObj.empId = this.jobSingle.userId;
    this.applyJobObj.candidateId = this.user.uid;
    this.canSer.applyJob(this.applyJobObj).subscribe( res => {
      const data  = JSON.parse(JSON.stringify(res));
      if (data.success) {
        swal.fire('Success', data.message, 'success');
      } else {
        swal.fire('Failure', data.message, 'error');
      }
    }, err => {
        console.log(err);
    });
  }
  shortlistJob() {
    const date = new Date();
    this.applyJobObj.job_title = this.jobSingle.job_title;
    this.applyJobObj.job_type = this.jobSingle.job_type;
    this.applyJobObj.address = this.jobSingle.address;
    this.applyJobObj.applied_date = date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate();
    this.applyJobObj.jobId = this.jobID;
    this.applyJobObj.empId = this.jobSingle.userId;
    this.applyJobObj.candidateId = this.user.uid;
    this.canSer.shortlistJob(this.applyJobObj).subscribe( res => {
      const data  = JSON.parse(JSON.stringify(res));
      if (data.success) {
        swal.fire('Success', data.message, 'success');
      } else {
        swal.fire('Failure', data.message, 'error');
      }
    }, err => {
        console.log(err);
    });
  }
}
