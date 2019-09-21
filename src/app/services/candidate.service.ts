import { JobInterface } from 'src/app/interfaces/job.interface';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import {catchError, map} from 'rxjs/operators';
import { AngularFirestore} from '@angular/fire/firestore';
import { Observable, throwError } from 'rxjs';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import { UserProfileInterface } from '../interfaces/user-profile.interface';
import { UserEducationInterface } from '../interfaces/user-education.interface';
import { WorkExperienceInterface } from '../interfaces/user-workexperience.interface';
import { UserSkillInterface } from '../interfaces/user-skill.interface';
import { UserProfileAwards } from '../interfaces/user-awards.interface';
import { UserInterface } from '../interfaces/user.interface';
import { UserResumeInterface } from 'src/app/interfaces/user-resume.interface';
import { ApplyJobInterface } from '../interfaces/apply-job.interface';
import { UserCoverLetterInterface } from '../interfaces/user-coverletter.interface';
@Injectable({
  providedIn: 'root'
})
export class CandidateService {
  headers = new HttpHeaders({
    'Content-Type':  'application/json'
  });
  constructor(private http: HttpClient, public afAuth: AngularFireAuth, public  router: Router, public afs: AngularFirestore) {
    this.headers.append('Content-Type', 'application/json');
  }
  private handleError(error: HttpErrorResponse) {
    return throwError(error);
  }
  saveUserProfileData(userData: UserProfileInterface) {
    const users = JSON.parse(localStorage.getItem('user'));
    return this.http.post<UserProfileInterface>(`http://localhost:3000/candidate/profiledata`, userData , {
      headers: new HttpHeaders({
        authorization: users.uid,
        'x-header': 'x-value'
      })}).pipe(
      catchError(this.handleError)
    );
  }
  saveCandidateWorkExp(expData: WorkExperienceInterface) {
    const users = JSON.parse(localStorage.getItem('user'));
    return this.http.post<WorkExperienceInterface>(`http://localhost:3000/candidate/candidate-workexp`, {data: expData, add: true} , {
      headers: new HttpHeaders({
        authorization: users.uid,
        'x-header': 'x-value'
      })}).pipe(
      catchError(this.handleError)
    );
  }
  saveCandidateEducation(eduData: UserEducationInterface) {
    const users = JSON.parse(localStorage.getItem('user'));
    return this.http.post<UserEducationInterface>(`http://localhost:3000/candidate/candidate-education`, {data: eduData, add: true} , {
      headers: new HttpHeaders({
        authorization: users.uid,
        'x-header': 'x-value'
      })}).pipe(
      catchError(this.handleError)
    );
  }
  saveCandidateSkill(eduData: UserSkillInterface) {
    const users = JSON.parse(localStorage.getItem('user'));
    return this.http.post<UserSkillInterface>(`http://localhost:3000/candidate/candidate-skills`, {data: eduData, add: true} , {
      headers: new HttpHeaders({
        authorization: users.uid,
        'x-header': 'x-value'
      })}).pipe(
      catchError(this.handleError)
    );
  }
  saveAward(award: UserProfileAwards) {
    const users = JSON.parse(localStorage.getItem('user'));
    return this.http.post<UserProfileAwards>(`http://localhost:3000/candidate/candidate-awards`, {data: award, add: true} , {
      headers: new HttpHeaders({
        authorization: users.uid,
        'x-header': 'x-value'
      })}).pipe(
      catchError(this.handleError)
    );
  }
  getCandidateEducation() {
    const users = JSON.parse(localStorage.getItem('user'));
    return this.http.get<UserEducationInterface[]>(`http://localhost:3000/candidate/candidate-education/${users.uid}`, {
      headers: new HttpHeaders({
        authorization: users.uid,
        'x-header': 'x-value'
      })}).pipe(
      catchError(this.handleError)
    );
  }
  getSkills() {
    const users = JSON.parse(localStorage.getItem('user'));
    return this.http.get<UserSkillInterface[]>(`http://localhost:3000/candidate/candidate-skills/${users.uid}`, {
      headers: new HttpHeaders({
        authorization: users.uid,
        'x-header': 'x-value'
      })}).pipe(
      catchError(this.handleError)
    );
  }
  getCandidateAwards() {
    const users = JSON.parse(localStorage.getItem('user'));
    return this.http.get<UserProfileAwards[]>(`http://localhost:3000/candidate/candidate-awards/${users.uid}`, {
      headers: new HttpHeaders({
        authorization: users.uid,
        'x-header': 'x-value'
      })}).pipe(
      catchError(this.handleError)
    );
  }
  getCandidateWorkExperience() {
    const users = JSON.parse(localStorage.getItem('user'));
    return this.http.get<WorkExperienceInterface[]>(`http://localhost:3000/candidate/candidate-workexp/${users.uid}`, {
      headers: new HttpHeaders({
        authorization: users.uid,
        'x-header': 'x-value'
      })}).pipe(
      catchError(this.handleError)
    );
  }
  getUserProfileData() {
    const users = JSON.parse(localStorage.getItem('user'));
    return this.http.get<UserProfileInterface>(`http://localhost:3000/candidate/profiledata/${users.uid}`, {
      headers: new HttpHeaders({
        authorization: users.uid,
        'x-header': 'x-value'
      })}).pipe(
      catchError(this.handleError)
    );
  }
  getUsersProfile() {
    const users = JSON.parse(localStorage.getItem('user'));
    return this.http.get<UserProfileInterface[]>(`http://localhost:3000/candidate/profiledata`, {
      headers: new HttpHeaders({
        authorization: users.uid,
        'x-header': 'x-value'
      })}).pipe(
      catchError(this.handleError)
    );
  }
  getUsers() {
    const users = JSON.parse(localStorage.getItem('user'));
    return this.http.get<UserInterface[]>(`http://localhost:3000/candidate`, {
      headers: new HttpHeaders({
        authorization: users.uid,
        'x-header': 'x-value'
      })}).pipe(
      catchError(this.handleError)
    );
  }
  updateCandidateEducation(eduData: UserEducationInterface) {
    const users = JSON.parse(localStorage.getItem('user'));
    return this.http.post<UserEducationInterface>(`http://localhost:3000/candidate/candidate-education`, {data: eduData, add: false} , {
      headers: new HttpHeaders({
        authorization: users.uid,
        'x-header': 'x-value'
      })}).pipe(
      catchError(this.handleError)
    );
  }
  updateCandidateWorkExp(eduData: WorkExperienceInterface) {
    const users = JSON.parse(localStorage.getItem('user'));
    return this.http.post<WorkExperienceInterface>(`http://localhost:3000/candidate/candidate-workexp`, {data: eduData, add: false} , {
      headers: new HttpHeaders({
        authorization: users.uid,
        'x-header': 'x-value'
      })}).pipe(
      catchError(this.handleError)
    );
  }
  updateCandidateSkill(eduData: UserSkillInterface) {
    const users = JSON.parse(localStorage.getItem('user'));
    return this.http.post<UserSkillInterface>(`http://localhost:3000/candidate/candidate-skills`, {data: eduData, add: false} , {
      headers: new HttpHeaders({
        authorization: users.uid,
        'x-header': 'x-value'
      })}).pipe(
      catchError(this.handleError)
    );
  }
  updateAward(awardData: UserProfileAwards) {
    const users = JSON.parse(localStorage.getItem('user'));
    return this.http.post<UserProfileAwards>(`http://localhost:3000/candidate/candidate-awards`, {data: awardData, add: false} , {
      headers: new HttpHeaders({
        authorization: users.uid,
        'x-header': 'x-value'
      })}).pipe(
      catchError(this.handleError)
    );
  }

