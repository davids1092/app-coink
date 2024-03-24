import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { BtnPricnipalComponent } from 'src/app/components/btn-pricnipal/btn-pricnipal.component';
import { BtnSecundarioComponent } from 'src/app/components/btn-secundario/btn-secundario.component';
import { LoginComponent } from './login.component';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { StepperComponent } from 'src/app/components/stepper/stepper.component';

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoginRoutingModule,
    StepperComponent,
    BtnPricnipalComponent,
    BtnSecundarioComponent
  ],
})
export class LoginModule {}
