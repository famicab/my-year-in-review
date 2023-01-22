import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DailyFormTabPage } from './daily-form-tab.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { DailyFormTabPageRoutingModule } from './daily-form-tab-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    DailyFormTabPageRoutingModule
  ],
  declarations: [DailyFormTabPage]
})
export class Tab1PageModule {}
