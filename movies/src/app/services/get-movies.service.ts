import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Movi } from '../models/Movie';
import { TheaterShowTime } from '../models/TheaterShowTime';

@Injectable({
  providedIn: 'root'
})
export class GetMoviesService {

  constructor(private http: HttpClient) {
}

public getMovies(): Observable<Movi[]> {
    return this.http.get<Movi[]>("./assets/movie_metadata.json");
}

public getTheaterShowtimes(): Observable<TheaterShowTime[]> {
  return this.http.get<TheaterShowTime[]>("./assets/theater_showtimes.json");
}

}
