import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { NgFlashMessageService } from 'ng-flash-messages';
import { NgxSpinnerModule, NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  encapsulation: ViewEncapsulation.None
})
export class LoginComponent implements OnInit {
  loginform: FormGroup;
  userTypeStatus = true;
  userType = '';
  loginError = false;
  constructor(
    private authService: AuthenticationService, private fb: FormBuilder, public router: Router,
    private ngFlashMessageService: NgFlashMessageService, private spinner: NgxSpinnerService) {
    this.loginform = fb.group({
      email: [null, Validators.compose([Validators.required, Validators.pattern(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)])],
      password: [null, Validators.compose([Validators.required])]
    });
  }
  ngOnInit() {
  }
  selectUser(userType: string) {
    this.userType = userType;
    this.userTypeStatus = false;
  }
  loginUser(data: FormData) {
    if (this.loginform.valid && !this.userTypeStatus) {
      this.spinner.show();
      this.authService.login(data['email'], data['password']).then(user => {
        this.authService.enablePersistence();
        console.log('i have called login service method');
        this.authService.getUserData(user.uid).subscribe(us => {
          console.log('i have getuserdata service method');
          this.authService.setUserData(us[0]);
          // localStorage.setItem('userData', us[0]);
          if (this.userType === us[0].userType) {
            this.ngFlashMessageService.showFlashMessage({
              messages: ['You have been successfuly logged in'],
              dismissible: true,
              timeout: 5000,
              type: 'success'
            });
            if (us[0].userType === 'candidate') {
              this.router.navigate(['/candidate/dashboard']);
            } else {
              this.router.navigate(['/employer/dashboard']);
            }
          } else {
            this.loginError = true;
            this.ngFlashMessageService.showFlashMessage({
              messages: ['Invalid Credentials Provided'],
              dismissible: true,
              timeout: 5000,
              type: 'danger'
            });
          }
          this.spinner.hide();
        });
      });
    }
  }
}
