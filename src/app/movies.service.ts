import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private _HttpClient:HttpClient) {

   }

   getTrendingMovies():Observable<any>
   {
    return this._HttpClient.get('https://api.themoviedb.org/3/trending/movie/week?api_key=f1aca93e54807386df3f6972a5c33b50')
   }

}
