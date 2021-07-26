import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab4',
  templateUrl: 'tab4.page.html',
  styleUrls: ['tab4.page.scss']
})
export class Tab4Page {
  contReply = [];
  contacts = [];

  constructor(private alertCtrl: AlertController) {}

  saveC(){
    const contacts = {
    reply: this.contReply,
  };
  this.contacts.push(contacts);
  this.clearField();
  console.log(this.contacts);
  }

  clearField(){
    this.contReply =[];
   
  }
}
