import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import {catchError, map} from 'rxjs/operators';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable, throwError } from 'rxjs';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import { UserInterface } from '../interfaces/user.interface';
import { ChangePasswordInterface } from '../interfaces/change-password.interface';
import { User } from 'firebase';
import * as firebase from 'firebase';
@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  itemsCollection: AngularFirestoreCollection<UserInterface>;
  user: User;
  headers = new HttpHeaders({
    'Content-Type':  'application/json'
  });
  constructor(private http: HttpClient, public afAuth: AngularFireAuth, public  router: Router, public afs: AngularFirestore) {
    this.headers.append('Content-Type', 'application/json');
    this.afAuth.authState.subscribe(user => {
      if (user) {
        this.user = user;
        // console.log(localStorage.getItem('user'));
      } else {
        localStorage.setItem('userData', null);
        localStorage.setItem('user', null);
      }
    });
  }
  private handleError(error: HttpErrorResponse) {
    return throwError(error);
  }
  public getUserData(userId) {
    return this.http.get(`http://localhost:3000/loggedIn/${userId}`).pipe(
      catchError(this.handleError));
  }
  public setUserData(usData) {
    localStorage.setItem('userData', JSON.stringify(usData));
  }
  public login(email: string, password: string) {
    return this.afAuth.auth.signInWithEmailAndPassword(email, password).then((user) => {
      console.log('i have logged in');
      this.headers.append('authentication', `${user.user.uid}`);
      localStorage.setItem('user', null);
      localStorage.setItem('user', JSON.stringify(user.user));
      return user.user;
    })
    .catch((err) => {
      console.log(err);
      console.log(err.message);
      return err;
    });
  }
  async register(userData: UserInterface, email: string, password: string) {
    this.afAuth.auth.createUserWithEmailAndPassword(email, password)
      .then((user) => {
        this.itemsCollection = this.afs.collection('user');
        this.afAuth.user.subscribe( x => {
          // console.log(x);
          if(x)
            if (x.emailVerified === false) {
              x.sendEmailVerification()
              .then(() => {
                userData.userId = user.user.uid;
                // console.log(userData);
                this.itemsCollection.add(userData);
                console.log('I am registered');
              })
              .catch(err => {
                console.log('Error: ', err);
              });
          }
        });
    });
  }
  verifyLogin(): Observable<any> {
    const users = JSON.parse(localStorage.getItem('user'));
    return this.http.get(`http://localhost:3000/users/verifyLogin/${users.uid}`, {
      headers: new HttpHeaders({
        authorization: users.uid,
        'x-header': 'x-value'
      })}).pipe(
      catchError(this.handleError)
    );
  }
  async logout() {
    await this.afAuth.auth.signOut();
    localStorage.removeItem('user');
    localStorage.removeItem('userData');
    this.router.navigate(['/']);
  }
  isLoggedIn(): boolean {
    const user = JSON.parse(localStorage.getItem('user'));
    return user !== null;
  }
  getUserType() {
    if (localStorage.getItem('userData')) {
      const userType = JSON.parse(localStorage.getItem('userData'));
      return userType.userType;
    } else {
      console.log('no user found');
      return '';
    }
  }
  getToken() {
    return this.http.get(`http://localhost:3000/users/test`).pipe(
      catchError(this.handleError)
    );
  }
  changePassword(passObj: ChangePasswordInterface) {
    const cpUser = this.afAuth.auth.currentUser;
    return this.afAuth.auth.signInWithEmailAndPassword(cpUser.email, passObj.oldPassword).then((user) => {
      if (passObj.newPassword !== passObj.confirmNewPassword) {
        return {message: 'Passwords do not Match', error: true};
      } else if (passObj.newPassword.length < 6) {
        return {message: 'Password must be 6 characters long', error: true};
      } else {
        return cpUser.updatePassword(passObj.newPassword).then((success) => {
          return {error: false, message: 'Succesfully done'};
        })
        .catch((error) => {
          return {message : 'Something went Wrong', error: true};
        });
      }
    }).catch((err) => {
      return {error: true, message: 'Invalid Password Provided'};
    });
  }
  // async sendEmailVerification() {
  //   await this.afAuth.auth.currentUser.sendEmailVerification();
  //   this.router.navigate(['admin/verify-email']);
  // }
  // async sendPasswordResetEmail(passwordResetEmail: string) {
  //   return await this.afAuth.auth.sendPasswordResetEmail(passwordResetEmail);
  // }

  enablePersistence(){
    return this.afAuth.auth.setPersistence(firebase.auth.Auth.Persistence.LOCAL);
  }
}
