
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DetailsService {

  favorites: any[] = [];

  private details = new BehaviorSubject<any>(null);

  constructor(
    private http: HttpClient
  ) {  }

  getMovies(movie: any) {
    this.details.next(movie);
  }

  sendMovies(): Observable<any> {
    return this.details.asObservable()
  }

  searchMovies(search:string): Observable<any>{
    return this.http.get<any>(`https://api.themoviedb.org/3/search/movie?api_key=3d29c53edcc7388defcbbcc43d1aa510&query=${search}`)
  }

  addFavorites(movie: any) {
    this.favorites.push(movie);
  }

}
