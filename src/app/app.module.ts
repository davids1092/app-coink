import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BtnPricnipalComponent } from './components/btn-pricnipal/btn-pricnipal.component';
import { BtnSecundarioComponent } from './components/btn-secundario/btn-secundario.component';
import { RegistroComponent } from './screens/registro/registro.component';
import { SplashComponent } from './components/splash/splash.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, SplashComponent],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
