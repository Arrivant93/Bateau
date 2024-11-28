import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecetteDetailsPage } from './recettes-details.page';

const routes: Routes = [
  {
    path: '',
    component: RecetteDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RecettesDetailsPageRoutingModule {}
