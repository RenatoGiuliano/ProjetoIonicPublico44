import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TmdbService {

  private apiKey = 'c3ad1c660387e9f2838e02ebd5a2932f';
  private language = 'pt-BR';
  private url = 'https://api.themoviedb.org/3';

  constructor(private http: HttpClient) {}

  getFilmesPopulares(): Observable<any> {
    const endpoint = `${this.url}/movie/popular?api_key=${this.apiKey}&language=${this.language}`;
    return this.http.get<any>(endpoint);
  }

  buscarFilmes(query: string): Observable<any> {
    const endpoint = `${this.url}/search/movie?api_key=${this.apiKey}&language=${this.language}&query=${encodeURIComponent(query)}`;
    return this.http.get<any>(endpoint);
  }
}
