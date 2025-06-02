import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpClientService {
  private baseUrl = 'https://api.themoviedb.org/3/movie/popular?api_key=c3ad1c660387e9f2838e02ebd5a2932f&language=pt-BR'; // substitua pela sua API

  constructor(private http: HttpClient) {}

  get<T>(endpoint: string, params?: any, headers?: any): Observable<T> {
    return this.http.get<T>(this.buildUrl(endpoint), {
      headers: this.buildHeaders(headers),
      params: this.buildParams(params)
    });
  }

  post<T>(endpoint: string, body: any, headers?: any): Observable<T> {
    return this.http.post<T>(this.buildUrl(endpoint), body, {
      headers: this.buildHeaders(headers)
    });
  }

  put<T>(endpoint: string, body: any, headers?: any): Observable<T> {
    return this.http.put<T>(this.buildUrl(endpoint), body, {
      headers: this.buildHeaders(headers)
    });
  }

  delete<T>(endpoint: string, headers?: any): Observable<T> {
    return this.http.delete<T>(this.buildUrl(endpoint), {
      headers: this.buildHeaders(headers)
    });
  }

  private buildUrl(endpoint: string): string {
    return `${this.baseUrl}/${endpoint}`;
  }

  private buildHeaders(headers?: any): HttpHeaders {
    let httpHeaders = new HttpHeaders();
    if (headers) {
      for (const key in headers) {
        httpHeaders = httpHeaders.set(key, headers[key]);
      }
    }
    return httpHeaders;
  }

  private buildParams(params?: any): HttpParams {
    let httpParams = new HttpParams();
    if (params) {
      for (const key in params) {
        httpParams = httpParams.set(key, params[key]);
      }
    }
    return httpParams;
  }
}


