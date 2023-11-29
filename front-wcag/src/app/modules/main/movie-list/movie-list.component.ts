import {Component, inject} from '@angular/core';
import { CommonModule } from '@angular/common';
import {Movie, MovieMockService} from "../../../core/mocks/movie-mock.service";
import {Router} from "@angular/router";
import {FormsModule} from "@angular/forms";
import {NgbRating} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-movie-list',
  standalone: true,
  imports: [CommonModule, FormsModule, NgbRating],
  template: `
      <div class="movie-list-page">
          <div class="movie-filter pb-2 pt-3 my-4 shadow d-flex">
              <div class="movie-filter-filers d-flex justify-content-evenly pe-4">
                  <div class="card p-3 remove-bootstrap-style">
                      <label for="movie_name" class="form-label remove-bootstrap-style">Szukaj filmu</label>
                      <input type="text" class="form-control remove-bootstrap-style" id="movie_name"
                             placeholder="Wpisz nazwę filmu"
                             [(ngModel)]="searchedMovieName">
                  </div>
                  <div class="remove-bootstrap-style card p-3">
                      <label for="moviesSort" class="form-label remove-bootstrap-style">Ocena</label>
                      <select class="form-control remove-bootstrap-style" [(ngModel)]="selectedRating"
                              name="moviesSort">
                          <option value="0">Wszystkie</option>
                          <option value="1">*</option>
                          <option value="2">**</option>
                          <option value="3">***</option>
                          <option value="4">****</option>
                          <option value="5">*****</option>
                      </select>
                  </div>
                  <div class="card p-3 remove-bootstrap-style">
                      <label for="genre" class="form-label remove-bootstrap-style">Gatunek</label>
                      <select [(ngModel)]="selectedGenres" class="form-select remove-bootstrap-style" id="genre"
                              name="genre">
                          <option *ngFor="let genre of genres" [value]="genre">{{genre}}</option>
                      </select>
                  </div>
                  <div class=" card p-3 remove-bootstrap-style">
                      <label for="moviesSort" class="form-label remove-bootstrap-style">Sortowanie</label>
                      <select class="form-control remove-bootstrap-style" [(ngModel)]="sortMoviesBy" name="moviesSort">
                          <option value="name">Sortuj po nazwie rosnąco</option>
                          <option value="premiere">Sortuj po dacie premiery rosnąco</option>
                          <option value="rating">Sortuj po ocenie rosnąco</option>
                          <option value="name_m">Sortuj po nazwie malejąco</option>
                          <option value="premiere_m">Sortuj po dacie premiery malejąco</option>
                          <option value="rating_m">Sortuj po ocenie malejąco</option>
                      </select>
                  </div>
              </div>

              <div class="p-4 ">
                  <button class="btn btn-primary filter__button" (click)="filterMovies()">Filtruj</button>
              </div>
          </div>
          <div class="movie-list">
              <ng-container *ngFor="let movie of movieList" class="movie-title-list">
                  <div class="movie row mb-3 p-3 rounded  shadow justify-content-between"
                       (click)="goToDetails(movie.id!)">
                      <div class=" col-2">
                          <h4 class="title">
                              Oceny
                          </h4>
                          <div class=" pb-3">
                              Liczba Ocen <br>{{movie.numberOfRatings}}
                          </div>

                          <div class="">
                              Ocena <br>
                              <ngb-rating [(rate)]="movie.rating" [max]="5" [readonly]="true"></ngb-rating>
                          </div>
                      </div>
                      <div class="col-8">
                          <h2 class="title">
                              {{movie.name}}
                          </h2>

                          <div class=" pb-3">
                              {{movie.description}}
                          </div>
                          <div class="">
                              Gatunek: {{movie.genre}}
                          </div>
                          <div class="">
                              Premiera: {{movie.premiere}}
                          </div>
                      </div>
                      <div class=" col">
                          <img [src]="movie.gallery.url" class="img-fluid" [alt]="movie.gallery.altText">
                      </div>
                  </div>
              </ng-container>
          </div>
      </div>
  `,
  styleUrl: './movie-list.component.scss'
})
export class MovieListComponent {
  mms = inject(MovieMockService)
  genres: string[] = ['Wszystkie',`Dokument`, `Animacja`, `Fantasy`, `Horror`, `Akcja`]
  selectedGenres: string[] = ['Wszystkie']
  searchedMovieName?: string = undefined
  selectedRating: number = 0
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
        } else {
          return true
        }
      })
      .filter(movie => this.selectedGenres.includes('Wszystkie')? true:this.selectedGenres.includes(movie.genre))
      .filter(movie => movie.rating >= this.selectedRating)
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

  goToDetails(id: number) {
    this.router.navigateByUrl(`movie/${id}`)
  }
}
