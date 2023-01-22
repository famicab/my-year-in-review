import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DailyFormTabPage } from './daily-form-tab.page';

const routes: Routes = [
  {
    path: '',
    component: DailyFormTabPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DailyFormTabPageRoutingModule {}
