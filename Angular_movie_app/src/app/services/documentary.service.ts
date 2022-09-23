import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DocumentaryService {

  private url: string = 'https://api.themoviedb.org/3/discover/movie?api_key=3d29c53edcc7388defcbbcc43d1aa510&with_genres=99';

  constructor(private http: HttpClient) { }

  get documentaryApi (): Observable<any> {
    return this.http.get<any>(this.url)
  }
}


