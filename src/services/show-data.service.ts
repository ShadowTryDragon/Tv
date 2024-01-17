import { Injectable } from '@angular/core';
import { Show } from '../show';

@Injectable()
export class ShowDataService {
  shows: Show[] = [];
  constructor() {
    this.shows.push(
      new Show(1, 'Code Geass, Lelouch of the Rebellion'),
      new Show(2, 'One Peace'),  
      new Show(3, 'Dragonball'),
      new Show(4, 'Bungo Stray Dogs'),
      new Show(5, 'Naruto')
      
      )

   }

}