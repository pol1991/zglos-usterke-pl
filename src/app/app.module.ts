import { BrowserModule, HammerModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MatDialogModule} from '@angular/material/dialog';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AdminSiteComponent } from './admin/admin-site/admin-site.component';
import { AddNotificationComponent } from './components/add-notification/add-notification.component';
import { FrontPageComponent } from './components/front-page/front-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavPageComponent } from './components/nav-page/nav-page.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AgmCoreModule } from '@agm/core';
import { EmailLoginComponent } from './components/email-login/email-login.component';
import { SuccessRegisterRedirectComponent } from './components/success-register-redirect/success-register-redirect.component';
import { PleaseVerifyEmailComponent } from './components/please-verify-email/please-verify-email.component';
import { ConfirmationPageComponent } from './components/confirmation-page/confirmation-page.component';
import { ManualComponent } from './components/manual/manual.component';
import { InfoComponent } from './components/info/info.component';
import { AdminLoginPanelComponent } from './admin/admin-login-panel/admin-login-panel.component';
import { AdminWelcomeComponent } from './admin/admin-welcome/admin-welcome.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { AfterResetViewComponent } from './components/after-reset-view/after-reset-view.component';

const firebaseConfig = {
  apiKey: 'AIzaSyB4ZyMyckmhXeWqjy_HxldcqrSBAW5kfvY',
  authDomain: 'project-6d3c8.firebaseapp.com',
  databaseURL: 'https://project-6d3c8.firebaseio.com',
  projectId: 'project-6d3c8',
  storageBucket: 'project-6d3c8.appspot.com',
  messagingSenderId: '110349672213',
  appId: '1:110349672213:web:7a341aa975218916be131c',
};

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    AdminSiteComponent,
    AddNotificationComponent,
    FrontPageComponent,
    NavPageComponent,
    EmailLoginComponent,
    SuccessRegisterRedirectComponent,
    PleaseVerifyEmailComponent,
    ConfirmationPageComponent,
    ManualComponent,
    InfoComponent,
    AdminLoginPanelComponent,
    AdminWelcomeComponent,
    ResetPasswordComponent,
    AfterResetViewComponent
  ],
  imports: [
    AngularFireModule.initializeApp(firebaseConfig),
    RouterModule,
    BrowserModule,
    AppRoutingModule,
    AngularFirestoreModule,
    AngularFireStorageModule,
    AngularFireAuthModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    HammerModule,
    MatDialogModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDrRaq468XDnSll7Fy1FjhRgGVRxjUgorg',
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
