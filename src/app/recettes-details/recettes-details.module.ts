import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RecettesDetailsPageRoutingModule } from './recettes-details-routing.module';

import { RecetteDetailsPage } from './recettes-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RecettesDetailsPageRoutingModule
  ],
  declarations: [RecetteDetailsPage]
})
export class RecettesDetailsPageModule {}
