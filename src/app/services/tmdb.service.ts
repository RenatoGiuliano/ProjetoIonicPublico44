import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TmdbService {

  private apiUrl = 'https://api.themoviedb.org/3/movie/popular';
  private apiKey = 'c3ad1c660387e9f2838e02ebd5a2932f';
  private language = 'pt-BR';

  constructor(private http: HttpClient) {}

  getFilmesPopulares(): Observable<any> {
    const url = `${this.apiUrl}?api_key=${this.apiKey}&language=${this.language}`;
    return this.http.get<any>(url);
  }
}
