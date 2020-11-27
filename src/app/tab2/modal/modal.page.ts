import { ModalController } from '@ionic/angular';
import { Component, OnInit, Input } from '@angular/core';
import { getModels } from "../../interfaces/getModels/modelsClass";
@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
})
export class ModalPage implements OnInit {
  @Input() dataModels : getModels

  
  

  constructor(
    private ModalController: ModalController
    ) {
    
    }

  ngOnInit() {
    console.log(this.dataModels.make_name);
    
    
  }

  onChange(event){
    console.log(`seleccionaste: ${event.target.value}`);
    
  }

  exitOnData(){
    this.ModalController.dismiss()
  }

  addComponent(){

  }



}
