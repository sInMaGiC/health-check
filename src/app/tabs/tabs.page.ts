import { Component } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {

  constructor(private router:Router) {}
  btnClick(){
    console.log("btn Clicked");
    this.router.navigateByUrl('tab4');
    this.router.navigateByUrl('tab2');
    this.router.navigateByUrl('tab5');
    this.router.navigateByUrl('tab3');
    this.router.navigateByUrl('tab6');
    this.router.navigateByUrl('tab1');
  }


}
