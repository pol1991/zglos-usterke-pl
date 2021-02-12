import { CanReddirectIfItIsLoggedUserGuard} from './guards/can-reddirect-if-it-is-logged-user.guard';
import { CanReddirectIfItIsLoggedAdminGuard } from './guards/can-reddirect-if-it-is-logged-admin.guard';
import { CanAddNotificationGuard } from './guards/can-add-notification.guard';
import { CanGoToAdminPanelGuard } from './guards/can-go-to-admin-panel.guard';


import { AfterResetViewComponent } from './components/after-reset-view/after-reset-view.component';
import { AdminLoginPanelComponent } from './admin/admin-login-panel/admin-login-panel.component';
import { AdminWelcomeComponent } from './admin/admin-welcome/admin-welcome.component';
import { InfoComponent } from './components/info/info.component';
import { ManualComponent } from './components/manual/manual.component';
import { ConfirmationPageComponent } from './components/confirmation-page/confirmation-page.component';
import { PleaseVerifyEmailComponent } from './components/please-verify-email/please-verify-email.component';
import { SuccessRegisterRedirectComponent } from './components/success-register-redirect/success-register-redirect.component';
import { EmailLoginComponent } from './components/email-login/email-login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminSiteComponent } from './admin/admin-site/admin-site.component';
import { LoginComponent } from './components/login/login.component';
import { AddNotificationComponent } from './components/add-notification/add-notification.component';
import { FrontPageComponent } from './components/front-page/front-page.component';
import { NavPageComponent } from './components/nav-page/nav-page.component';
import { RegisterComponent } from './components/register/register.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';

const routes: Routes = [
  {
    path: '',
    component: FrontPageComponent,
    canActivate: [CanReddirectIfItIsLoggedUserGuard]
  },
  {
    path: 'wybor',
    component: NavPageComponent
  },
  {
    path: 'instrukcja',
    component: ManualComponent
  },
  {
    path: 'info',
    component: InfoComponent
  },
  {
    path: 'dodaj',
    component: AddNotificationComponent,
     canActivate: [CanAddNotificationGuard]
  },
  {
    path: 'logowanie',
    component: LoginComponent,
    canActivate: [CanReddirectIfItIsLoggedUserGuard]
  },
  {
    path: 'rejestracja-email',
    component: RegisterComponent,
    canActivate: [CanReddirectIfItIsLoggedUserGuard]
  },
  {
    path: 'admin',
    component: AdminWelcomeComponent,
    canActivate: [CanReddirectIfItIsLoggedAdminGuard]
  },
  {
    path: 'admin-login',
    component: AdminLoginPanelComponent,
    canActivate: [CanReddirectIfItIsLoggedAdminGuard]
  },
  {
    path: 'admin-panel',
    component: AdminSiteComponent,
    canActivate: [CanGoToAdminPanelGuard]
  },
  {
    path: 'logowanie-email',
    component: EmailLoginComponent,
    canActivate: [CanReddirectIfItIsLoggedUserGuard]
  },
  {
    path: 'rejestracja-email-sukces',
    component: SuccessRegisterRedirectComponent
  },
  {
    path: 'zweryfikuj-email',
    component: PleaseVerifyEmailComponent
  },
  {
    path: 'potwierdzenie',
    component: ConfirmationPageComponent,
  },
  {
    path: 'resetowanie-hasla',
    component: ResetPasswordComponent,
    canActivate: [CanReddirectIfItIsLoggedUserGuard]
  },
  {
    path: 'reset-hasla-podziekowanie',
    component: AfterResetViewComponent,
    canActivate: [CanReddirectIfItIsLoggedUserGuard]
  },
    {
      path: '*',
      component: AddNotificationComponent
    }

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
