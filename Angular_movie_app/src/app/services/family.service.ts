import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FamilyService {

  private url: string = 'https://api.themoviedb.org/3/discover/movie?api_key=3d29c53edcc7388defcbbcc43d1aa510&with_genres=10751';

  constructor(private http: HttpClient) { }

  get familyApi (): Observable<any> {
    return this.http.get<any>(this.url)
  }
}



