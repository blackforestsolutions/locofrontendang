import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { JourneyListComponent } from './container/journey-list.component';

const routes: Routes = [
  {
    path: '',
    component: JourneyListComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class JourneysRoutingModule {}
