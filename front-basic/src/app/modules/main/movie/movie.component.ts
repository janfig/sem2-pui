import { Component, OnInit, Pipe, PipeTransform, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Movie, MovieMockService} from "../../../core/mocks/movie-mock.service";
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-movie',
  standalone: true,
  imports: [CommonModule],
  template: `
    <p>
    <div class = "center">
      <div class="card" style="width: 68rem;">
        <div class="card-body">
          <h1 class="card-title">{{movie?.name}}</h1>
          <h6 class="card-subtitle mb-2 text-body-secondary">{{year}} | {{movie?.duration}}h</h6>
          <p class="card-text">
            <br/>Opis filmu: {{movie?.description}}
          </p>
        </div>
      </div>
      <div class="card" style="width: 68rem;">
        <div class="container">
          <div class="row">
            <div class="col-sm">
              <div class = "galery">
                <iframe width="400" height="200" [src]=url title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
              </div>
            </div>
            <div class="col-sm">
              <ng-container *ngFor="let item of createRange(ratingRounded)">★</ng-container>
              <ng-container *ngFor="let item of createRange(5-ratingRounded!)">☆</ng-container>
              ({{movie?.numberOfRatings}} ocen)
              <br/>Scenariusz i reżyseria: {{movie?.director?.name}} {{movie?.director?.surname}}
              <br/>Kraj produkcji: {{movie?.country}}
              <br/>W rolach głównych: {{leadRoles}}
              <br/>Gatunek: {{movie?.genre}}
              <br/>Premiera: {{movie?.premiere}}
              <br/>Nagrody: {{movie?.awards}}
            </div>
          </div>
        </div>
      </div>
      <br/>
      <h3 class="card-title">Obsada</h3>
      <br/>
      <div class="card" style="width: 68rem;">
        <ul class="list-group list-group-flush">
          <li class="list-group-item" *ngFor="let actor of movie?.actors">
            {{actor?.name}} {{actor?.surname}} jako {{actor?.role}}
          </li>
        </ul>
      </div>
      <br/>
      <h3 class="card-title">Zdjęcia</h3>
      <br/>
      <div class = "galery">
        <img src={{movie?.gallery?.url}} alt={{movie?.gallery?.altText}}>
      </div>
      <br/>
      <h3 class="card-title">Komentarze</h3>
      <br/>
      <li class="list-group-item" *ngFor="let comment of movie?.comments">
        <div class="card text-bg-light mb-3" style="width: 68rem;">
          <div class="card-header">{{comment?.username}}</div>
          <div class="card-body">
            <h5 class="card-title">
              {{comment?.title}}
              <ng-container *ngFor="let item of createRange(roundRating(comment.stars))">★</ng-container>
              <ng-container *ngFor="let item of createRange(5-roundRating(comment.stars!))">☆</ng-container>
            </h5>
            <p class="card-text">{{comment?.content}}</p>
          </div>
          <div class="card-footer">
            <small class="text-body-secondary">{{comment?.date}}</small>
          </div>
        </div>
      </li>
    </div>
  `,
  styleUrl: './movie.component.scss'
})

export class MovieComponent{

  mms = inject(MovieMockService)
  movieList: any[] = []
  movie: Movie | undefined;
  year: String | undefined;
  url: SafeResourceUrl;
  ratingRounded: number | undefined;
  leadRoles: String | undefined;

  constructor(private route: ActivatedRoute, private sanitizer:DomSanitizer) {
    this.movieList = this.mms.getMovies()
    const routeParams = this.route.snapshot.paramMap;
    const id = Number(routeParams.get('id'));
    this.movie = this.mms.getMovieById(id)!
    this.year = this.movie.premiere.toString().substring(0,4)
    this.url = this.sanitizer.bypassSecurityTrustResourceUrl(this.movie.trailer);
    this.ratingRounded = this.roundRating(this.movie.rating)
    this.leadRoles = this.movie.actors[0].name + " " + this.movie.actors[0].surname + ", " + this.movie.actors[1].name + " " + this.movie.actors[1].surname
  }

  createRange(number: any){
    return new Array(number).fill(0)
      .map((n, index) => index + 1);
  }

  roundRating(rating: number){
    return Math.round(rating)
  }

}
