import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistroComponent } from './registro.component';
import { FormUnoComponent } from './form-uno/form-uno.component';
import { FormDosComponent } from './form-dos/form-dos.component';
import { FormTresComponent } from './form-tres/form-tres.component';

const routes: Routes = [
  {
    path: '',
    component: RegistroComponent,
  },
  {
    path: 'form-uno',
    component: FormUnoComponent,
  },
  {
    path: 'form-dos',
    component: FormDosComponent,
  },
  {
    path: 'form-tres',
    component: FormTresComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegistroRoutingModule { }
