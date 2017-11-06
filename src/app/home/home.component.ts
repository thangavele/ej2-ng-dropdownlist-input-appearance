import { Component,ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'home',
  styleUrls: ['./home.component.css'],
  templateUrl: './home.component.html',
  encapsulation: ViewEncapsulation.None
  
})
export class HomeComponent {
  constructor() {
  }
  public data: Object[] = [
    { Id: 1, Game: 'Cricket' },
    { Id: 2, Game: 'Football' },
    { Id: 3, Game: 'Golf' },
    { Id: 4, Game: 'Hockey' },
    { Id: 5, Game: 'Snooker' },
    { Id: 6, Game: 'Tennis' }
  ];
  public fields: Object = { text: 'Game', value: 'Id' };
}
