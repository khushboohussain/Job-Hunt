import { CanProSearchComponent } from './employer/homee/can-pro-search/can-pro-search.component';
import { CanProfileSearchComponent } from './candidate/home/can-profile-search/can-profile-search.component';
import { CanSearchComponent } from './candidate/home/can-search/can-search.component';
import { CanSingleComponent } from './candidate/home/can-single/can-single.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './static/homepage/homepage.component';
import { AboutusComponent } from './static/aboutus/aboutus.component';
import { LoginComponent } from './static/login/login.component';
import { RegisterComponent } from './static/register/register.component';
import { FaqComponent } from './static/faq/faq.component';
import { TermsconditionsComponent } from './static/termsconditions/termsconditions.component';
import { HowitworksComponent } from './static/howitworks/howitworks.component';
import { ContactUsComponent } from './static/contact-us/contact-us.component';
import { ManageJobsComponent } from './employer/dash/manage-jobs/manage-jobs.component';
import { DashboardComponent } from './employer/dash/dashboard/dashboard.component';
import { CanditateListComponent } from './employer/homee/canditate-list/canditate-list.component';
import { CanditateSingleComponent } from './employer/dash/canditate-single/canditate-single.component';
import { ChangePasswordComponent } from './employer/dash//change-password/change-password.component';
import { EmpListComponent } from './employer/homee/emp-list/emp-list.component';
import { HomeComponent } from './employer/homee/home/home.component';
import { JobSingleComponent } from './employer/homee/job-single/job-single.component';
import { PackagesComponent } from './employer/dash/packages/packages.component';
import { PostNewComponent } from './employer/dash/post-new/post-new.component';
import { ProfileComponent } from './employer/dash/profile/profile.component';
import { ResumeComponent } from './employer/dash/resume/resume.component';
import { SingleEmpComponent } from './employer/dash/single-emp/single-emp.component';
import { HomeeComponent } from './employer/homee/homee/homee.component';
import { CandashboardComponent } from './candidate/dashboard/candashboard/candashboard.component';
import { CanCandidateDashboardComponent } from './candidate/dashboard/can-candidate-dashboard/can-candidate-dashboard.component';
import { CanAppliedJobComponent } from './candidate/dashboard/can-applied-job/can-applied-job.component';
import { CanChangePasswordComponent } from './candidate/dashboard/can-change-password/can-change-password.component';
import { CanCoverletterComponent } from './candidate/dashboard/can-coverletter/can-coverletter.component';
import { CanProfileComponent } from './candidate/dashboard/can-profile/can-profile.component';
import { CanResumeComponent } from './candidate/dashboard/can-resume/can-resume.component';
import { CanResumeAddNewComponent } from './candidate/dashboard/can-resume-add-new/can-resume-add-new.component';
import { CanShortlistComponent } from './candidate/dashboard/can-shortlist/can-shortlist.component';
import { CanHomeComponent } from './candidate/home/can-home/can-home.component';
import { CanCandidateHomeComponent } from './candidate/home/can-candidate-home/can-candidate-home.component';
import { CanJobListComponent } from './candidate/home/can-job-list/can-job-list.component';
import { CanJobSingleComponent } from './candidate/home/can-job-single/can-job-single.component';
import { CanListComponent } from './candidate/home/can-list/can-list.component';
import { CanEmpListComponent } from './candidate/home/can-emp-list/can-emp-list.component';
import { CanEmpSingleComponent } from './candidate/home/can-emp-single/can-emp-single.component';
import { EmployerGuard } from './guards/employer.guard';
import { CandidateGuard } from './guards/candidate.guard';
import { ResumeGenerateComponent } from './resume-generate/resume-generate.component';
import { ResumeGuard } from './guards/resume.guard';
const appRoutes: Routes = [
    {
        path: '',
        component: HomepageComponent
    },
    {
        path: 'aboutus',
        component: AboutusComponent
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'register',
        component: RegisterComponent
    },
    {
        path: 'faq',
        component: FaqComponent
    },
    {
        path: 'termsconditions',
        component: TermsconditionsComponent
    },
    {
        path: 'how_it_works',
        component: HowitworksComponent
    },
    {
        path: 'contact',
        component: ContactUsComponent
    },
    {
        path: 'candidate/download-cv',
        component: ResumeGenerateComponent,
        canActivate: [ResumeGuard]
    },
    {
        path: 'employer/dashboard',
        component: DashboardComponent,
        canActivateChild: [EmployerGuard],
        children: [
            {
                path: '',
                redirectTo: '/employer/dashboard/manage-jobs',
                pathMatch: 'full'
            },
            {
                path: 'candidate-single',
                component: CanditateSingleComponent
            },
            {
                path: 'change-password',
                component: ChangePasswordComponent
            },
            {
                path: 'manage-jobs',
                component: ManageJobsComponent
            },
            {
                path: 'packages',
                component: PackagesComponent
            },
            {
                path: 'post-new',
                component: PostNewComponent
            },
            {
                path: 'profile',
                component: ProfileComponent
            },
            {
                path: 'resume',
                component: ResumeComponent
            },
            {
                path: 'single-emp',
                component: SingleEmpComponent
            }
        ]
    },
    {
        path: 'employer/home',
        component: HomeeComponent,
        canActivateChild: [EmployerGuard],
        children: [
            {
                path: '',
                component: HomeComponent
            },
            {
                path: 'candidate-list',
                component: CanditateListComponent
            },
            {
                path: 'emp-list',
                component: EmpListComponent
            },
            {
                path: 'job-single',
                component: JobSingleComponent
            },
            {
                path: 'can-pro-search',
                component: CanProSearchComponent
            }

        ]
    },
    {
        path: 'candidate/dashboard',
        component: CandashboardComponent,
        canActivateChild: [CandidateGuard],
        children: [
            {
                path: '',
                component: CanCandidateDashboardComponent,
            },
            {
                path: 'applied-jobs',
                component: CanAppliedJobComponent
            },
            {
                path: 'change-password',
                component: CanChangePasswordComponent
            },
            {
                path: 'coverletter',
                component: CanCoverletterComponent
            },
            {
                path: 'profile',
                component: CanProfileComponent
            },
            {
                path: 'resume',
                component: CanResumeComponent
            },
            {
                path: 'resume-addnew',
                component: CanResumeAddNewComponent
            },
            {
                path: 'shortlist',
                component: CanShortlistComponent
            },
        ]
    },
    {
        path: 'candidate/home',
        component: CanHomeComponent,
        canActivateChild: [CandidateGuard],
        children: [
            {
                path: '',
                pathMatch: 'full',
                component: CanCandidateHomeComponent
            },
            {
                path: 'job-list',
                component: CanJobListComponent
            },
            {
                path: 'job-single',
                component: CanJobSingleComponent
            },
            {
                path: 'candidate-list',
                component: CanListComponent
            },
            {
              path: 'candidate-single',
              component: CanSingleComponent
            },

            {
                path: 'employer-list',
                component: CanEmpListComponent
            },
            {
                path: 'employer-single',
                component: CanEmpSingleComponent
            },
            {
              path: 'can-search',
              component: CanSearchComponent
            },
            {
              path: 'can-profile-search',
              component: CanProfileSearchComponent
            }
        ],
    }
];
@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
