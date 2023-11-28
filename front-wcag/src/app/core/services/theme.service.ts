import {inject, Injectable, Renderer2} from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  get theme$(): BehaviorSubject<string>{
    return this._theme$;
  }

  private _theme$ = new BehaviorSubject<string>("default-theme");
  private renderer = inject(Renderer2);


  constructor() {
    this.changeTheme("default-theme");
  }

  public changeTheme(theme: string): void {
    this.renderer.removeClass(document.documentElement, this._theme$.getValue())
    this.renderer.addClass(document.documentElement, theme)
    this._theme$.next(theme);
  }
}
