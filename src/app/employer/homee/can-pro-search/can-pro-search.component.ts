import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { CandidateService } from 'src/app/services/candidate.service';
import { UserInterface } from 'src/app/interfaces/user.interface';
import { UserProfileInterface } from 'src/app/interfaces/user-profile.interface';

@Component({
  selector: 'app-can-pro-search',
  templateUrl: './can-pro-search.component.html',
  styleUrls: ['./can-pro-search.component.css']
})
export class CanProSearchComponent implements OnInit {
  keyword;
  getUser = {} as UserProfileInterface;
  users: Array<UserInterface> = [];
  usersProfiles: Array<UserProfileInterface> = [];
  displayProfile: Array<UserProfileInterface> = [];
  constructor(private canSer: CandidateService, private router: Router) { }
  userData = [];
  ngOnInit() {
    this.canSer.getUsers()
    .subscribe(res => {
      this.users = res;
      this.canSer.getUsersProfile()
      .subscribe(res1 => {
        this.usersProfiles = res1;
        var data = [];
        this.users.forEach(user => {
          const index = this.usersProfiles.findIndex((item, i) => {
            if (item.userId) {
              return item.userId === user.userId;
            }
          });
          console.log(index);
          if (index !== -1) {
            this.userData.push({userProfile: this.usersProfiles[index], userData: user});
            console.dir(this.userData);
          } else {
            const userPro = {} as UserProfileInterface;
            this.userData.push({userProfile: userPro, userData: user});
          }
        });
        this.searchQuery();
      }, err => {
        console.log(err);
      });
    }, err => {
      console.log(err);
    });
  }

  searchQuery(){
    const idd = localStorage.getItem("canProId");
    this.keyword = idd;
    const userr = [];
    this.userData.forEach((item, i)=> {
      console.log(item.userProfile.fullname);
      var re = new RegExp(idd, "gi");
      if (item.userProfile.fullname.match(re)) {
        userr.push(item.userProfile);
      }
    });
    this.displayProfile = userr;
    console.log(this.displayProfile);
  }

  moveSingleCan(id) {
    localStorage.setItem('canSingle', id);
    console.log(id);
    this.router.navigate(['/employer/home/can-pro-search']);
  }
}
