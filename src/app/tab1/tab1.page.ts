import { Component } from '@angular/core';
import { ModalController } from "@ionic/angular";
import { ModalGalleryPage } from "./modal-gallery/modal-gallery.page";
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(private ModalCtrl:ModalController) { }

  ngOnInit() {
  }

  
  async openModalData(){
    const modal = await this.ModalCtrl.create({
      component:ModalGalleryPage
    });
    await modal.present();

    const items = await modal.onDidDismiss()
  };
  
}
