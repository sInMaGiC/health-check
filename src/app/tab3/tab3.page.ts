import { Component } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

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
    this.router.navigateByUrl('tab3');
    this.router.navigateByUrl('tab1');
    this.router.navigateByUrl('tabs');
  }

}
