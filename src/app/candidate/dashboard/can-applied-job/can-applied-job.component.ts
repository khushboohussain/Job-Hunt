import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApplyJobInterface } from 'src/app/interfaces/apply-job.interface';
import { CandidateService } from 'src/app/services/candidate.service';
import { NgFlashMessageService } from 'ng-flash-messages';
import swal from 'sweetalert2';
@Component({
  selector: 'app-can-applied-job',
  templateUrl: './can-applied-job.component.html',
  styleUrls: ['./can-applied-job.component.css']
})
export class CanAppliedJobComponent implements OnInit {
  username = JSON.parse(localStorage.getItem('userData')).name;
  appliedJobs: Array<ApplyJobInterface> = [];
  constructor(private router: Router, private canSer: CandidateService, private ngFlashMessageService: NgFlashMessageService) { }

  ngOnInit() {
    this.getAppliedJobs();
  }

  getAppliedJobs() {
   this.canSer.getAppliedJobs().subscribe(res => {
    this.appliedJobs = res;
   }, err => {
     console.log(err);
   });
  }

  canJobSingle(index: number) {
    const uid = this.appliedJobs[index].jobId;
    localStorage.setItem('jobSingleId', uid);
    this.router.navigate(['/candidate/home/job-single']);
  }

  deleteJob(index: number) {
    this.canSer.deleteAppliedJob(this.appliedJobs[index].candidateId, this.appliedJobs[index].jobId).subscribe(res => {
      swal.fire('Deleted', 'Successfully deleted', 'success');
      this.ngFlashMessageService.showFlashMessage({
        messages: ["Job has been successfuly deleted"],
        dismissible: true,
        timeout: 5000,
        type: 'success'
      });
    }, err => {
      console.log(err);
    });
  }
}
