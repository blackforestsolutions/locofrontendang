import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from './core-routing.module';
import { CoreComponent } from './core.component';
import { SharedCoreModule } from './shared/shared-core.module';
import { HeaderComponent } from './header/header.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [CoreComponent, HeaderComponent, SidenavComponent, FooterComponent],
  imports: [
    CommonModule,
    CoreRoutingModule,
    SharedCoreModule
  ]
})
export class CoreModule { }
