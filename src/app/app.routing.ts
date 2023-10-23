import { Routes } from '@angular/router';

import { FullComponent } from './layouts/full/full.component';

// Guard
import { AuthGuard } from './guard/auth-guard.service';

export const AppRoutes: Routes = [
  {
    path: 'login',
    loadChildren: () =>
      import('./login/login-page.module').then(m => m.LoginPageModule)
  },
  {
    path: '',
    canActivate: [AuthGuard],
    component: FullComponent,
    children: [
      {
        path: '',
        redirectTo: '/login',
        pathMatch: 'full'
      },
      {
        path: '',
        loadChildren:
          () => import('./material-component/material.module').then(m => m.MaterialComponentsModule)
      },
      {
        path: 'dashboard',
        loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)
      }
    ]
  }
];
