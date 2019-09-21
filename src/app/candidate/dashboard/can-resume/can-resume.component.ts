import { Component, OnInit } from '@angular/core';
import { trigger, transition, animate, style } from '@angular/animations';
import { UserEducationInterface } from 'src/app/interfaces/user-education.interface';
import { CandidateService } from 'src/app/services/candidate.service';
import { WorkExperienceInterface } from 'src/app/interfaces/user-workexperience.interface';
import { UserSkillInterface } from 'src/app/interfaces/user-skill.interface';
import { UserProfileAwards } from 'src/app/interfaces/user-awards.interface';
import { UserResumeInterface } from 'src/app/interfaces/user-resume.interface';
import { NgFlashMessageService } from 'ng-flash-messages';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import swal from 'sweetalert2';
import { NgxSpinnerModule, NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-can-resume',
  templateUrl: './can-resume.component.html',
  styleUrls: ['./can-resume.component.css'],
  animations: [
    trigger('slideInOut', [
      transition(':enter', [
        style({transform: 'translateY(-100%)'}),
        animate('700ms ease-in', style({transform: 'translateY(0%)'}))
      ]),
      transition(':leave', [
        animate('700ms ease-in', style({transform: 'translateY(-100%)'}))
      ])
    ])
  ]
})
export class CanResumeComponent implements OnInit {
  userRes = {} as UserResumeInterface;

  addEduCheck = false;
  addResCheck = false;
  editIndex = -1;
  userResume = {} as UserResumeInterface;
  userEducations: Array<UserEducationInterface> = [];
  userEdu = {} as UserEducationInterface;

  skillCheck = false;
  skillIndex = -1;
  userSkillArr: Array <UserSkillInterface> = [];
  userSkillObj = {} as UserSkillInterface;


  addWorkCheck = false;
  editWorkIndex = -1;
  userWorkExpArr: Array<WorkExperienceInterface> = [];
  userWorkExp = {} as WorkExperienceInterface;

  awardsCheck = false;
  awardsIndex = -1;
  awardsArr: Array<UserProfileAwards> = [];
  awardsObj = {} as UserProfileAwards;

  // educationForm: FormGroup;
  // workForm: FormGroup;
  // skillsForm: FormGroup;
  // awardForm: FormGroup;
  constructor(private fb: FormBuilder, private canSer: CandidateService, private router: Router, private ngFlashMessageService: NgFlashMessageService,
    private spinner: NgxSpinnerService) {
    // this.educationForm = fb.group({
    //   education: [null, Validators.compose([Validators.required, Validators.pattern(/^[a-zA-Z \'\-]+$/)])],
    //   start_year: [null, Validators.compose([Validators.required, Validators.pattern(/^[0-9 \'\-]+$/)])],
    //   end_year: [null, Validators.compose([Validators.required, Validators.pattern(/^[0-9 \'\-]+$/)])],
    //   institution_name: [null, Validators.compose([Validators.required, Validators.pattern(/^[a-zA-Z \'\-]+$/)])],
    //   programme: [null, Validators.compose([Validators.required, Validators.pattern(/^[a-zA-Z \'\-]+$/)])],
    // });
    // this.workForm = fb.group({
    //   position: [null, Validators.compose([Validators.required, Validators.pattern(/^[a-zA-Z \'\-]+$/)])],
    //   company_name: [null, Validators.compose([Validators.required, Validators.pattern(/^[a-zA-Z \'\-]+$/)])],
    //   start_year: [null, Validators.compose([Validators.required, Validators.pattern(/^[0-9 \'\-]+$/)])],
    //   end_year: [null, Validators.compose([Validators.required, Validators.pattern(/^[0-9 \'\-]+$/)])]
    // });
    // this.skillsForm = fb.group({
    //   position: [null, Validators.compose([Validators.required, Validators.pattern(/^[a-zA-Z \'\-]+$/)])]
    // });
    // this.awardForm = fb.group({
    //   name: [null, Validators.compose([Validators.required, Validators.pattern(/^[a-zA-Z \'\-]+$/)])],
    //   year: [null, Validators.compose([Validators.required, Validators.pattern(/^[0-9 \'\-]+$/)])],
    // });
  }
  ngOnInit() {
    this.getUserEdu();
    this.getWorkExp();
    this.getSkills();
    this.getAwards();
    this.getResume();
  }

  // Resume

  addRes() {
    this.addResCheck = !this.addResCheck;
    this.userRes = {} as UserResumeInterface;
  }
  reumeNameSubmit(){
    console.log('Hello i am clicked');
    this.addResumeName();
  }

  addResumeName(){
    const userData = JSON.parse(localStorage.getItem('user'));
    this.userRes.userId = userData.uid;
    this.canSer.addResumeName(this.userRes).subscribe(res => {
      this.userRes = res;
    }, err => {
      console.log(err);
    });
  }

