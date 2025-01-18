import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';

export const authGuard: CanActivateFn = (route, state) => {
  const isLoggedIn = !!localStorage.getItem('user');
  const isGuest = localStorage.getItem('guest') === 'true';
  const router = inject(Router);

  if (isLoggedIn || isGuest) {
    return true;
  }

  router.navigate(['/login']);
  return false;
};
