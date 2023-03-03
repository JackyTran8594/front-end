import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthenticationComponent } from './authentication.component';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AuthenticationRoutingModule } from './authentication-routing.module';
import { AuthenticationService } from './authentication.service';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AuthenticationRoutingModule,
    HttpClientModule
  ],
  declarations: [AuthenticationComponent, LoginComponent],
  providers: [
    AuthenticationService
  ],
  exports: [AuthenticationComponent, LoginComponent]
})
export class AuthenticationModule { }