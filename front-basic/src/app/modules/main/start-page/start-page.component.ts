import {Component, inject} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MovieMockService} from "../../../core/mocks/movie-mock.service";
import {NgbCarousel, NgbPagination, NgbSlide} from "@ng-bootstrap/ng-bootstrap";
import {RouterLink} from "@angular/router";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-start-page',
  standalone: true,
  imports: [CommonModule, NgbSlide, NgbCarousel, RouterLink, NgbPagination, FormsModule],
  template: `
    <div class="home-page">
      <div class="carousel-div">
        <ngb-carousel
          #carousel
          [interval]="5000"
          [pauseOnHover]="pauseOnHover"
          [pauseOnFocus]="pauseOnFocus"
        >
          <ng-template ngbSlide *ngFor="let movieC of movieListCarousel; index as i">
            <div class="carousel-caption">
              <h3>{{movieC.name}}</h3>
            </div>
            <a routerLink="/movie/{{movieC.id}}"

            >
              <div class="picsum-img-wrapper">
                <img [src]="movieC.gallery.url" />
              </div>
            </a>
          </ng-template>
        </ngb-carousel>
      </div>
      <div class="cards">

        <ng-container *ngFor="let movie of paginateData">
          <div class="card" style="width: 18rem;">
            <img class="card-img-top" [src]="movie.gallery.url">
            <div class="card-body">
              <h5 class="card-title">{{movie.name}}</h5>
              <p class="card-text">{{movie.description}}</p>
              <a routerLink="/movie/{{movie.id}}" class="btn btn-primary card-button">Poznaj szczegóły</a>
            </div>
          </div>
        </ng-container>
      </div>
      <div class="pagination-controlls">
        <ngb-pagination
          [collectionSize]="collectionSize"
          [(page)]="page"
          [pageSize]="pageSize"
          (pageChange)="getData()"
          [maxSize]="5"
          [rotate]="true"
        >
        </ngb-pagination>

        <select class="form-select" style="width: auto" [(ngModel)]="pageSize" (ngModelChange)="getData()">
          <option [ngValue]="2">2 items per page</option>
          <option [ngValue]="3">3 items per page</option>
          <option [ngValue]="4">4 items per page</option>
        </select>
      </div>
    </div>

  `,
  styleUrl: './start-page.component.scss'
})
export class StartPageComponent {
  mms = inject(MovieMockService)
  movieList: any[] = []
  movieListCarousel: any[] = []

  pauseOnHover = true;
  pauseOnFocus = true;

  paginateData: any[] = [];
  page = 1;
  pageSize = 3;
  collectionSize = this.mms.movieList.length;

  constructor() {
    this.movieList = this.mms.getMovies()
    this.movieListCarousel = this.movieList.sort(function () {
      return 0.5 - Math.random()
    }).slice(0, 5)

    this.getData()
  }

  getData(){
    this.paginateData =  this.movieList
      .slice((this.page - 1) * this.pageSize, (this.page - 1) * this.pageSize + this.pageSize);
  }
}
