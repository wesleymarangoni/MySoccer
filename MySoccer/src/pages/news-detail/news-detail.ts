import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage} from '../home/home';

@IonicPage()
@Component({
  selector: 'page-news-detail',
  templateUrl: 'news-detail.html',
})
export class NewsDetailPage {
  new:any;
  id:any;
  title:String;
  description:String;
  imagePath:any;
  

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.id = this.navParams.get('id');
   
  }

  ionViewDidLoad() {
    //mostrar o loading
    //buscar noticia pelo id
    //finish loading
  }

}
