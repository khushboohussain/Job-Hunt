import { Component, OnInit } from '@angular/core';
import * as jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { Location } from '@angular/common';
import { CandidateService } from '../services/candidate.service';
@Component({
  selector: 'app-resume-generate',
  templateUrl: './resume-generate.component.html',
  styleUrls: [ './resume-generate.component.css' ]
})
export class ResumeGenerateComponent implements OnInit {
  userData = {
    education: [{
      education: '',
      start_year: '',
      end_year: '',
      institution_name: '',
      programme: '',
      description: '',
      userId: '',
      uid: ''
    }],
    workExp: [{
      position: '',
      company_name: '',
      start_year: '',
      end_year: '',
      description: '',
      userId: '',
      uid: ''
    }],
    skills: [{
      skillname: '',
      skillrate: '',
      userId: '',
      uid: ''
    }],
    awards: [{
      name: '',
      year: '',
      description: '',
      userId: '',
      uid: ''
    }],
    profile: {
      fullname: '',
      userId: '',
      job_title: '',
      experience: '',
      age: '',
      current_sal_min: 0,
      current_sal_max: 0,
      expected_sal_min: 0,
      expected_sal_max: 0,
      education_levels: '',
      categories: '',
      description: ''
    }
  };
  // canId = JSON.parse(localStorage.getItem('canSingle'));
  canId = localStorage.getItem('canSingle');
  constructor(private loc: Location, private canSer: CandidateService) { }
  ngOnInit() {
    this.canSer.getEducationById(this.canId).subscribe(res => {
      this.userData.education = res;
      this.canSer.getWorkById(this.canId).subscribe(res1 => {
        this.userData.workExp = res1;
        this.canSer.getSkillsById(this.canId).subscribe(res2 => {
          this.userData.skills = res2;
          this.canSer.getAwardsById(this.canId).subscribe(res3 => {
            this.userData.awards = res3;
            this.canSer.getProfileById(this.canId).subscribe(res4 => {
              this.userData.profile = res4;
              console.log(this.userData.skills[0].skillname);
            }, err => {
              console.log(err);
            });
          }, err => {
            console.log(err);
          });
        }, err3 => {
          console.log(err3);
        });
      }, err2 => {
        console.log(err2);
      });
    }, err4 => {
      console.log(err4);
    });
  }
  downloadPdf() {
    html2canvas(document.querySelector('#cv'), {scale: 2}).then(canvas => {
      const pdf = new jsPDF('p', 'pt', [canvas.width / 2, canvas.height / 2]);
      const imgData  = canvas.toDataURL('image/jpeg', 1.0);
      pdf.addImage(imgData, 0, 0, canvas.width / 2, canvas.height / 2);
      const name = 'hamza-cv';
      pdf.save(name + '.pdf');
    });
  }
  goBack() {
    this.loc.back();
  }
}
