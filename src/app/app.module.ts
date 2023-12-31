import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { SignUpComponent } from './sign-up/sign-up.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { BodyComponent } from './body/body.component';
import {HttpClientModule} from "@angular/common/http";
import {NgToastModule} from "ng-angular-popup";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {ToastrModule} from "ngx-toastr";
import { PostGrievanceComponent } from './post-grievance/post-grievance.component';
import {NgbModule, NgbTooltip, NgbTooltipModule} from "@ng-bootstrap/ng-bootstrap";
import {NgxSpinnerModule} from "ngx-spinner";
import { SpinnerComponent } from './spinner/spinner.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AllUsersComponent } from './all-users/all-users.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    SignUpComponent,
    ForgotPasswordComponent,
    DashboardComponent,
    TopBarComponent,
    SideBarComponent,
    BodyComponent,
    PostGrievanceComponent,
    SpinnerComponent,
    AdminDashboardComponent,
    AllUsersComponent,
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        ReactiveFormsModule,
        FormsModule,
        HttpClientModule,
        NgToastModule,
        BrowserAnimationsModule,
        ToastrModule.forRoot({
          positionClass: 'toast-top-left',
          timeOut: 15000,
          closeButton: true,
          // progressBar: true,
        }),
        NgbModule,
        NgbTooltipModule,
        NgxSpinnerModule.forRoot({
          type: 'ball-scale-multiple',
        })
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
