import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomepageComponent } from './static/homepage/homepage.component';
import { LoginComponent } from './static/login/login.component';
import { RegisterComponent } from './static/register/register.component';
import { AboutusComponent } from './static/aboutus/aboutus.component';
import { TermsconditionsComponent } from './static/termsconditions/termsconditions.component';
import { FaqComponent } from './static/faq/faq.component';
import { HowitworksComponent } from './static/howitworks/howitworks.component';
import { ContactUsComponent } from './static/contact-us/contact-us.component';
import { EmployerModule } from './employer/employer.module';
import { StorageServiceModule } from 'ngx-webstorage-service';
import { CandidateModule } from './candidate/candidate.module';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from '../environments/environment';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { CommonModule } from '@angular/common';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { ResumeGenerateComponent } from './resume-generate/resume-generate.component';
import { NgFlashMessagesModule } from 'ng-flash-messages';
import { GooglePlaceModule } from "ngx-google-places-autocomplete";
import {AngularGooglePlaceModule} from 'angular-google-place';
import { NgxSpinnerModule } from "ngx-spinner";

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    LoginComponent,
    RegisterComponent,
    AboutusComponent,
    TermsconditionsComponent,
    FaqComponent,
    HowitworksComponent,
    ContactUsComponent,
    ResumeGenerateComponent
  ],
  imports: [
    EmployerModule,
    CandidateModule,
    BrowserModule,
    HttpClientModule,
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
    StorageServiceModule,
    AngularFireAuthModule,
    AngularFireStorageModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AppRoutingModule,
    NgFlashMessagesModule.forRoot(),
    GooglePlaceModule,
    AngularGooglePlaceModule,
    NgxSpinnerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
