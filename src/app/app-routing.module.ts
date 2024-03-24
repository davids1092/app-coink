import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () => import('./screens/login/login.module').then( m => m.LoginModule)
  },
  {
    path: 'registro-page',
    loadChildren: () => import('./screens/registro/registro.module').then( m => m.RegistroModule)
  },
  {path:'', pathMatch:'full', redirectTo:'login'},
  {path:'**', pathMatch:'full', redirectTo:'login'},
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
