import { Component, OnInit } from '@angular/core';
import { DetailsService } from '../services/details.service';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss']
})
export class FavoritesComponent implements OnInit {
  
  linkImg: string = "https://image.tmdb.org/t/p/w342";

  favorites: any = null;

  constructor(
    private detailsService: DetailsService,
  ) { }

  ngOnInit(): void {
    this.favorites = this.detailsService.favorites;
    console.log(this.favorites)
  }
}