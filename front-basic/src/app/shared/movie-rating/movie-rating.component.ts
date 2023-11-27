import {Component, Input} from '@angular/core';
import {CommonModule} from '@angular/common';
import {toNumbers} from "@angular/compiler-cli/src/version_helpers";

@Component({
    selector: 'app-movie-rating',
    standalone: true,
    imports: [CommonModule],
    template: `
        <div class="movie-rating">
            <ng-container *ngFor="let star of stars">
                <img [src]="star" alt="star">
            </ng-container>
        </div>
    `,
    styleUrl: './movie-rating.component.scss'
})
export class MovieRatingComponent {
    @Input({required:true}) rating! : number;
    _rating!: number;
    maxRating: number = 5;
    stars: string[] = [];

    constructor() {
        console.log(this.rating);
        this._rating = Number(this.rating);
        for (let i = 0; i < this.maxRating; i++) {
            if (i < this.rating && this.rating >= i + 1) {
                this.stars.push('assets/images/star-fill.svg');
            } else if (i < this.rating && this.rating < i + 1 ){
                this.stars.push('assets/images/star-half.svg');
            }
            else {
                this.stars.push('assets/images/star.svg');
            }
        }
    }

}
