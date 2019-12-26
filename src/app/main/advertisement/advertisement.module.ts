import { SharedModule } from './../../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdvertisementRoutingModule } from './advertisement-routing.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AdvertisementRoutingModule,
    SharedModule
  ]
})
export class AdvertisementModule { }
