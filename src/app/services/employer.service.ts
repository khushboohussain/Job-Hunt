import { ApplyJobInterface } from 'src/app/interfaces/apply-job.interface';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import {catchError, map} from 'rxjs/operators';
import { AngularFirestore} from '@angular/fire/firestore';
import { Observable, throwError } from 'rxjs';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import { EmployerProfileInterface } from '../interfaces/employer-profile.interface';
import { JobInterface } from '../interfaces/job.interface';
import { UserInterface } from '../interfaces/user.interface';
@Injectable({
  providedIn: 'root'
})
export class EmployerService {
  headers = new HttpHeaders({
    'Content-Type':  'application/json'
  });
  constructor(private http: HttpClient, public afAuth: AngularFireAuth, public  router: Router, public afs: AngularFirestore) {
    this.headers.append('Content-Type', 'application/json');
  }
  private handleError(error: HttpErrorResponse) {
    return throwError(error);
  }
  getEmps() {
    const user = JSON.parse(localStorage.getItem('user'));
    return this.http.get<UserInterface[]>(`http://localhost:3000/employer` , {
      headers: new HttpHeaders({
        authorization: user.uid,
        'x-header': 'x-value'
      })}).pipe(
      catchError(this.handleError)
    );
  }
  saveEmpProfile(empData: EmployerProfileInterface) {
    const users = JSON.parse(localStorage.getItem('user'));
    return this.http.post<EmployerProfileInterface>(`http://localhost:3000/employer/profiledata`, empData , {
      headers: new HttpHeaders({
        authorization: users.uid,
        'x-header': 'x-value'
      })}).pipe(
      catchError(this.handleError)
    );
  }
  getEmpProfile() {
    const user = JSON.parse(localStorage.getItem('user'));
    return this.http.get<EmployerProfileInterface[]>(`http://localhost:3000/employer/profiledata/${user.uid}` , {
      headers: new HttpHeaders({
        authorization: user.uid,
        'x-header': 'x-value'
      })}).pipe(
      catchError(this.handleError)
    );
  }
  addJob(jobData: JobInterface) {
    const user = JSON.parse(localStorage.getItem('user'));
    jobData.jobId = Math.random().toString(36).substr(2, 9);
    return this.http.post<JobInterface[]>('http://localhost:3000/employer/add-job' , jobData,  {
      headers: new HttpHeaders({
        authorization: user.uid,
        'x-header': 'x-value'
      })}).pipe(
      catchError(this.handleError)
    );
  }
  getJobsForCompany() {
    const user = JSON.parse(localStorage.getItem('user'));
    console.log(user);
    return this.http.get<JobInterface[]>(`http://localhost:3000/employer/jobs/${user.uid}` , {
      headers: new HttpHeaders({
        authorization: user.uid,
        'x-header': 'x-value'
      })}).pipe(
      catchError(this.handleError)
    );
  }
  getJobSingle(jobId: string) {
    const user = JSON.parse(localStorage.getItem('user'));
    return this.http.get<JobInterface>(`http://localhost:3000/employer/job-single/${jobId}` , {
      headers: new HttpHeaders({
        authorization: user.uid,
        'x-header': 'x-value'
      })}).pipe(
      catchError(this.handleError)
    );
  }
  deleteJob(uid: string) {
    const user = JSON.parse(localStorage.getItem('user'));
    return this.http.delete(`http://localhost:3000/employer/job-single/${uid}` , {
      headers: new HttpHeaders({
        authorization: user.uid,
        'x-header': 'x-value'
      })}).pipe(
      catchError(this.handleError)
    );
  }
  getEmpById(uid: string) {
    const user = JSON.parse(localStorage.getItem('user'));
    return this.http.get<EmployerProfileInterface[]>(`http://localhost:3000/employer/profiledata/${uid}` , {
      headers: new HttpHeaders({
        authorization: user.uid,
        'x-header': 'x-value'
      })}).pipe(
      catchError(this.handleError)
    );
  }
  getJobsById(uid: string) {
    const user = JSON.parse(localStorage.getItem('user'));
    return this.http.get<JobInterface[]>(`http://localhost:3000/employer/jobs/${uid}` , {
      headers: new HttpHeaders({
        authorization: user.uid,
        'x-header': 'x-value'
      })}).pipe(
      catchError(this.handleError)
    );
  }
  getAppliedJobs(uid: string) {
    const user = JSON.parse(localStorage.getItem('user'));
    return this.http.get<ApplyJobInterface[]>(`http://localhost:3000/employer/applied-jobs/${uid}` , {
      headers: new HttpHeaders({
        authorization: user.uid,
        'x-header': 'x-value'
      })}).pipe(
      catchError(this.handleError)
    );
  }

  getAppliedJobsById(jobId: string) {
    const user = JSON.parse(localStorage.getItem('user'));
    return this.http.get<ApplyJobInterface[]>(`http://localhost:3000/employer/applied-jobs-id/${jobId}` , {
      headers: new HttpHeaders({
        authorization: user.uid,
        'x-header': 'x-value'
      })}).pipe(
      catchError(this.handleError)
    );
  }

}
