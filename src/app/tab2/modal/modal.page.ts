import { ModalController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
})
export class ModalPage implements OnInit {

  constructor(private ModalController: ModalController) { }

  ngOnInit() {
  }

  exitOnData(){
    this.ModalController.dismiss()
  }

}
