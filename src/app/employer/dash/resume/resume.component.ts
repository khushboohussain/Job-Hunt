import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserInterface } from 'src/app/interfaces/user.interface';
import { UserProfileInterface } from 'src/app/interfaces/user-profile.interface';
import { ApplyJobInterface } from 'src/app/interfaces/apply-job.interface';
import { CandidateService } from './../../../services/candidate.service';
import { EmployerService } from 'src/app/services/employer.service';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent implements OnInit {
  //user = localStorage.getItem('users');
  // users: Array<UserInterface> = [];
  appliedJobs: Array<ApplyJobInterface> = [];
  usersProfiles: Array<UserProfileInterface> = [];
  user = {} as UserProfileInterface;
  constructor(private router: Router, private empSer: EmployerService, private canSer: CandidateService) { }
  userData = [];

  ngOnInit() {
    //getProfileById
    const users = JSON.parse(localStorage.getItem('user'));
    this.empSer.getAppliedJobs(users.uid)
    .subscribe(res => {
      this.appliedJobs = res;
      this.appliedJobs.forEach((item)=>{
        this.canSer.getProfileById(item.candidateId).subscribe(res1 => {
          this.user = res1;
          this.usersProfiles.push(this.user);
        });
      });
      console.log(this.usersProfiles);
    });
  }
  empCanSin(canId) {
    localStorage.setItem('canSingle', canId);
    this.router.navigate(['/employer/dashboard/candidate-single']);
  }

  downloadCv(userId) {
    localStorage.setItem('canSingle', userId);
    this.router.navigate(['/candidate/download-cv']);
  }
}
