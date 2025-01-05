import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const token = localStorage.getItem('token');
  const router = inject(Router);
  if (token && (token === 'user-authenticated' || token === 'admin-authenticated')) {
    return true;
  } else {
    alert('You must log in to access this page');
    router.navigate(['/login']);
    return false;
  }
};

