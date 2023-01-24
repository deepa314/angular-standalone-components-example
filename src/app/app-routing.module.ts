
import {  Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./user/user.component')
  },
  // {
  //   path:'',
  //   canMatch: [() => inject(FeatureFlagsService).hasPermission('todos-v2')],
  //   loadComponent:()=>import('./admin/admin.module').then(m=>m.AdminModule)

  // }
];

