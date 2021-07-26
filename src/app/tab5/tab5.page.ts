import { Component } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-tab5',
  templateUrl: 'tab5.page.html',
  styleUrls: ['tab5.page.scss']
})
export class Tab5Page {

  
  constructor(private router:Router) {}

  contNumber: string = 'password';
  passwordShown: boolean = false;

  public togglePassword(){
    if(this.passwordShown){
      this.passwordShown = false;
      this.contNumber = 'password';
    } else{
      this.passwordShown = true;
      this.contNumber = 'text';
    }
  }

  btnClick(){
    console.log("btn Clicked");
    this.router.navigateByUrl('tab4');
    this.router.navigateByUrl('tab6');
    this.router.navigateByUrl('tabs');
  }

}
