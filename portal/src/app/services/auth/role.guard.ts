import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class RoleGuard implements CanActivate {
  constructor(private authService: AuthService) {
  }

  // User must be logged in and have admin role.
  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    let result = true;
    const expectedRole = next.data.expectedRole
    if (!this.authService.token) {
      result = false;
    } else {
      result = this.authService.currentUser.role === expectedRole;
    }
    return result;
  }
}