  deleteEducation(uid: string) {
    const users = JSON.parse(localStorage.getItem('user'));
    return this.http.delete(`http://localhost:3000/candidate/candidate-education/${uid}`, {
      headers: new HttpHeaders({
        authorization: users.uid,
        'x-header': 'x-value'
      })}).pipe(
      catchError(this.handleError)
    );
  }
  deleteWorkExp(uid: string) {
    const users = JSON.parse(localStorage.getItem('user'));
    return this.http.delete(`http://localhost:3000/candidate/candidate-workexp/${uid}`, {
      headers: new HttpHeaders({
        authorization: users.uid,
        'x-header': 'x-value'
      })}).pipe(
      catchError(this.handleError)
    );
  }
  deleteSkill(uid: string) {
    const users = JSON.parse(localStorage.getItem('user'));
    return this.http.delete(`http://localhost:3000/candidate/candidate-skill/${uid}`, {
      headers: new HttpHeaders({
        authorization: users.uid,
        'x-header': 'x-value'
      })}).pipe(
      catchError(this.handleError)
    );
  }
  deleteAward(uid: string) {
    const users = JSON.parse(localStorage.getItem('user'));
    return this.http.delete(`http://localhost:3000/candidate/candidate-award/${uid}`, {
      headers: new HttpHeaders({
        authorization: users.uid,
        'x-header': 'x-value'
      })}).pipe(
      catchError(this.handleError)
    );
  }
  getProfileById(uid: string) {
    const users = JSON.parse(localStorage.getItem('user'));
    return this.http.get<UserProfileInterface>(`http://localhost:3000/candidate/profiledata/${uid}`, {
      headers: new HttpHeaders({
        authorization: users.uid,
        'x-header': 'x-value'
      })}).pipe(
      catchError(this.handleError)
    );
  }
  getCandidateById(uid: string) {
    const users = JSON.parse(localStorage.getItem('user'));
    return this.http.get<UserInterface>(`http://localhost:3000/candidate/${uid}`, {
      headers: new HttpHeaders({
        authorization: users.uid,
        'x-header': 'x-value'
      })}).pipe(
      catchError(this.handleError)
    );
  }
  getSkillsById(uid: string) {
    const users = JSON.parse(localStorage.getItem('user'));
    return this.http.get<UserSkillInterface[]>(`http://localhost:3000/candidate/candidate-skills/${uid}`, {
      headers: new HttpHeaders({
        authorization: users.uid,
        'x-header': 'x-value'
      })}).pipe(
      catchError(this.handleError)
    );
  }
  getEducationById(uid: string) {
    const users = JSON.parse(localStorage.getItem('user'));
    return this.http.get<UserEducationInterface[]>(`http://localhost:3000/candidate/candidate-education/${uid}`, {
      headers: new HttpHeaders({
        authorization: users.uid,
        'x-header': 'x-value'
      })}).pipe(
      catchError(this.handleError)
    );
  }
  getWorkById(uid: string) {
    const users = JSON.parse(localStorage.getItem('user'));
    return this.http.get<WorkExperienceInterface[]>(`http://localhost:3000/candidate/candidate-workexp/${uid}`, {
      headers: new HttpHeaders({
        authorization: users.uid,
        'x-header': 'x-value'
      })}).pipe(
      catchError(this.handleError)
    );
  }
  getAwardsById(uid: string) {
    const users = JSON.parse(localStorage.getItem('user'));
    return this.http.get<UserProfileAwards[]>(`http://localhost:3000/candidate/candidate-awards/${uid}`, {
      headers: new HttpHeaders({
        authorization: users.uid,
        'x-header': 'x-value'
      })}).pipe(
      catchError(this.handleError)
    );
  }
  applyJob(appJob: ApplyJobInterface) {
    const users = JSON.parse(localStorage.getItem('user'));
    return this.http.post(`http://localhost:3000/candidate/applyJob`, appJob , {
      headers: new HttpHeaders({
        authorization: users.uid,
        'x-header': 'x-value'
      })}).pipe(
      catchError(this.handleError)
    );
  }
  shortlistJob(appJob: ApplyJobInterface) {
    const users = JSON.parse(localStorage.getItem('user'));
    return this.http.post(`http://localhost:3000/candidate/shortlist`, appJob , {
      headers: new HttpHeaders({
        authorization: users.uid,
        'x-header': 'x-value'
      })}).pipe(
      catchError(this.handleError)
    );
  }
  getShortlistedJobs() {
    const users = JSON.parse(localStorage.getItem('user'));
    return this.http.get<ApplyJobInterface[]>(`http://localhost:3000/candidate/shortlist/${users.uid}`, {
      headers: new HttpHeaders({
        authorization: users.uid,
        'x-header': 'x-value'
      })}).pipe(
      catchError(this.handleError)
    );
  }
  deleteShortlistedJob(canId: string, jobId: string) {
    const users = JSON.parse(localStorage.getItem('user'));
    return this.http.delete(`http://localhost:3000/candidate/shortlist/${canId}/${jobId}`, {
      headers: new HttpHeaders({
        authorization: users.uid,
        'x-header': 'x-value'
      })}).pipe(
      catchError(this.handleError)
    );
  }
  getAppliedJobs() {
    const users = JSON.parse(localStorage.getItem('user'));
    return this.http.get<ApplyJobInterface[]>(`http://localhost:3000/candidate/applyjob/${users.uid}`, {
      headers: new HttpHeaders({
        authorization: users.uid,
        'x-header': 'x-value'
      })}).pipe(
      catchError(this.handleError)
    );
  }
  deleteAppliedJob(canId: string, jobId: string) {
    const users = JSON.parse(localStorage.getItem('user'));
    return this.http.delete(`http://localhost:3000/candidate/applyjob/${canId}/${jobId}`, {
      headers: new HttpHeaders({
        authorization: users.uid,
        'x-header': 'x-value'
      })}).pipe(
      catchError(this.handleError)
    );
  }

