import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import {Router} from '@angular/router';

@Component({
  selector: 'app-tab6',
  templateUrl: 'tab6.page.html',
  styleUrls: ['tab6.page.scss']
})
export class Tab6Page {

  contPassword: string = 'password';
  passwordShown: boolean = false;

  public togglePassword(){
    if(this.passwordShown){
      this.passwordShown = false;
      this.contPassword = 'password';
    } else{
      this.passwordShown = true;
      this.contPassword = 'text';
    }
  }

  contName =[];
  contFamily = [];
  contUname = [];
  contact = [];

  constructor(private alertCtrl: AlertController, private router:Router) {}

  btnClick(){
    console.log("btn Clicked");
    this.router.navigateByUrl('tab5');
  }

  saveC(){
    const contact = {
    name: this.contName,
    family: this.contFamily,
    num: this.contUname,
    pass: this.contPassword
  };
  this.contact.push(contact);
  this.clearField();
}

  clearField(){
    this.contName =[];
    this.contFamily = [];
    this.contUname =[];
  }

  async confirmDelete(cont){
    const alert = await this.alertCtrl.create({
      header: 'Confirm Delete Contacts',
      message: 'Remove this contact?',
      buttons:[
        {
        text: 'No',
        role: 'cancel',
        cssClass:'icon-color',
        handler: () => {
            console.log('Cancel Clicked');
        }
        },
        {
          text:'Yes',
          cssClass:'icon-color',
          handler: () =>{
            const index = this.contact.indexOf(cont);

            if(index > -1){
              this.contact.splice(index, 1);
            }
          }
        }
      ]
    });
    await alert.present();
  }
}
