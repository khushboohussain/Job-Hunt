import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CanProfileComponent } from './dashboard/can-profile/can-profile.component';
import { CanResumeComponent } from './dashboard/can-resume/can-resume.component';
import { CanShortlistComponent } from './dashboard/can-shortlist/can-shortlist.component';
import { CanResumeAddNewComponent } from './dashboard/can-resume-add-new/can-resume-add-new.component';
import { CandashboardComponent } from './dashboard/candashboard/candashboard.component';
import { RouterModule } from '@angular/router';
import { CanCandidateDashboardComponent } from './dashboard/can-candidate-dashboard/can-candidate-dashboard.component';
import { CanCoverletterComponent } from './dashboard/can-coverletter/can-coverletter.component';
import { CanChangePasswordComponent } from './dashboard/can-change-password/can-change-password.component';
import { CanAppliedJobComponent } from './dashboard/can-applied-job/can-applied-job.component';
import { CanListComponent } from './home/can-list/can-list.component';
import { CanCandidateHomeComponent } from './home/can-candidate-home/can-candidate-home.component';
import { CanJobListComponent } from './home/can-job-list/can-job-list.component';
import { CanJobSingleComponent } from './home/can-job-single/can-job-single.component';
import { CanHomeComponent } from './home/can-home/can-home.component';
import { CanEmpListComponent } from './home/can-emp-list/can-emp-list.component';
import { CanEmpSingleComponent } from './home/can-emp-single/can-emp-single.component';
import { LayoutModule } from '../layout/layout.module';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CanSingleComponent } from './home/can-single/can-single.component';
import { CanSearchComponent } from './home/can-search/can-search.component';
import { CanProfileSearchComponent } from './home/can-profile-search/can-profile-search.component';
import {AngularGooglePlaceModule} from 'angular-google-place';
import { NgxSpinnerModule } from "ngx-spinner";

@NgModule({
  declarations: [
    CanProfileComponent,
    CanResumeComponent,
    CanShortlistComponent,
    CanResumeAddNewComponent,
    CandashboardComponent,
    CanCandidateDashboardComponent,
    CanCoverletterComponent,
    CanChangePasswordComponent,
    CanAppliedJobComponent,
    CanListComponent,
    CanCandidateHomeComponent,
    CanJobListComponent,
    CanJobSingleComponent,
    CanHomeComponent,
    CanEmpListComponent,
    CanEmpSingleComponent,
    CanSingleComponent,
    CanSearchComponent,
    CanProfileSearchComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    FormsModule,
    LayoutModule,
    RouterModule,
    ReactiveFormsModule,
    AngularGooglePlaceModule,
    NgxSpinnerModule
  ],
  exports: [
    CanProfileComponent,
    CanResumeComponent,
    CanShortlistComponent,
    CanResumeAddNewComponent,
    CandashboardComponent,
    CanCandidateDashboardComponent,
    CanCoverletterComponent,
    CanChangePasswordComponent,
    CanAppliedJobComponent,
    CanListComponent,
    CanCandidateHomeComponent,
    CanJobListComponent,
    CanJobSingleComponent,
    CanHomeComponent,
    CanEmpListComponent,
    CanEmpSingleComponent,
    CanSingleComponent,
    CanSearchComponent,
    CanProfileSearchComponent
  ]
})
export class CandidateModule { }
