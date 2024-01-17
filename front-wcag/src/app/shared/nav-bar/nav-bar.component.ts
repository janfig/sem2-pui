import {Component, inject} from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterLink} from "@angular/router";
import {NgbDropdown, NgbDropdownMenu, NgbDropdownToggle} from "@ng-bootstrap/ng-bootstrap";
import {FontSizeService} from "../../core/services/font-size.service";
import {ThemeService} from "../../core/services/theme.service";
import {MockUserService} from "../../core/mocks/user-mock.service";

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [CommonModule, RouterLink, NgbDropdown, NgbDropdownMenu, NgbDropdownToggle],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss',
  providers: [FontSizeService, ThemeService]
})
export class NavBarComponent {

  private fontSizeService = inject(FontSizeService);
  private themeService = inject(ThemeService);

  constructor(public mockUserService: MockUserService) {
  }

  setFontSizeSmall(): void {
    this.fontSizeService.setFontSizeSmall();
  }

  setFontSizeMedium(): void {
    this.fontSizeService.setFontSizeMedium();
  }

  setfontSizeLarge(): void {
    this.fontSizeService.setFontSizeLarge();
  }

  setDefaultTheme(): void {
    this.themeService.changeTheme("default-theme");
  }

  setSecondTheme(): void {
    this.themeService.changeTheme("contrast1-theme");
  }

  setThirdTheme(): void {
    this.themeService.changeTheme("contrast2-theme");
  }

  setFourthTheme(): void {
    this.themeService.changeTheme("contrast3-theme");
  }
}
