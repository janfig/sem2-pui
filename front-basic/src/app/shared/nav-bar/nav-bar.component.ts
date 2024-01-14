import {Component} from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterLink} from "@angular/router";
import {MockUserService} from "../../core/mocks/user-mock.service";

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <nav class="navbar navbar-expand-lg bg-main">
      <div class="container-fluid">
        <a class="navbar-brand" routerLink="home">Strona</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link" routerLink="home">Strona główna</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" routerLink="movies">Filmy</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" routerLink="contactForm">Formularz kontaktowy</a>
            </li>
          </ul>
          <div *ngIf="mockUserService.loggedUser">
            <ul class="navbar-nav ml-auto">
              <li class="nav-item">
                <a class="nav-link" routerLink="profile">{{mockUserService.loggedUser.login}}</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Wyloguj się</a>
              </li>
            </ul>
          </div>
          <div *ngIf="!mockUserService.loggedUser">
            <ul class="navbar-nav ml-auto">
              <li class="nav-item">
                <a class="nav-link" routerLink="login">Zaloguj się</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  `,
  styleUrl: './nav-bar.component.scss'
})
export class NavBarComponent {
  constructor(public mockUserService: MockUserService) {
  }

}
