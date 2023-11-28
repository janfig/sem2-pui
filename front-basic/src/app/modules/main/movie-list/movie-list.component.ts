import {Component, inject} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Movie, MovieMockService} from "../../../core/mocks/movie-mock.service";
import {NgbRating} from "@ng-bootstrap/ng-bootstrap";
import {FormsModule} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-movie-list',
  standalone: true,
  imports: [CommonModule, NgbRating, FormsModule],
  template: `
    <div class="movie-filter">
      <div class="movie-filter__search">
        <input type="text" class="form-control" id="movie_name" placeholder="Szukaj filmu" [(ngModel)]="searchedMovieName">
      </div>

      <select class="form-control" [(ngModel)]="sortMoviesBy">
        <option value="name">Sortuj po nazwie rosnąco</option>
        <option value="premiere">Sortuj po dacie premiery rosnąco</option>
        <option value="rating">Sortuj po ocenie rosnąco</option>
        <option value="name_m">Sortuj po nazwie malejąco</option>
        <option value="premiere_m">Sortuj po dacie premiery malejąco</option>
        <option value="rating_m">Sortuj po ocenie malejąco</option>
      </select>

      <select multiple [(ngModel)]="selectedGenres" class="form-control" id="genre" name="genre">
        <option *ngFor="let genre of genres" [value]="genre">{{genre}}</option>
      </select>
      <div>
        <button class="btn btn-primary" (click)="filterMovies()">Filtruj</button>
      </div>
    </div>
    <div class="movie-list">
      <ng-container *ngFor="let movie of movieList" class="movie-title-list">
        <div class="movie" (click)="goToDetails(movie.id!)">
          <div class="movie__rating">
            Oceny
            <div class="rating__count">
              Liczba Ocen {{movie.numberOfRatings}}
            </div>
            <div class="rating__stars">
              <ngb-rating [(rate)]="movie.rating" [max]="5" [readonly]="true"></ngb-rating>
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
  `,
  styleUrl: './movie-list.component.scss'
})
export class MovieListComponent {
  mms = inject(MovieMockService)
  genres: string[] = [`Dokument`, `Animacja`, `Fantasy`, `Horror`, `Akcja`]
  selectedGenres: string[] = [`Dokument`, `Animacja`, `Fantasy`, `Akcja`]
  searchedMovieName?: string = undefined
  searchedRating: number = 0
  sortMoviesBy: string = 'name';
  movieList: Movie[] = []

  constructor(private router: Router) {
    this.loadMovies()
  }

  loadMovies(): void {
    this.movieList = this.mms.getMovies()
      .filter(movie => {
        if (this.searchedMovieName) {
          return movie.name.includes(this.searchedMovieName)
        }else {
          return true
        }
      })
      .filter(movie => this.selectedGenres.includes(movie.genre))
      .filter(movie => movie.rating >= this.searchedRating)
      .sort((a, b) => {
        let multiplier = this.sortMoviesBy.endsWith('_m') ? -1 : 1;
        let property = this.sortMoviesBy.replace('_m', '');
        switch (property) {
          case 'name':
          case 'premiere':
            return multiplier * a[property].localeCompare(b[property]);
          case 'rating':
            return (a[property] < b[property] ? -1 : 1) * multiplier;
          default:
            return multiplier * a['name'].localeCompare(b['name']);
        }
      })
  }


  filterMovies() {
    this.loadMovies()
  }

  goToDetails(id: number ) {
    this.router.navigateByUrl(`movie/${id}`)
  }
}
