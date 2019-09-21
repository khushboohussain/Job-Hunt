import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { UserInterface } from 'src/app/interfaces/user.interface';
import { NgFlashMessageService } from 'ng-flash-messages';
import { NgxSpinnerModule, NgxSpinnerService } from 'ngx-spinner';
import swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  disableButton = false;
  registerForm: FormGroup;
  userObj = {} as UserInterface;
  userTypeStatus = true;
  signUpStatus = false;
  constructor(private authService: AuthenticationService,
    private fb: FormBuilder,
    private ngFlashMessageService: NgFlashMessageService,
    private spinner: NgxSpinnerService,
    private router: Router) {
    this.registerForm = fb.group({
      email: [null, Validators.compose([Validators.required, Validators.pattern(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)])],
      password: [null, Validators.compose([Validators.required])],
      name: [null, Validators.compose([Validators.required, Validators.pattern(/^[a-zA-Z \'\-]+$/)])]
    });
  }
  ngOnInit() {
    console.log(this.userTypeStatus);
  }
  registerUser(data: FormData) {
    if (this.registerForm.valid && !this.userTypeStatus) {
      this.spinner.show();
      this.disableButton = true;
      this.authService.register(this.userObj, data['email'], data['password']).then(status => {
        this.signUpStatus = true;
        swal.fire('Email Verification', 'Email yet to be verifed. Please check your email', 'success');
        this.router.navigate(['/']);
        this.spinner.hide();
        this.ngFlashMessageService.showFlashMessage({
            messages: ['Email yet to be verifed. Please check your email'],
            dismissible: true,
            timeout: 5000,
            type: 'success'
          });
      });
    }
  }
  selectUser(usertype) {
    this.userTypeStatus = false;
    this.userObj.userType = usertype;
  }
}
