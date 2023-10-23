import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router: Router) { }

  logout() {

    // Empty Local Storage
    localStorage.clear();

    // Redirect to login page
    this.router.navigate(['/login']);

  }
}
