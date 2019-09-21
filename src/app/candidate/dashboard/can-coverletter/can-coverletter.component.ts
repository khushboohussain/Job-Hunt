import { CandidateService } from 'src/app/services/candidate.service';
import { Component, OnInit } from '@angular/core';
import { UserCoverLetterInterface } from 'src/app/interfaces/user-coverletter.interface';
import { Router } from '@angular/router';
import { UserResumeInterface } from 'src/app/interfaces/user-resume.interface';

@Component({
  selector: 'app-can-coverletter',
  templateUrl: './can-coverletter.component.html',
  styleUrls: ['./can-coverletter.component.css']
})
export class CanCoverletterComponent implements OnInit {
  username = JSON.parse(localStorage.getItem('userData')).name;
  count = 0;
  constructor(private router: Router, private canSer: CandidateService) {
  }

  ngOnInit() {
    this.getResumes();
    //this.getCoverLetter();
  }
  userCv: Array<UserResumeInterface> = [];
  userCovers: Array<UserCoverLetterInterface> = [];
  userCover = {} as UserResumeInterface;
  // userCover = [] as UserCoverLetterInterface;
  selectedOption: string;

  getResumes(){
    this.canSer.getResumes().subscribe(res => {
      this.userCv = res;
      console.log(this.userCovers);
    }, err => {
      console.log(err);
    });

  }

  getCoverLetter() {
    this.canSer.getResumes().subscribe(res => {
      this.userCv = res;
      console.log(this.userCovers);
    }, err => {
      console.log(err);
    });
  }

  onCVChanged(event): void{
    this.count++;
    const newVal = event.target.value;
    this.canSer.getCoverLetter().subscribe(res => {
      this.userCover = res;
    }, err => {
      console.log(err);
    });
  }

  coverLetterSubmit(event) {
    const newVal = event.target.value;
    this.userCover.cvId = newVal;
    this.canSer.addCover(this.userCover).subscribe(res => {
      this.userCover = res;
      console.dir(res);
    }, err => {
      console.log(err);
    });
  }

}
