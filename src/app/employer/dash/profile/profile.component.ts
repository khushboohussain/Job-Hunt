import { Component, OnInit, ViewChild } from '@angular/core';
import { EmployerProfileInterface } from 'src/app/interfaces/employer-profile.interface';
import { EmployerService } from 'src/app/services/employer.service';
import { AngularFireStorage, AngularFireStorageReference, AngularFireUploadTask } from '@angular/fire/storage';
import { finalize } from 'rxjs/operators';
import swal from 'sweetalert2';
import { Address } from 'angular-google-place';
import { NgxSpinnerModule, NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  userProfile = {} as EmployerProfileInterface;
  task: AngularFireUploadTask;
  userName = JSON.parse(localStorage.getItem('userData')).name;
  uploadCheck = false;
  companyName='';
  constructor(private empSer: EmployerService, private afStorage: AngularFireStorage, private spinner: NgxSpinnerService) { }
  ref: AngularFireStorageReference;
  formFile: File;
  ngOnInit() {
    this.getProfile();
  }

  getAddress(place: Address) {
    console.log('Address', place);
  }
  getFormattedAddress(event: any) {
      console.log(event);
      this.userProfile.city = event.city;
      this.userProfile.country = event.country;
      this.userProfile.lat = event.lat;
      this.userProfile.lon = event.lng;
  }

  profileSubmit() {
    const userData = JSON.parse(localStorage.getItem('user'));
    this.userProfile.userId = userData.uid;
    this.userProfile.fullname = this.companyName;
    // this.userProfile.fullname = this.userName;
    if (this.userProfile.photo_url && this.uploadCheck) {
        console.log('photo exists');
        this.afStorage.storage.refFromURL(this.userProfile.photo_url).delete();
    }
    if (this.uploadCheck) {
      console.log('photo doesnt exist and uploading image');
      const id = Math.random().toString(36).substring(2);
      this.ref = this.afStorage.ref(id);
      const task = this.afStorage.upload(id, this.formFile);
      task.snapshotChanges().pipe(
        finalize(() => {
          const downloadURL = this.ref.getDownloadURL();
          downloadURL.subscribe(url => {
            this.userProfile.photo_url = url;
            console.log(this.userProfile);
            this.empSer.saveEmpProfile(this.userProfile).subscribe(res => {
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
          });
        })
      ).subscribe();
    } else {
      console.log('hello');
      this.empSer.saveEmpProfile(this.userProfile).subscribe(res => {
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
  onFileSelected(event) {
    this.formFile = event.target.files[0];
    this.uploadCheck = true;
  }
  getProfile() {
    this.empSer.getEmpProfile().subscribe(res => {
      console.log(res);
      if (res.length > 0) {
        this.userProfile = res[0];
        this.companyName = this.userProfile.fullname;
      }
      console.log(this.userProfile.country);
    });
  }
  contactSubmit() {
    const userData = JSON.parse(localStorage.getItem('user'));
    this.userProfile.userId = userData.uid;
    this.userProfile.fullname = this.userName;
    this.empSer.saveEmpProfile(this.userProfile).subscribe(res => {
      this.userProfile = res;
      this.uploadCheck = false;
      console.log(res);
      this.spinner.show();
      setTimeout(() => {
        swal.fire('Contact Form', 'Succesfully Updated Data', 'success');
        this.spinner.hide();
      }, 2000);

    }, err => {
      console.log(err);
    });
  }
}
