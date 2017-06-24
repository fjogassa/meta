import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Meta } from "../../data/meta.interface";
import { MetasPage } from '../metas/metas';
import metas from '../../data/metas';

@IonicPage()
@Component({
  selector: 'page-categorias',
  templateUrl: 'categorias.html',
})
export class CategoriasPage implements OnInit {

  metasPage = MetasPage;
  metaCollection: {
    categoria: string,
    metas: Meta[],
    icon: string
  }[];

  ngOnInit() {
    this.metaCollection = metas;
  }

}
