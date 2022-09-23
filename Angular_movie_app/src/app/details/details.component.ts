import { Component, OnInit } from '@angular/core';
import { DetailsService } from './../services/details.service';


@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  linkImg: string = "https://image.tmdb.org/t/p/w342/";

  movie: any;

  constructor(
    private detailsService: DetailsService,
   ) { }

  ngOnInit(): void {
    this.detailsService.sendMovies().subscribe(
      res => {
        this.movie = res;
      }
    )
   }
}
