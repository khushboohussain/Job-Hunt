import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { NavEmpdashComponent } from './nav-empdash/nav-empdash.component';
import { NavEmphomeComponent } from './nav-emphome/nav-emphome.component';
import { EmpDashSidebarComponent } from './emp-dash-sidebar/emp-dash-sidebar.component';
import { NavCandashComponent } from './nav-candash/nav-candash.component';
import { NavCanhomeComponent } from './nav-canhome/nav-canhome.component';
import { CanDashSidebarComponent } from './can-dash-sidebar/can-dash-sidebar.component';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    RouterModule,
  ],
  declarations: [
    FooterComponent,
    NavEmpdashComponent,
    NavEmphomeComponent,
    EmpDashSidebarComponent,
    NavCandashComponent,
    NavCanhomeComponent,
    CanDashSidebarComponent
  ],
  exports: [
    FooterComponent,
    NavEmpdashComponent,
    NavEmphomeComponent,
    EmpDashSidebarComponent,
    NavCandashComponent,
    NavCanhomeComponent,
    CanDashSidebarComponent
  ]
})
export class LayoutModule { }
