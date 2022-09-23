import { DocumentaryService } from './../services/documentary.service';
import { DetailsService } from './../services/details.service';
import { FamilyService } from './../services/family.service';
import { PopularService } from './../services/popular.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit {

  linkImg: string = "https://image.tmdb.org/t/p/w342/";

  public data: any;

  public movies: any = null;
  public moviesF: any = null;
  public moviesD: any = null;

  constructor(
    private popularService: PopularService,
    private familyService: FamilyService,
    private documentaryService: DocumentaryService,
    private detailsService: DetailsService,
  ) {    }

  ngOnInit(): void {
    this.popularMovie();
    this.familyMovie();
    this.documentaryMovie();
  }

  popularMovie (): void {
    this.popularService.popularApi.subscribe(
      res => {
        this.movies = res.results
      }
    )
  }

  familyMovie(): void {
    this.familyService.familyApi.subscribe(
      res => {
        this.moviesF = res.results
      }
    )
  }

  documentaryMovie(): void {
    this.documentaryService.documentaryApi.subscribe(
      res => {
        this.moviesD = res.results
      }
    )
  }

  getId(movie: any) {
    this.detailsService.getMovies(movie);
  }


  addFavorites(movie: any) {
    this.detailsService.addFavorites(movie);
  }
}

