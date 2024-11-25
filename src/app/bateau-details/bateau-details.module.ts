import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BateauDetailsPageRoutingModule } from './bateau-details-routing.module';

import { BateauDetailsPage } from './bateau-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BateauDetailsPageRoutingModule
  ],
  declarations: [BateauDetailsPage]
})
export class BateauDetailsPageModule {}
