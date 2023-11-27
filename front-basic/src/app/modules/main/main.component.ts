import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NavBarComponent} from "../../shared/nav-bar/nav-bar.component";
import {RouterOutlet} from "@angular/router";

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [CommonModule, NavBarComponent, RouterOutlet],
  template: `
    <app-nav-bar></app-nav-bar>
    <router-outlet></router-outlet>
  `,
  styleUrl: './main.component.scss'
})
export class MainComponent {

}
