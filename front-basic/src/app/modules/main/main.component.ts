import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NavBarComponent} from "../../shared/nav-bar/nav-bar.component";
import {RouterOutlet} from "@angular/router";
import {MockUserService} from "../../core/mocks/user-mock.service";

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [CommonModule, NavBarComponent, RouterOutlet],
  template: `
    <div class="main-outer-box">
    <app-nav-bar></app-nav-bar>
    <router-outlet></router-outlet>
    </div>
  `,
  styleUrl: './main.component.scss',
  providers: [MockUserService]
})
export class MainComponent {
  constructor(public mockUserService: MockUserService) {
  }
}
