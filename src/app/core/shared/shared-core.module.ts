import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreAngularMaterialModule } from './core-angular-material/core-angular-material.module';
import { FlexLayoutModule } from '@angular/flex-layout';

const sharedCoreModules = [
  CoreAngularMaterialModule,
  FlexLayoutModule
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ...sharedCoreModules
  ],
  exports: [
    ...sharedCoreModules
  ]
})
export class SharedCoreModule { }
