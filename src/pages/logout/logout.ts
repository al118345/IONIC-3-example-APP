import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the LogoutPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-logout',
  templateUrl: 'logout.html',
})

export class LogoutPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {



   // this.navCtrl.popToRoot('LoginPage');
  }

  ionViewDidLoad()
  {
    //importante limpiar la url para limpiar  el tab
    //además redireciono a la URL de origen.
    this.navCtrl.push('LoginPage');
    location.assign('/');
    console.log('ionViewDidLoad LogoutPage');
  }

}
