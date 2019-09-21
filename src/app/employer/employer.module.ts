import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SingleEmpComponent } from './dash/single-emp/single-emp.component';
import { ResumeComponent } from './dash/resume/resume.component';
import { ProfileComponent } from './dash/profile/profile.component';
import { PostNewComponent } from './dash/post-new/post-new.component';
import { PackagesComponent } from './dash/packages/packages.component';
import { ManageJobsComponent } from './dash/manage-jobs/manage-jobs.component';
import { JobSingleComponent } from './homee/job-single/job-single.component';
import { HomeComponent } from './homee/home/home.component';
import { EmpListComponent } from './homee/emp-list/emp-list.component';
import { ChangePasswordComponent } from './dash/change-password/change-password.component';
import { CanditateSingleComponent } from './dash/canditate-single/canditate-single.component';
import { CanditateListComponent } from './homee/canditate-list/canditate-list.component';
import { DashboardComponent } from './dash/dashboard/dashboard.component';
import { RouterModule } from '@angular/router';
import { HomeeComponent } from './homee/homee/homee.component';
import { LayoutModule } from '../layout/layout.module';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CanProSearchComponent } from './homee/can-pro-search/can-pro-search.component';
import {AngularGooglePlaceModule} from 'angular-google-place';
import { NgxSpinnerModule } from "ngx-spinner";

@NgModule({
  declarations: [
    HomeComponent,
    EmpListComponent,
    SingleEmpComponent,
    ResumeComponent,
    ProfileComponent,
    PostNewComponent,
    PackagesComponent,
    ManageJobsComponent,
    JobSingleComponent,
    ChangePasswordComponent,
    CanditateSingleComponent,
    CanditateListComponent,
    DashboardComponent,
    HomeeComponent,
    CanProSearchComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    CommonModule,
    LayoutModule,
    RouterModule,
    AngularGooglePlaceModule,
    NgxSpinnerModule
  ],
  exports: [
    HomeComponent,
    EmpListComponent,
    SingleEmpComponent,
    ResumeComponent,
    ProfileComponent,
    PostNewComponent,
    PackagesComponent,
    ManageJobsComponent,
    JobSingleComponent,
    ChangePasswordComponent,
    CanditateSingleComponent,
    CanditateListComponent,
    DashboardComponent,
    HomeeComponent,
    CanProSearchComponent
  ]
})
export class EmployerModule { }
