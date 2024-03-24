import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegistroRoutingModule } from './registro-routing.module';
import { RegistroComponent } from './registro.component';
import { IonicModule } from '@ionic/angular';
import { FormUnoComponent } from './form-uno/form-uno.component';
import { FormDosComponent } from './form-dos/form-dos.component';
import { FormTresComponent } from './form-tres/form-tres.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BtnPricnipalComponent } from 'src/app/components/btn-pricnipal/btn-pricnipal.component';
import { BtnSecundarioComponent } from 'src/app/components/btn-secundario/btn-secundario.component';
import { LoginComponent } from '../login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { ServicesService } from 'src/app/services/services.service';
import { SpinnerComponent } from 'src/app/components/spinner/spinner.component';

@NgModule({
  declarations: [
    RegistroComponent,
    FormUnoComponent,
    FormDosComponent,
    FormTresComponent,
  
  ],
  imports: [
    CommonModule,
    RegistroRoutingModule,
    IonicModule,
    ReactiveFormsModule,
    FormsModule,
    BtnPricnipalComponent,
    BtnSecundarioComponent,
    SpinnerComponent,
    HttpClientModule
  ],
  providers:[ServicesService]
})
export class RegistroModule {}
