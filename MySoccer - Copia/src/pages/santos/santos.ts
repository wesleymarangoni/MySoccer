import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { VanderleiPage } from '../vanderlei/vanderlei';

@Component({
  selector: 'page-santos',
  templateUrl: 'santos.html'
})
export class SantosPage {

  constructor(public navCtrl: NavController) {
  }
  goToVanderlei(params){
    if (!params) params = {};
    this.navCtrl.push(VanderleiPage);
  }
}
