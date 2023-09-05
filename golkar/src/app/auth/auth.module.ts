import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthService } from './auth.service';
import { AuthGuard } from './auth.guard';
import { AuthRoutingModule } from './auth-routing.module';


@NgModule({
  declarations: [LoginComponent],
  imports: [CommonModule,FormsModule,ReactiveFormsModule,AuthRoutingModule],
  providers: [AuthService,AuthGuard],
  exports: [LoginComponent]

})
export class AuthModule { }
