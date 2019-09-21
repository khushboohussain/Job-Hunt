import { ApplyJobInterface } from './../../../interfaces/apply-job.interface';
import { CandidateService } from 'src/app/services/candidate.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-can-candidate-dashboard',
  templateUrl: './can-candidate-dashboard.component.html',
  styleUrls: ['./can-candidate-dashboard.component.css']
})
export class CanCandidateDashboardComponent implements OnInit {
  username = JSON.parse(localStorage.getItem('userData')).name;
  appliedJobs: Array<ApplyJobInterface> = [];
  countApplied = 0;

  constructor(private canSer: CandidateService) { }
  ngOnInit() {
    this.getAppliedJobs();
  }

  getAppliedJobs(){
    const user = localStorage.getItem('user');
    this.canSer.getAppliedJobsByUser().subscribe(res => {
      this.appliedJobs = res;
      this.countApplied = this.appliedJobs.length;
      }, err => {
        console.log(err);
      });
  }

}
