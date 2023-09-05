import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
    providedIn: 'root',
})
export class AuthGuard {
    constructor(private authService: AuthService, private router: Router) {}

    canActivate(
        next: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): boolean {
        if (this.authService.isAuthenticated()) {
            console.log('AuthGuard - Authenticated, allowing access');
            return true;
        } else {
            console.log('AuthGuard - Not authenticated, redirecting to login');
            this.router.navigate(['/login']);
            return false;
        }
    }
}
