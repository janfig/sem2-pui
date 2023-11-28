import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-movie-list',
  standalone: true,
  imports: [CommonModule],
  template: `
    <p>
      movie-list works!
    </p>
  `,
  styleUrl: './movie-list.component.scss'
})
export class MovieListComponent {

}
