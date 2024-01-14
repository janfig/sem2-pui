import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MockUserService} from "../../../core/mocks/user-mock.service";
import {FormsModule, NgForm} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="login-page">
      <div class="card">
        <h2>Zaloguj</h2>
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
            <label for="password">Hasło</label>
            <input type="password" class="form-control" id="password" name="password" ngModel required>
            <div
              *ngIf="loginForm.controls['password']?.invalid && (loginForm.controls['password']?.dirty || loginForm.controls['password']?.touched)"
              class="text-danger validation-alert">
              Musisz podać hasło
            </div>
          </div>
          <a class="form-group" href="#">Nie masz jeszcze konta? Załóź je tutaj</a>
          <br>
          <button type="submit" class="btn btn-primary" [disabled]="!loginForm.valid">Zaloguj</button>
          <div *ngIf="errorMessage" class="text-danger validation-alert">
            {{ errorMessage }}
          </div>
        </form>
      </div>
    </div>
  `,
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  errorMessage: string = '';
  constructor(
    public mockUserService: MockUserService,
    private router: Router
  ) {
  }

  onSubmit(loginForm: NgForm) {
    const {login, password} = loginForm.form.value;
    if (this.mockUserService.login(login, password)) {
      this.router.navigate(["/home"])
    } else {
      this.errorMessage = 'Niepoprawne dane logowania';
    }
  }
}
