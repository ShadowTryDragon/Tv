import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import 'zone.js';
import { ShowListComponent } from './components/show-list/show-list.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ShowListComponent],
  template: 
  `
  
 <h1> <app-show-list></app-show-list> </h1>

  `,
})
export class App {
  name = 'Angular';
}

bootstrapApplication(App);
