import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BateauDetailsPage } from './bateau-details.page';

const routes: Routes = [
  {
    path: '',
    component: BateauDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BateauDetailsPageRoutingModule {}
