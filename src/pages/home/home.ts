import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import {DetailPage} from '../detail-page/detail-page'
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  constructor(public navCtrl: NavController) {}
  setRoot(){
    this.navCtrl.setRoot(DetailPage, {
      'test': 'My Data'
    })
  }

}
