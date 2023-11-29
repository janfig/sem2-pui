import {inject, Injectable} from '@angular/core';
import {FontSize, FontSizeType} from "../utils/font-size";

@Injectable({
  providedIn: 'root'
})
export class FontSizeService {

  private fontSize = FontSize.getInstance();

  constructor() {
    this.setFontSizeMedium();
  }

  private setFontSize(newFontSize: number): void {
    this.fontSize.changeFontSize(newFontSize);
  }

  setFontSizeSmall(): void {
    this.setFontSize(FontSizeType.Small);
  }

  setFontSizeMedium(): void {
    this.setFontSize(FontSizeType.Medium);
  }

  setFontSizeLarge(): void {
    this.setFontSize(FontSizeType.Large);
  }
}
