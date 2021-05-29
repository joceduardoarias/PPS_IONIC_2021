import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FotosLazyLoadPageRoutingModule } from './fotos-lazy-load-routing.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FotosLazyLoadPageRoutingModule
  ],
  declarations: []
})
export class FotosLazyLoadPageModule {}
