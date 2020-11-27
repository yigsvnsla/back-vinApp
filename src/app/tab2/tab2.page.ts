import { Component, OnInit } from '@angular/core';
import { ModalController} from '@ionic/angular'
import { ModalPage } from "./modal/modal.page"
import { GetInfoServiceService } from 'src/app/services/get-info-service.service';
import { getModels } from "../interfaces/getModels/modelsClass";
@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit{
  
  dataModels : getModels

  constructor(
    private ModalController:ModalController,
    private getInfoServiceService : GetInfoServiceService
    ) {}

  ngOnInit(){
    this.getInfoServiceService.getAllModels()
    .subscribe(all=>{
      let res = new getModels(all)
      this.dataModels =  res;
      return
    });
  }

  scanner(){

  }

  manual(){
    this.openModal(ModalPage);
  }


  async openModal( modalClass ){
    const modal = await this.ModalController.create({
       component: modalClass,
       swipeToClose: true,
       componentProps:{dataModels:this.dataModels}
     });
     await modal.present();
     const items = await modal.onDidDismiss()
   }
 
}
