import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import {NavBarComponent} from "./shared/nav-bar/nav-bar.component";
import {MockUserService} from "./core/mocks/user-mock.service";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, NavBarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  providers: [MockUserService]
})
export class AppComponent {
  title = 'fron-podstawowy';
  constructor(public mockUserService: MockUserService) {
  }
}
