import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BasicsComponent } from 'src/app/template/basics/basics.component';
import { DynamicsComponent } from 'src/app/template/dynamics/dynamics.component';
import { SwitchesComponent } from 'src/app/template/switches/switches.component';

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
export class TemplateRoutingModule {}
