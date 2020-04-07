import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { JourneySearchComponent } from './container/journey-search.component';

const routes: Routes = [
  {
    path: '',
    component: JourneySearchComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ApiTokenRoutingModule {}
