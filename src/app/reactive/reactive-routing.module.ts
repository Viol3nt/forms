import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BasicsComponent } from 'src/app/reactive/basics/basics.component';
import { DynamicsComponent } from 'src/app/reactive/dynamics/dynamics.component';
import { SwitchesComponent } from 'src/app/reactive/switches/switches.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'basics',
        component: BasicsComponent,
      },
      {
        path: 'dynamics',
        component: DynamicsComponent,
      },
      {
        path: 'switches',
        component: SwitchesComponent,
      },
      {
        path: '**',
        redirectTo: 'basics',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class ReactiveRoutingModule {}
