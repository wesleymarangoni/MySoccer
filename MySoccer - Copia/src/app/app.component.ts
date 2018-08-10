import { Component, ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { ContatoPage } from '../pages/contato/contato';
import { SobrePage } from '../pages/sobre/sobre';
import { CampeonatosPage } from '../pages/campeonatos/campeonatos';
import { CopaDoMundoPage } from '../pages/copa-do-mundo/copa-do-mundo';
import { TimesPage } from '../pages/times/times';
import { SantosPage } from '../pages/santos/santos';
import { VanderleiPage } from '../pages/vanderlei/vanderlei';
import { PalmeirasPage } from '../pages/palmeiras/palmeiras';
import { SOPauloPage } from '../pages/s-opaulo/s-opaulo';
import { BragantinoPage } from '../pages/bragantino/bragantino';
import { NewPage } from '../pages/new/new';


import { HomePage } from '../pages/home/home';



@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) navCtrl: Nav;
    rootPage:any = HomePage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
  goToContato(params){
    if (!params) params = {};
    this.navCtrl.push(ContatoPage);
  }goToSobre(params){
    if (!params) params = {};
    this.navCtrl.push(SobrePage);
  }goToCampeonatos(params){
    if (!params) params = {};
    this.navCtrl.push(CampeonatosPage);
  }goToCopaDoMundo(params){
    if (!params) params = {};
    this.navCtrl.push(CopaDoMundoPage);
  }goToTimes(params){
    if (!params) params = {};
    this.navCtrl.push(TimesPage);
  }goToSantos(params){
    if (!params) params = {};
    this.navCtrl.push(SantosPage);
  }goToVanderlei(params){
    if (!params) params = {};
    this.navCtrl.push(VanderleiPage);
  }goToPalmeiras(params){
    if (!params) params = {};
    this.navCtrl.push(PalmeirasPage);
  }goToSOPaulo(params){
    if (!params) params = {};
    this.navCtrl.push(SOPauloPage);
  }goToBragantino(params){
    if (!params) params = {};
    this.navCtrl.push(BragantinoPage);
  }goToHome(params){
    if (!params) params = {};
    this.navCtrl.push(HomePage);
  }goToNew(params){
    if (!params) params = {};
    this.navCtrl.push(NewPage);
  }
}
