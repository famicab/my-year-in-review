import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DailyFormTabPage } from './daily-form-tab.page';
import { FormContainerComponentModule } from '../form-container/form-container.module';

import { DailyFormTabPageRoutingModule } from './daily-form-tab-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    FormContainerComponentModule,
    DailyFormTabPageRoutingModule
  ],
  declarations: [DailyFormTabPage]
})
export class DailyFormTabPageModule {}
