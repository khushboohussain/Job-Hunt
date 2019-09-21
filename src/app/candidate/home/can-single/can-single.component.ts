import { Component, OnInit } from '@angular/core';
import { UserProfileInterface } from 'src/app/interfaces/user-profile.interface';
import { CandidateService } from 'src/app/services/candidate.service';
import { UserSkillInterface } from 'src/app/interfaces/user-skill.interface';
import { UserEducationInterface } from 'src/app/interfaces/user-education.interface';
import { WorkExperienceInterface } from 'src/app/interfaces/user-workexperience.interface';
import { UserProfileAwards } from 'src/app/interfaces/user-awards.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-can-single',
  templateUrl: './can-single.component.html',
  styleUrls: ['./can-single.component.css']
})
export class CanSingleComponent implements OnInit {

  canId = localStorage.getItem('canSingle');
  userProfile = {} as UserProfileInterface;
  userSkills: Array<UserSkillInterface> = [];
  userEducation: Array<UserEducationInterface> = [];
  userWork: Array<WorkExperienceInterface> = [];
  userAwards: Array<UserProfileAwards> = [];
  constructor(private canSer: CandidateService, private router: Router) { }
  ngOnInit() {
    this.getProfile();
    this.getSkills();
    this.getEducation();
    this.getWork();
    this.getAwards();
  }
  getProfile() {
    console.log(this.canId);
    this.canSer.getProfileById(this.canId).subscribe(res => {
      this.userProfile = res;
    }, err => {
    });
  }
  getSkills() {
    this.canSer.getSkillsById(this.canId).subscribe(res => {
      this.userSkills = res;
    }, err => {
      console.log(err);
    });
  }
  getEducation() {
    this.canSer.getEducationById(this.canId).subscribe(res => {
      this.userEducation = res;
    }, err => {
      console.log(err);
    });
  }
  getWork() {
    this.canSer.getWorkById(this.canId).subscribe(res => {
      this.userWork = res;
    }, err => {
      console.log(err);
    });
  }
  getAwards() {
    this.canSer.getAwardsById(this.canId).subscribe(res => {
      this.userAwards = res;
    }, err => {
      console.log(err);
    });
  }
  downloadCv(userId) {
    localStorage.setItem('canSingle', userId);
    this.router.navigate(['/candidate/download-cv']);
  }

}
