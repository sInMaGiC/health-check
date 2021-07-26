import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IntroPage } from './intro.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { IntroPageRoutingModule } from './intro-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    RouterModule.forChild([{ path: '', component: IntroPage }]),
    IntroPageRoutingModule,
  ],
  declarations: [IntroPage]
})
export class IntroPageModule {}
