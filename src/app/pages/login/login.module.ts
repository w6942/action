import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CommonPipeModule } from '../../common/pipes/common-pipe.module';
import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';

@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    LoginRoutingModule,
    CommonPipeModule
  ]
})
export class LoginModule {
}
