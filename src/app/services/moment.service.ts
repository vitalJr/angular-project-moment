import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environment/environment';
import { Response } from '../interfaces/Response';
import { Moment } from '../interfaces/Moment';

@Injectable({
  providedIn: 'root',
})
export class MomentService {
  private baseApiUrl = environment.baseApiUrl;
  private apiUrl = `${this.baseApiUrl}/moments`;

  constructor(private http: HttpClient) {}

  getMoments = (): Observable<Moment[]> => {
    return this.http.get<Moment[]>(this.apiUrl);
  };

  getMoment = (id: number): Observable<Moment> => {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Moment>(url);
  };

  createMoment = (formData: FormData): Observable<FormData> => {
    return this.http.post<FormData>(this.apiUrl, formData);
  };

  removeMoment = (id: number) => {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete(url);
  };

  update = (id: number, formData: FormData): Observable<FormData> => {
    const url = `${this.apiUrl}/${id}`;
    return this.http.put<FormData>(url, formData);
  };
}
