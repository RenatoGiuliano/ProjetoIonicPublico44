import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SeriePageRoutingModule } from './serie-routing.module';

import { SeriePage } from './serie.page';
// import { RatingStarsPipe } from '../pipes/rating-stars.pipe'; // Remova essa linha

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SeriePageRoutingModule,
  ],
  declarations: [SeriePage]  // Remova RatingStarsPipe daqui
})
export class SeriePageModule {}
