import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CandidateService } from 'src/app/services/candidate.service';
import { UserProfileInterface } from 'src/app/interfaces/user-profile.interface';
import { UserInterface } from 'src/app/interfaces/user.interface';
import { Address } from 'angular-google-place';

@Component({
  selector: 'app-canditate-list',
  templateUrl: './canditate-list.component.html',
  styleUrls: ['./canditate-list.component.css']
})
export class CanditateListComponent implements OnInit {
  getUser = {} as UserProfileInterface;
  users: Array<UserInterface> = [];
  usersProfiles: Array<UserProfileInterface> = [];
  constructor(private canSer: CandidateService, private router: Router ) { }
  userData = [];
  ngOnInit() {
    localStorage.setItem('canSingle', null);
    this.canSer.getUsers()
    .subscribe(res => {
      this.users = res;
      console.log(this.users);
      this.canSer.getUsersProfile()
      .subscribe(res1 => {
        this.usersProfiles = res1;
        this.users.forEach(user => {
          const index = this.usersProfiles.findIndex((item, i) => {
            if (item.userId) {
              return item.userId === user.userId;
            }
          });
          if (index !== -1) {
            this.userData.push({userProfile: this.usersProfiles[index], userData: user});
          } else {
            const userPro = {} as UserProfileInterface;
            this.userData.push({userProfile: userPro, userData: user});
          }
        });
      }, err => {
        console.log(err);
      });
    }, err => {
      console.log(err);
    });
  }

  getAddress(place: Address) {
    console.log('Address', place);
  }
  getFormattedAddress(event: any) {
      console.log(event);
  }

  moveSingleCan(id) {
    localStorage.setItem('canSingle', id);
    this.router.navigate(['/employer/dashboard/candidate-single']);
  }

  searchCandidate() {
    localStorage.setItem('canProId', this.getUser.fullname);
    this.router.navigate(['/employer/home/can-pro-search']);
  }


}
