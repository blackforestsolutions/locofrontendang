import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CoreComponent } from './container/core.component';

const routes: Routes = [
  {
    path: '',
    component: CoreComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('../api-token/api-token.module').then((m) => m.ApiTokenModule),
      },
      {
        path: 'journeys',
        loadChildren: () => import('../journeys/journeys.module').then((m) => m.JourneysModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CoreRoutingModule {}
