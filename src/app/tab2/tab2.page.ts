import { Component, OnInit } from '@angular/core';
import { ModalController} from '@ionic/angular'
import { ModalPage } from "./modal/modal.page"


@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit{
  

  constructor(private ModalController:ModalController) {}

  ngOnInit(){

  }

  scanner(){

  }

  manual(){
    this.openModal(ModalPage);
    console.log("desplegando modal");
    
  }


  async openModal( modalClass ){
    const modal = await this.ModalController.create({
       component: modalClass,
       swipeToClose: true,
     });
     await modal.present();
     const items = await modal.onDidDismiss()
   }
 
}
