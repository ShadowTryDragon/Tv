import { Component, OnInit } from '@angular/core';
import { ShowDataService } from '../../services/show-data.service';
import { Show } from '../../show';

@Component({
  selector: 'app-show-list',
  standalone: true,
  providers: [ShowDataService],
  templateUrl: './show-list.component.html',
  styleUrls: ['./show-list.component.css']
})
export class ShowListComponent implements OnInit {
  constructor(private showDataService: ShowDataService){
    
  }

  ngOnInit() {
  }
  get shows(): Show[] {
    return this.showDataService.shows;
  }
}