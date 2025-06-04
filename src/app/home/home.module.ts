import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HomePage } from './home.page';  
import { RoundPipe } from '../pipes/round.pipe'; 

@NgModule({
  declarations: [
    HomePage,
    RoundPipe  
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([{ path: '', component: HomePage }]),
  ]
})
export class HomePageModule {}
