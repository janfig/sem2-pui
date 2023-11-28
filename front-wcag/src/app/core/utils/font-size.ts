import {BehaviorSubject} from "rxjs";
import {inject, Renderer2} from "@angular/core";

export enum FontSizeType {
  Small = 14,
  Medium = 17,
  Large = 20,
}
export class FontSize {

  get fontSize$(): BehaviorSubject<FontSizeType>{
    return this._fontSize$;
  }

  private static instance: FontSize;

  private _fontSize$ = new BehaviorSubject<FontSizeType>(FontSizeType.Medium);
  private renderer = inject(Renderer2);

  private constructor() {
    this.changeFontSize(FontSizeType.Medium);
  }

  public static getInstance(): FontSize {
    if (!FontSize.instance) {
      FontSize.instance = new FontSize();
    }
    return FontSize.instance;
  }

  setFontSize(fontSize: number): void {
    this.renderer.setStyle(document.documentElement, 'font-size', `${fontSize}px`);
  }

  changeFontSize(fontSize: FontSizeType): void {
    this._fontSize$.next(fontSize);
    this.setFontSize(fontSize);
  }
}
