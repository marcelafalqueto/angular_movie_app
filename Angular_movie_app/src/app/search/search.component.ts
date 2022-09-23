import { Component, OnInit } from '@angular/core';
import { ResultsEntity } from '../interface';
import { DetailsService } from '../services/details.service';
import { SearchService } from '../services/search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  // search: [] = [];

  linkImg: string = "https://image.tmdb.org/t/p/w342/";

  public search: any = null;

  constructor(
    private searchService: SearchService,
    private detailsService: DetailsService
  ) { }

  ngOnInit(): void {
  }

  find(search: any){
    // console.log(search.target.value);
    const searching = search.target.value
    if(searching && searching.trim() !== ''){
      this.searchService.searchMovies(searching).subscribe((dados =>this.search = dados.results));
        console.log(this.search)
    }
  }

  getId(movie: any) {
    this.detailsService.getMovies(movie);
  }
}
