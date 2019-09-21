import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { CandidateService } from 'src/app/services/candidate.service';
import { UserInterface } from 'src/app/interfaces/user.interface';
import { UserProfileInterface } from 'src/app/interfaces/user-profile.interface';
import { Address } from 'angular-google-place';

@Component({
  selector: 'app-can-list',
  templateUrl: './can-list.component.html',
  styleUrls: ['./can-list.component.css']
})
export class CanListComponent implements OnInit {
  getUser = {} as UserProfileInterface;
  users: Array<UserInterface> = [];
  usersProfiles: Array<UserProfileInterface> = [];
  constructor(private canSer: CandidateService, private router: Router ) { }
  userData = [];
  ngOnInit() {
    this.canSer.getUsers()
    .subscribe(res => {
      this.users = res;
      this.canSer.getUsersProfile()
      .subscribe(res1 => {
        this.usersProfiles = res1;
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
    console.log(id);
    this.router.navigate(['/candidate/home/candidate-single']);
  }

  searchCandidate() {
    localStorage.setItem('canProId', this.getUser.fullname);
    this.router.navigate(['/candidate/home/can-profile-search']);
  }
}
