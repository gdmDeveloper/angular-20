import { Routes } from '@angular/router';
import { DragonBall } from './pages/dragonball/dragonball';
import { DragonballSuper } from './pages/dragonball-super/dragonball-super';


export const routes: Routes = [

  {
    path: 'dragonball',
    component: DragonBall,
  },
  {
    path: 'dragonball-super',
    component: DragonballSuper,
  },
  {
    path: '**',
    redirectTo: 'dragonball',
  },
];
