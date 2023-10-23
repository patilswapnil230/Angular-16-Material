import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  loginForm: FormGroup = Object.create(null);
  submitted = false;
  spinner = false;

  constructor(private formBuilder: FormBuilder, private router: Router) {}

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['test@test.com', [Validators.required, Validators.email]],
      password: ['1234', Validators.required]
    });
  }

  login() {
    this.submitted = true;

    if (this.loginForm.valid) {
      // Trim values - Remove white spaces
      const email = this.loginForm.get('email')!.value.trim();
      const password = this.loginForm.get('password')!.value.trim();

      this.spinner = true;

      // Fake API
      setTimeout(() => {
        localStorage.setItem('email', email);
        this.router.navigate(['/dashboard']);
      }, 300);
    }
  }
}