  awardbtn() {
    this.awardsCheck = !this.awardsCheck;
    this.awardsObj = {} as UserProfileAwards;
  }
  skillbtn() {
    this.skillCheck = !this.skillCheck;
    this.userSkillObj = {} as UserSkillInterface;
  }

  getResume() {
    this.canSer.getCoverLetter().subscribe(res => {
      this.userResume = res;
      console.log('User resume is ' + this.userResume);
    }, err => {
      console.log(err);
    });
  }

  resumeSubmit(){
    const userData = JSON.parse(localStorage.getItem('user'));
    this.canSer.addCover(this.userResume).subscribe(res => {
      this.spinner.show();
      setTimeout(() => {
        swal.fire('Cover Letter', 'Succesfully Updated Data', 'success');
        this.spinner.hide();
      }, 2000);

    }, err => {
      swal.fire('Cover Letter', 'Data Not Updated', 'warning');
      this.spinner.hide();
      console.log(err);
    });
  }

  addEdu() {
    this.addEduCheck = !this.addEduCheck;
    this.userEdu = {} as UserEducationInterface;
  }
  getSkills() {
    this.canSer.getSkills().subscribe(res => {
      this.userSkillArr = res;
    }, err => {
      console.log(err);
    });
  }
  getUserEdu() {
    this.canSer.getCandidateEducation().subscribe(res => {
      this.userEducations = res;
      console.log('User educations are' + this.userEducations);
    }, err => {
      console.log(err);
    });
  }
  getWorkExp() {
    this.canSer.getCandidateWorkExperience().subscribe(res => {
      this.userWorkExpArr = res;
    }, err => {
      console.log(err);
    });
  }
  getAwards() {
    this.canSer.getCandidateAwards().subscribe(res => {
      this.awardsArr = res;
    }, err => {
      console.log(err);
    });
  }
  editSkillbtn(index: number) {
    this.skillIndex = index;
    this.userSkillObj = { ...this.userSkillArr[index] };
    this.skillCheck = !this.skillCheck;
  }
  awardSubmit() {
    if (this.awardsIndex > -1) {
      this.editAwards();
    } else {
      this.addAward();
    }
  }
  addAward() {
    const userData = JSON.parse(localStorage.getItem('user'));
    this.awardsObj.userId = userData.uid;
    this.canSer.saveAward(this.awardsObj).subscribe(res => {
      this.awardsArr.push(res);
      this.awardsCheck = !this.awardsCheck;
      this.spinner.show();
      setTimeout(() => {
        swal.fire('Award Form', 'Succesfully Updated Data', 'success');
        this.spinner.hide();
      }, 2000);
    }, err => {
      swal.fire('Award Form', 'Data not updated', 'warning');
      console.log(err);
    });
  }
  editAwards() {
    const userData = JSON.parse(localStorage.getItem('user'));
    this.awardsObj.userId = userData.uid;
    this.canSer.updateAward(this.awardsObj).subscribe(res => {
      this.awardsArr[this.awardsIndex] = res;
      this.awardsIndex = -1;
      this.awardsCheck = !this.awardsCheck;
      this.spinner.show();
      setTimeout(() => {
        swal.fire('Award Form', 'Succesfully Updated Data', 'success');
        this.spinner.hide();
      }, 2000);
    }, err => {
      swal.fire('Award Form', 'Data not updated', 'warning');
      console.log(err);
    });
  }
  educationSubmit() {
    if (this.editIndex > -1) {
      this.editUserEdu();
    } else {
      this.saveUserEdu();
    }
  }
  experienceSubmit() {
    if (this.editWorkIndex > -1) {
      this.editUserExp();
    } else {
      this.saveUserExp();
    }
  }
  skillSubmit() {
    if (this.skillIndex > -1) {
      this.editSkill();
    } else {
      this.addSkill();
    }
  }
  addSkill() {
    const userData = JSON.parse(localStorage.getItem('user'));
    this.userSkillObj.userId = userData.uid;
    this.canSer.saveCandidateSkill(this.userSkillObj).subscribe(res => {
      this.userSkillArr.push(res);
      this.skillCheck = !this.skillCheck;
      this.spinner.show();
      setTimeout(() => {
        swal.fire('Skills Form', 'Succesfully Updated Data', 'success');
        this.spinner.hide();
      }, 2000);

    }, err => {
      swal.fire('Skills Form', 'Data Not Updated', 'warning');
      console.log(err);
    });
  }
  editSkill() {
    const userData = JSON.parse(localStorage.getItem('user'));
    this.userSkillObj.userId = userData.uid;
    this.canSer.updateCandidateSkill(this.userSkillObj).subscribe(res => {
      this.userSkillArr[this.skillIndex] = res;
      this.skillIndex = -1;
      this.skillCheck = !this.skillCheck;
      this.spinner.show();
      setTimeout(() => {
        swal.fire('Skills Form', 'Succesfully Updated Data', 'success');
        this.spinner.hide();
      }, 2000);

    }, err => {
      swal.fire('Skills Form', 'Data Not Updated', 'warning');
      console.log(err);
    });
  }
  saveUserEdu() {
    const userData = JSON.parse(localStorage.getItem('user'));
    this.userEdu.userId = userData.uid;
    this.canSer.saveCandidateEducation(this.userEdu).subscribe(res => {
      this.userEducations.push(res);
      this.addEduCheck = !this.addEduCheck;
      this.spinner.show();
      setTimeout(() => {
        swal.fire('Education Form', 'Succesfully Updated Data', 'success');
        this.spinner.hide();
      }, 2000);

    }, err => {
      swal.fire('Education Form', 'Data Not Updated', 'warning');
      console.log(err);
    });
  }
  saveUserExp() {
    const userData = JSON.parse(localStorage.getItem('user'));
    this.userWorkExp.userId = userData.uid;
    this.canSer.saveCandidateWorkExp(this.userWorkExp).subscribe(res => {
      this.userWorkExpArr.push(res);
      this.addWorkCheck = !this.addWorkCheck;
      this.spinner.show();
      setTimeout(() => {
        swal.fire('Education Form', 'Succesfully Updated Data', 'success');
        this.spinner.hide();
      }, 2000);
    }, err => {
      swal.fire('Experience Form', 'Data Not Updated', 'warning');
      console.log(err);
    });
  }
  editUserEdu() {
    const userData = JSON.parse(localStorage.getItem('user'));
    this.userEdu.userId = userData.uid;
    this.canSer.updateCandidateEducation(this.userEdu).subscribe(res => {
      this.userEducations[this.editIndex] = res;
      this.editIndex = -1;
      this.addEduCheck = !this.addEduCheck;
      this.spinner.show();
      setTimeout(() => {
        swal.fire('Education Form', 'Succesfully Updated Data', 'success');
        this.spinner.hide();
      }, 2000);
    }, err => {
      swal.fire('Education Form', 'Data not updated', 'warning');
      console.log(err);
    });
  }
  editUserExp() {
    const userData = JSON.parse(localStorage.getItem('user'));
    this.userWorkExp.userId = userData.uid;
    this.canSer.updateCandidateWorkExp(this.userWorkExp).subscribe(res => {
      this.userWorkExpArr[this.editWorkIndex] = res;
      this.editWorkIndex = -1;
      this.addWorkCheck = !this.addWorkCheck;
      this.spinner.show();
      setTimeout(() => {
        swal.fire('Experience Form', 'Succesfully Updated Data', 'success');
        this.spinner.hide();
      }, 2000);

    }, err => {
      swal.fire('Experience Form', 'Data not updated', 'warning');
      console.log(err);
    });
  }
  editEducation(index: number) {
    this.editIndex = index;
    this.userEdu = { ...this.userEducations[index] };
    this.addEduCheck = !this.addEduCheck;
  }
  editWorkExp(index: number) {
    this.editWorkIndex = index;
    this.userWorkExp = { ...this.userWorkExpArr[index] };
    this.addWorkCheck = !this.addWorkCheck;
  }
  addWork() {
    this.addWorkCheck = !this.addWorkCheck;
    this.userWorkExp = {} as WorkExperienceInterface;
  }
  editAwardBtn(index: number) {
    this.awardsIndex = index;
    this.awardsObj = { ...this.awardsArr[index] };
    this.awardsCheck = !this.awardsCheck;
  }
  deleteEducation(i: number) {
    const uid = this.userEducations[i].uid;
    this.canSer.deleteEducation(uid).subscribe(res => {
      this.userEducations.splice(i, 1);
    }, err => {
      console.log(err);
    });
  }
  deleteWorkExp(i: number) {
    const uid = this.userWorkExpArr[i].uid;
    this.canSer.deleteWorkExp(uid).subscribe(res => {
      this.userWorkExpArr.splice(i, 1);
    }, err => {
      console.log(err);
    });
  }
  deleteSkill(i: number) {
    const uid = this.userSkillArr[i].uid;
    this.canSer.deleteSkill(uid).subscribe(res => {
      this.userSkillArr.splice(i, 1);
    }, err => {
      console.log(err);
    });
  }
  deleteAward(i: number) {
    const uid = this.awardsArr[i].uid;
    this.canSer.deleteAward(uid).subscribe(res => {
      this.awardsArr.splice(i, 1);
    }, err => {
      console.log(err);
    });
  }
  downloadCv() {
    const userID = JSON.parse(localStorage.getItem('userData')).userId;
    this.router.navigate(['/candidate/download-cv']);
    localStorage.setItem('canSingle', JSON.stringify(userID));
  }
}
