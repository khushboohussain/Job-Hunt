import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApplyJobInterface } from 'src/app/interfaces/apply-job.interface';
import { CandidateService } from 'src/app/services/candidate.service';
import swal from 'sweetalert2';
@Component({
  selector: 'app-can-shortlist',
  templateUrl: './can-shortlist.component.html',
  styleUrls: ['./can-shortlist.component.css']
})
export class CanShortlistComponent implements OnInit {
  username = JSON.parse(localStorage.getItem('userData')).name;
  shortListedJob: Array<ApplyJobInterface> = [];
  constructor(private router: Router, private canSer: CandidateService) { }

  ngOnInit() {
    this.getShortListedJobs();
  }
  getShortListedJobs() {
   this.canSer.getShortlistedJobs().subscribe(res => {
    this.shortListedJob = res;
   }, err => {
     console.log(err);
   });
  }
  canJobSingle(index: number) {
    const uid = this.shortListedJob[index].jobId;
    localStorage.setItem('jobSingleId', uid);
    this.router.navigate(['/candidate/home/job-single']);
  }
  deleteShort(index: number) {
    this.canSer.deleteShortlistedJob(this.shortListedJob[index].candidateId, this.shortListedJob[index].jobId).subscribe(res => {
      swal.fire('Deleted', 'Successfully deleted', 'success');
    }, err => {
      console.log(err);
    });
  }
}
