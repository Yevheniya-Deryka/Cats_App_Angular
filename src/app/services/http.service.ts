import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment as env } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { APIResponse, Breed, Cat } from '../models';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  constructor(private http: HttpClient) {}

  getCatsList(limit: number, breed_ids?: string): Observable<APIResponse<Cat>> {
    const params = new HttpParams()
      .set('breed_ids', breed_ids || '')
      .set('limit', limit);

    return this.http.get<APIResponse<Cat>>(`${env.BASE_URL}images/search`, {
      params: params,
      headers: new HttpHeaders({
        'x-api-key': env.API_KEY
      })
    });
  }

  getBreedsList(): Observable<APIResponse<Breed>> {
    return this.http.get<APIResponse<Breed>>(`${env.BASE_URL}breeds`);
  }
}
