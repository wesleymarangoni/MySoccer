import { Component } from '@angular/core';
import { NavController,ToastController, NavParams, LoadingController } from 'ionic-angular';
import { NewsDetailPage} from '../news-detail/news-detail';
import { SoccerProvider } from '../../providers/soccer/soccer';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  listNews =[];
  public loader;
  public refresher;
  public isRefreshing: boolean = false;
  public infiniteScroll;

  constructor(public navCtrl: NavController,
  public navParams: NavParams,
  private soccerProvider : SoccerProvider,
  public loadingCtrl: LoadingController) {
  }

  presentLoading() {
    this.loader = this.loadingCtrl.create({
      content: "Carregando Noticias...",
    });
    this.loader.present();
  }
  closeLoading(){
    this.loader.dismiss();
  }

  doRefresh(refresher) {
    this.refresher = refresher;
    this.isRefreshing = true;

    this.loadingNews();

    setTimeout(() => {
      console.log('Async operation has ended');
      refresher.complete();
    }, 2000);
  }


  doInfinite(infiniteScroll) {
    this.infiniteScroll = infiniteScroll;
    this.loadingNews();
    infiniteScroll.complete();
  }

  ionViewDidEnter(){
    this.loadingNews();
  }

  loadingNews(){
    this.presentLoading();
    this.soccerProvider.getSoccer().subscribe(
      data =>{
        const response = (data as any);
        const objectReturn = JSON.parse(response._body);
        for(let i = 0; i < objectReturn.length; i++){
          this.listNews.push(objectReturn[i]);
        }
         console.log(objectReturn);
         this.closeLoading();
         
         if(this.isRefreshing){
           this.refresher.complete;
           this.isRefreshing = false;
         }
      },error =>{
        console.log(error);
        this.closeLoading();
        if(this.isRefreshing){
          this.refresher.complete;
          this.isRefreshing = false;
        }
      })
  }
  newSelected(item:any){
    //abre LOADING
    this.presentLoading();
    this.navCtrl.push(NewsDetailPage,{new:item});
    //fecha LOADING
    this.closeLoading();
  }
}
