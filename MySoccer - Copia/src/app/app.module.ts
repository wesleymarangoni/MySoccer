import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { TimesPage } from '../pages/times/times';
import { CampeonatosPage } from '../pages/campeonatos/campeonatos';
import { ContatoPage } from '../pages/contato/contato';
import { SobrePage } from '../pages/sobre/sobre';
import { SantosPage } from '../pages/santos/santos';
import { PalmeirasPage } from '../pages/palmeiras/palmeiras';
import { BragantinoPage } from '../pages/bragantino/bragantino';
import { SOPauloPage } from '../pages/s-opaulo/s-opaulo';
import { NewPage } from '../pages/new/new';
import { VanderleiPage } from '../pages/vanderlei/vanderlei';
import { CopaDoMundoPage } from '../pages/copa-do-mundo/copa-do-mundo';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    TimesPage,
    CampeonatosPage,
    ContatoPage,
    SobrePage,
    SantosPage,
    PalmeirasPage,
    BragantinoPage,
    SOPauloPage,
    NewPage,
    VanderleiPage,
    CopaDoMundoPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    TimesPage,
    CampeonatosPage,
    ContatoPage,
    SobrePage,
    SantosPage,
    PalmeirasPage,
    BragantinoPage,
    SOPauloPage,
    NewPage,
    VanderleiPage,
    CopaDoMundoPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}