import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

const angularMaterialModules = [

];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ...angularMaterialModules
  ],
  exports: [
    ...angularMaterialModules
  ]
})
export class AngularMaterialModule { }
