import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SantosPage } from '../santos/santos';
import { VanderleiPage } from '../vanderlei/vanderlei';
import { PalmeirasPage } from '../palmeiras/palmeiras';
import { SOPauloPage } from '../s-opaulo/s-opaulo';
import { BragantinoPage } from '../bragantino/bragantino';

@Component({
  selector: 'page-times',
  templateUrl: 'times.html'
})
export class TimesPage {

  constructor(public navCtrl: NavController) {
  }
  goToSantos(params){
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
  }
}
