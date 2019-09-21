import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { UserProfileInterface } from 'src/app/interfaces/user-profile.interface';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { CandidateService } from 'src/app/services/candidate.service';
import { AngularFireStorage, AngularFireStorageReference, AngularFireUploadTask } from '@angular/fire/storage';
import { finalize } from 'rxjs/operators';
import { NgFlashMessageService } from 'ng-flash-messages';
import swal from 'sweetalert2';
import { Address } from 'angular-google-place';
import { NgxSpinnerModule, NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-can-profile',
  templateUrl: './can-profile.component.html',
  styleUrls: ['./can-profile.component.css']
})
export class CanProfileComponent implements OnInit {

  profileForm: FormGroup;
  formFile: File;
  task: AngularFireUploadTask;
  uploadCheck = false;
  ref: AngularFireStorageReference;
  username = JSON.parse(localStorage.getItem('userData')).name;
  userProfile = {} as UserProfileInterface;

  constructor(private fb: FormBuilder, private auth: CandidateService, private afStorage: AngularFireStorage,
    private ngFlashMessageService: NgFlashMessageService, private http: HttpClient, private spinner: NgxSpinnerService) {
    const userData = JSON.parse(localStorage.getItem('userData'));
    this.profileForm = fb.group({
      fullname: new FormControl({value: userData.name, disabled: true}, Validators.required),
      userId: [null, Validators.compose([Validators.required])],
      job_title: [null, Validators.compose([Validators.required, Validators.pattern(/^[a-zA-Z \'\-]+$/)])],
      experience: [null, Validators.compose([Validators.required])],
      age: [null, Validators.compose([Validators.required])],
      current_sal_min: [null, Validators.compose([Validators.pattern(/^[0-9 \'\-]+$/)])],
      current_sal_max: [null, Validators.compose([Validators.pattern(/^[0-9 \'\-]+$/)])],
      expected_sal_min: [null, Validators.compose([Validators.required, Validators.pattern(/^[0-9 \'\-]+$/)])],
      expected_sal_max: [null, Validators.compose([Validators.required, Validators.pattern(/^[0-9 \'\-]+$/)])],
      education_levels: [null, Validators.compose([Validators.required])],
      categories: [null, Validators.compose([Validators.required])],
      description: [null, Validators.compose([Validators.required, Validators.pattern(/^[a-zA-Z0-9 \'\-]+$/)])]
    });
  }

  getAddress(place: Address) {
    console.log('Address', place);
  }
  getFormattedAddress(event: any) {
      console.log(event);
      this.userProfile.city = event.city;
      this.userProfile.country = event.country;
  }

  ngOnInit() {
    this.getUserData();
  }
  userProfileSubmit() {

    const users = JSON.parse(localStorage.getItem('user'));
    this.userProfile.userId = users.uid;
    this.userProfile.email = users.email;
    this.userProfile.fullname = this.username;
    if (this.userProfile.photo_url && this.uploadCheck) {
      console.log('photo exists');
      this.afStorage.storage.refFromURL(this.userProfile.photo_url).delete();
    }
    if (this.uploadCheck) {
      console.log('photo doesnt exist and uploading image');
      const id = Math.random().toString(36).substring(2);
      console.log(id);
      this.ref = this.afStorage.ref(id);
      const task = this.afStorage.upload(id, this.formFile);
      task.snapshotChanges().pipe(
        finalize(() => {
          const downloadURL = this.ref.getDownloadURL();
          downloadURL.subscribe(url => {
            this.userProfile.photo_url = url;
            this.auth.saveUserProfileData(this.userProfile).subscribe(res => {
              this.userProfile = res;
              this.uploadCheck = false;
              console.log(res);
              this.spinner.show();
              setTimeout(() => {
                swal.fire('Profile Form', 'Succesfully Updated Data', 'success');
                this.spinner.hide();
              }, 1000);

            }, err => {
              console.log(err);
            });
          });
        })
      ).subscribe();
    } else {
      console.log('hello');
      this.auth.saveUserProfileData(this.userProfile).subscribe(res => {
        this.userProfile = res;
        this.uploadCheck = false;
        console.log(res);
        this.spinner.show();
        setTimeout(() => {
          swal.fire('Profile Form', 'Succesfully Updated Data', 'success');
          this.spinner.hide();
        }, 2000);

      }, err => {
        console.log(err);
      });
    }
  }
  getUserData() {
    this.auth.getUserProfileData().subscribe(res => {
      if(res!= null)
        this.userProfile = res;
      console.log(this.userProfile);
    }, err => {
      console.log(err);
    });
  }
  onFileSelected(event) {
    console.log(event.target);
    this.formFile = event.target.files[0];
    this.uploadCheck = true;
    const fd = new FormData();
    // fd.append('image', this.formFile, this.formFile.name);
    // this.http.post('gs://test-db2bd.appspot.com')
    console.log('File is L ' + this.formFile.name);
  }
  submitContact() {
    const users = JSON.parse(localStorage.getItem('user'));
    this.userProfile.userId = users.uid;
    this.userProfile.fullname = this.username;
    this.userProfile.email = users.email;
    this.auth.saveUserProfileData(this.userProfile).subscribe(res => {
      this.userProfile = res;
      this.uploadCheck = false;
      console.log(res);
      this.spinner.show();
      setTimeout(() => {
        swal.fire('Profile Contact Form', 'Succesfully Updated Data', 'success');
        this.spinner.hide();
      }, 2000);

    }, err => {
      console.log(err);
    });
  }
}