  getAllJobs(){
    const users = JSON.parse(localStorage.getItem('user'));
    return this.http.get<JobInterface[]>(`http://localhost:3000/candidate/getAllJobs`, {
      headers: new HttpHeaders({
        authorization: users.uid,
        'x-header': 'x-value'
      })}).pipe(
      catchError(this.handleError)
    );
  }

  getJobById(jobId){
    const users = JSON.parse(localStorage.getItem('user'));
    return this.http.get<JobInterface>(`http://localhost:3000/candidate/get-job/${jobId}`, {
      headers: new HttpHeaders({
        authorization: users.uid,
        'x-header': 'x-value'
      })}).pipe(
      catchError(this.handleError)
    );
  }

  getJobByCand(jobId){
    const users = JSON.parse(localStorage.getItem('user'));
    return this.http.get<JobInterface>(`http://localhost:3000/candidate/get-job/${jobId}`, {
      headers: new HttpHeaders({
        authorization: users.uid,
        'x-header': 'x-value'
      })}).pipe(
      catchError(this.handleError)
    );
  }

  //========================Resume Name =======================//

  addResumeName(resData: UserResumeInterface) {
    const users = JSON.parse(localStorage.getItem('user'));
    resData.cvId = Math.random().toString(36).substr(2, 9);
    return this.http.post<UserResumeInterface>(`http://localhost:3000/candidate/add-resume`, {data: resData, add: true} , {
      headers: new HttpHeaders({
        authorization: users.uid,
        'x-header': 'x-value'
      })}).pipe(
      catchError(this.handleError)
    );
  }

