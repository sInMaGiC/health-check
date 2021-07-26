import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import {Router} from '@angular/router';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  contMessage = [];
  contreplyMessage = [];
  contacts = [];


  constructor(private alertCtrl: AlertController, private router:Router) {}

  saveC(){
    const contacts = {
    message: this.contMessage,
    replymessage: this.contreplyMessage
  };
  this.contacts.push(contacts);
  this.clearField();
  console.log(this.contacts);
  }
  
 

  clearField(){
    
   
  }

  btnClick(){
    console.log("btn Clicked");
    this.router.navigateByUrl('tab3');
    this.router.navigateByUrl('tab1');
  }

}
