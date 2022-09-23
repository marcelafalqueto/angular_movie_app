import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(
    private http: HttpClient
  ) { }

  public searchMovies(search:string): Observable<any>{
    return this.http.get<any>(`https://api.themoviedb.org/3/search/movie?api_key=3d29c53edcc7388defcbbcc43d1aa510&query=${search}`)
  }
}
