import { Component } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-intro',
  templateUrl: 'intro.page.html',
  styleUrls: ['intro.page.scss']
})
export class IntroPage {

  constructor(private router:Router) {}

  btnClick(){
    console.log("btn Clicked");
    this.router.navigateByUrl('tab3');
    this.router.navigateByUrl('tab5');
  }

}
