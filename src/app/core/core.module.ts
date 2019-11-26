import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from './core-routing.module';
import { CoreComponent } from './core.component';
import { SharedCoreModule } from './shared/shared-core.module';
import { StartModule } from '../pages/start/start.module';

@NgModule({
  declarations: [CoreComponent],
  imports: [
    CommonModule,
    CoreRoutingModule,
    SharedCoreModule,
    StartModule
  ]
})
export class CoreModule { }
