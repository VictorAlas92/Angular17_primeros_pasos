import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-games',
  standalone: true,
  imports: [],
  template: `
    <h3>Los juegos favoritos de {{ username }}</h3>
    <ul>
      @for (game of games; track game.id) {
      <!-- //? duda con el id del for como
      //?funciona aun cuando yo pongo un id mas grande sigue haceindolo en orden */ -->
      <li>{{ game.name }}</li>
      }
    </ul>
  `,
  styles: ``,
})
export class GamesComponent {
  @Input() username = '';
  games = [
    {
      id: 1,
      name: 'horizon',
    },
    {
      id: 1,
      name: 'megaman',
    },
    {
      id: 3,
      name: 'fornite',
    },
  ];
}
