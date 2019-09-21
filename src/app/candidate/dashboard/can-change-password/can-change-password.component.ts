import { Component, OnInit } from '@angular/core';
import { ChangePasswordInterface } from 'src/app/interfaces/change-password.interface';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { NgFlashMessageService } from 'ng-flash-messages';
import swal from 'sweetalert2';
import { NgxSpinnerModule, NgxSpinnerService } from "ngx-spinner";
@Component({
  selector: 'app-can-change-password',
  templateUrl: './can-change-password.component.html',
  styleUrls: ['./can-change-password.component.css']
})
export class CanChangePasswordComponent implements OnInit {
  errorMessage = '';
  username = JSON.parse(localStorage.getItem('userData')).name;
  errorStatus = false;
  changePassword = {} as ChangePasswordInterface;
  constructor(private auth: AuthenticationService, private ngFlashMessageService: NgFlashMessageService,
    private spinner: NgxSpinnerService) { }

  ngOnInit() {
  }
  submitForm() {
    console.log(this.changePassword);
    this.auth.changePassword(this.changePassword).then(response => {
      this.errorMessage = response.message;
      this.errorStatus = response.error;
      if (!response.error) {
        this.spinner.show();
        setTimeout(() => {
          swal.fire('Change Password', 'Succesful. Please Login Again', 'success');
          this.spinner.hide();
        }, 2000);

        this.auth.logout();
      }
    });
  }
}