  getResumes() {
    const users = JSON.parse(localStorage.getItem('user'));
    console.log(users.uid);
    return this.http.get<UserResumeInterface[]>(`http://localhost:3000/candidate/resumes/${users.uid}`, {
      headers: new HttpHeaders({
        authorization: users.uid,
        'x-header': 'x-value'
      })}).pipe(
      catchError(this.handleError)
    );
  }

  getCoverLetter() {
    const users = JSON.parse(localStorage.getItem('user'));
    return this.http.get<UserResumeInterface>(`http://localhost:3000/candidate/coverLetter/${users.uid}`, {
      headers: new HttpHeaders({
        authorization: users.uid,
        'x-header': 'x-value'
      })}).pipe(
      catchError(this.handleError)
    );
  }

  getAppliedJobsByUser() {
    const users = JSON.parse(localStorage.getItem('user'));
    return this.http.get<ApplyJobInterface[]>(`http://localhost:3000/candidate/jobapplied/${users.uid}`, {
      headers: new HttpHeaders({
        authorization: users.uid,
        'x-header': 'x-value'
      })}).pipe(
      catchError(this.handleError)
    );
  }

  addCover(resData: UserResumeInterface){
    const users = JSON.parse(localStorage.getItem('user'));
    resData.userId = users.uid;
    return this.http.post<UserResumeInterface>(`http://localhost:3000/candidate/coverLetter/${users.uid}`, resData , {
      headers: new HttpHeaders({
        authorization: users.uid,
        'x-header': 'x-value'
      })}).pipe(
      catchError(this.handleError)
    );
  }
  //========================Resume Name =======================//
}
