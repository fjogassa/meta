import { Meta } from './../../data/meta.interface';
import { Component } from '@angular/core';
import { IonicPage, ViewController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-meta',
  templateUrl: 'meta.html',
})
export class MetaPage {

  metaSelecionada: Meta;

  constructor(public viewCtrl: ViewController, private navParams: NavParams) {
    this.metaSelecionada = navParams.data;
  }

  onClose(remove = false) {
    this.viewCtrl.dismiss(remove);
  }

}
