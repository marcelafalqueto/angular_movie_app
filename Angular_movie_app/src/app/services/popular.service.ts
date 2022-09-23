import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class PopularService {

  private url: string = 'https://api.themoviedb.org/3/movie/popular?api_key=3d29c53edcc7388defcbbcc43d1aa510';

  constructor(private http: HttpClient) { }

  get popularApi (): Observable<any> {
    return this.http.get<any>(this.url)
  }
}
