import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CopaDoMundoPage } from '../copa-do-mundo/copa-do-mundo';

@Component({
  selector: 'page-campeonatos',
  templateUrl: 'campeonatos.html'
})
export class CampeonatosPage {

  constructor(public navCtrl: NavController) {
  }
  goToCopaDoMundo(params){
    if (!params) params = {};
    this.navCtrl.push(CopaDoMundoPage);
  }
}
