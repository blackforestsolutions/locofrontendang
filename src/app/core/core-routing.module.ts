import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CoreComponent } from './container/core.component';

export const paths: any = {
  home: '',
  journeys: 'journeys',
};

const routes: Routes = [
  {
    path: paths.home,
    component: CoreComponent,
    children: [
      {
        path: paths.home,
        loadChildren: () => import('../api-token/api-token.module').then((m) => m.ApiTokenModule),
      },
      {
        path: paths.journeys,
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
