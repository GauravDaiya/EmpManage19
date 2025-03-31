import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const LoggedData = sessionStorage.getItem('Employee');
  if (LoggedData != null) {
    return true
  } else {
    router.navigate(['/'])
    return false;
  }
};
