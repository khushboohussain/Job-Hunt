import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { CandidateService } from 'src/app/services/candidate.service';

@Component({
  selector: 'app-nav-candash',
  templateUrl: './nav-candash.component.html',
  styleUrls: ['./nav-candash.component.css']
})
export class NavCandashComponent implements OnInit {
  username = JSON.parse(localStorage.getItem('userData')).name;
  userCheck = JSON.parse(localStorage.getItem('user'));
  photourl = '';
  constructor(private auth: AuthenticationService, private canSer: CandidateService) { }

  ngOnInit() {
    this.getProfile();
    if (!this.userCheck.emailVerified) {
      this.username = this.username + '(Not Verified)';
    }
  }
  signOut() {
    this.auth.logout();
  }
  getProfile() {
    this.canSer.getUserProfileData().subscribe((res:any) => {
      console.log(res);
      try{
        if(res.photo_url)
        this.photourl = res.photo_url;
      }
      catch (e){}
    }, err => {
      console.log(err);
    });
  }
}
