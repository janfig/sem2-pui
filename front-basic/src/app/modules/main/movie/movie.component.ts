import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-movie',
  standalone: true,
  imports: [CommonModule],
  template: `
    <p>
      movie works!
    </p>
  `,
  styleUrl: './movie.component.scss'
})
export class MovieComponent {

}
