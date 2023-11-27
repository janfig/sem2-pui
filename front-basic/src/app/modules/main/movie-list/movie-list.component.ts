import {Component, inject} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Movie, MovieMockService} from "../../../core/mocks/movie-mock.service";
import {MovieRatingComponent} from "../../../shared/movie-rating/movie-rating.component";
import {NgbRating} from "@ng-bootstrap/ng-bootstrap";

@Component({
    selector: 'app-movie-list', standalone: true, imports: [CommonModule, MovieRatingComponent, NgbRating], template: `
        <div class="movie-list">
            <ng-container *ngFor="let movie of movieList" class="movie-title-list">
                <div class="movie">
                    <div class="movie__rating">
                      Oceny
                        <div class="rating__count">
                            Liczba Ocen {{movie.numberOfRatings}}
                        </div>
                        <div class="rating__stars">
                            <ngb-rating [(rate)]="movie.rating" [max]="5" [readonly]="true"></ngb-rating>
<!--                            <app-movie-rating [rating]=movie.rating ></app-movie-rating>-->
                        </div>
                    </div>
                    <div class="movie__info">
                        <div class="movie__title">
                            {{movie.name}}
                        </div>
                        <div class="movie__year">
                            Premiera: {{movie.premiere}}
                        </div>
                        <div class="movie__plot">
                            {{movie.description}}
                        </div>
                        <div class="movie__genre">
                            Gatunek: {{movie.genre}}
                        </div>
                    </div>
                    <div class="movie__poster">
                        <img [src]="movie.gallery.url" alt="movie poster">
                    </div>
                </div>
            </ng-container>
        </div>
    `, styleUrl: './movie-list.component.scss'
})
export class MovieListComponent {
    mms = inject(MovieMockService)
    movieList: Movie[] = []
    constructor() {
        this.movieList = this.mms.getMovies()
    }

}
