import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {
  FormsModule,
  ReactiveFormsModule,
  FormBuilder
} from '@angular/forms';
import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';

import { AuthService } from './auth.service';

import { AllRouteGuard } from './all-route-guard';
import { HeaderComponent } from './header/header.component';
import { SidebarLeftComponent } from './sidebar-left/sidebar-left.component';


@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    LoginComponent,
    HeaderComponent,
    SidebarLeftComponent
  ],
  imports: [
    RouterModule.forRoot([
      {path: 'login', component: LoginComponent},
      {path: 'admin', component: AdminComponent, canActivate: [AllRouteGuard]}
    ]),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserModule
  ],
  providers: [
    AllRouteGuard,
    FormBuilder,
    AuthService
  ],
  bootstrap: [AppComponent],
  exports: [RouterModule],
})
export class AppModule { }
