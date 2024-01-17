// import necessary Angular modules and services
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { MockUserService } from '../../../core/mocks/user-mock.service';

// Registration component
@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="login-page">
      <div class="card">
        <h2>Zarejestruj się</h2>
        <form #loginForm="ngForm" (ngSubmit)="onSubmit(loginForm)">
          <div class="form-group">
            <label for="login">Nazwa użytkownia</label>
            <input type="text" class="form-control" id="login" name="login" ngModel required>
            <div
              *ngIf="loginForm.controls['login']?.invalid && (loginForm.controls['login']?.dirty || loginForm.controls['login']?.touched)"
              class="text-danger validation-alert">
              Musiz podać login
            </div>
          </div>
          <div class="form-group">
            <label for="email">Email</label>
            <input type="email" class="form-control" id="email" name="email" ngModel required>
            <div
              *ngIf="loginForm.controls['login']?.invalid && (loginForm.controls['login']?.dirty || loginForm.controls['login']?.touched)"
              class="text-danger validation-alert">
              Musiz podać email
            </div>
          </div>
          <div class="form-group">
            <label for="password">Hasło</label>
            <input type="password" class="form-control" id="password" name="password" ngModel required>
            <div
              *ngIf="loginForm.controls['password']?.invalid && (loginForm.controls['password']?.dirty || loginForm.controls['password']?.touched)"
              class="text-danger validation-alert">
              Musisz podać hasło
            </div>
          </div>
          <div class="form-group">
            <label for="password">Powtórz hasło</label>
            <input type="password" class="form-control" id="repeat-password" name="repeat-password" ngModel required>
            <div
              *ngIf="loginForm.controls['password']?.invalid && (loginForm.controls['password']?.dirty || loginForm.controls['password']?.touched)"
              class="text-danger validation-alert">
              Hasła muszą być takie same
            </div>
          </div>
          <br>
          <button type="submit" class="btn btn-primary" [disabled]="!loginForm.valid">Zarejestruj</button>
          <div *ngIf="errorMessage" class="text-danger validation-alert">
            {{ errorMessage }}
          </div>
        </form>
      </div>
    </div>
  `,
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  errorMessage: string = '';

  constructor(public mockUserService: MockUserService, private router: Router) {}

  onSubmit(registerForm: NgForm) {
    const { login, password, email } = registerForm.form.value;
    // Perform registration logic using the mock service (similar to login logic)
    if (this.mockUserService.register(login, password, email)) {
      // Redirect to home or login page after successful registration
      this.router.navigate(['/login']);
    } else {
      this.errorMessage = 'Nieudana próba rejestracji';
    }
  }
}
