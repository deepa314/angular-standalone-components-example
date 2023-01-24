import { inject } from '@angular/core';
import { Routes } from '@angular/router';
import { AuthService } from './shared/services/auth.service';
import { authGuard } from './shared/guards/auth.guard';

export const routes: Routes = [


  {
    path:'',
    canActivate:[authGuard],
    // canMatch: [() => inject(AuthService).isLoggedIn()],
    loadComponent:()=>import('./admin/admin.component')

  },
  {
    path: '',
    loadComponent: () => import('./user/user.component')
  },
];
