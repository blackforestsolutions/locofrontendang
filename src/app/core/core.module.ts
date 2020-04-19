import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { CoreComponent } from './container/core.component';
import { CoreRoutingModule } from './core-routing.module';

@NgModule({
  declarations: [CoreComponent, HeaderComponent],
  imports: [CommonModule, CoreRoutingModule],
})
export class CoreModule {}
