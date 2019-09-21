import { Component, OnInit } from '@angular/core';
import { JobInterface } from 'src/app/interfaces/job.interface';
import { EmployerService } from 'src/app/services/employer.service';
import swal from 'sweetalert2';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { stringify } from '@angular/core/src/render3/util';
import { Address } from 'angular-google-place';
import { NgxSpinnerModule, NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-post-new',
  templateUrl: './post-new.component.html',
  styleUrls: ['./post-new.component.css']
})
export class PostNewComponent implements OnInit {
  skills: Array<string> = [];
  jobForm: FormGroup;
  constructor(private empSer: EmployerService, private fb: FormBuilder, private spinner: NgxSpinnerService) {
    // this.jobForm = fb.group({
    //   job_title: [null, Validators.compose([Validators.required, Validators.pattern(/^[a-zA-Z \'\-]+$/)])],
    //   address: [null, Validators.compose([Validators.required, Validators.pattern(/^[a-zA-Z \'\-]+$/)])],
    //   lat: [null, Validators.compose([Validators.required])],
    //   lon: [null, Validators.compose([Validators.required])]
    // });
   }
  postJob = {} as JobInterface;
  ngOnInit() {
  }

  getAddress(place: Address) {
    console.log('Address', place);
  }
  getFormattedAddress(event: any) {
      console.log(event);
      this.postJob.city = event.city;
      this.postJob.country = event.country;
      this.postJob.lat = event.lat;
      this.postJob.lon = event.lng;
  }
  addSkill(event) {
    console.log(event);
    this.skills.push(event);
    event = '';
  }
  skillRemove(index) {
    this.skills.splice(index, 1);
  }
  submitJob() {
    const user = JSON.parse(localStorage.getItem('user'));
    this.postJob.userId = user.uid;
    this.postJob.skills = this.skills;
    this.postJob.status = 'Active';
    let date = new Date();
    this.postJob.created_date = date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate();
    this.postJob.dead_line = date.getFullYear() + '-' + (date.getMonth()+2) + '-' + date.getDate();;
    console.log(this.postJob);
    this.empSer.addJob(this.postJob).subscribe(res => {
      this.postJob = {} as JobInterface;
      this.skills = [];
      this.spinner.show();
      setTimeout(() => {
        swal.fire('Post a Job', 'Succesfully Posted', 'success');
        this.spinner.hide();
      }, 2000);

    }, err => {
      console.log(err);
    });
  }
}
