import {Component, inject} from '@angular/core';
import { CommonModule } from '@angular/common';
import {MovieMockService} from "../../../core/mocks/movie-mock.service";

@Component({
  selector: 'app-start-page',
  standalone: true,
  imports: [CommonModule],
  template: `
    <p>
      start-page works!
    </p>
  `,
  styleUrl: './start-page.component.scss'
})
export class StartPageComponent {
  mms = inject(MovieMockService)
  movieList: any[] = []
  constructor() {
    this.movieList = this.mms.getMovies()
  }
}
