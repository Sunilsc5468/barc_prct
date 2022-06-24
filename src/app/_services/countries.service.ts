import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map, catchError, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  constructor(private http: HttpClient) {}

  getCountries(): Observable<any> {
    return this.http.get(`${environment.apiUrl}countries`).pipe(
      map((data: any) => {
        return data;
      }),
      catchError((error) => {
        return throwError('Something went wrong!');
      })
    );
  }

  getSummary(): Observable<any> {
    return this.http.get(`${environment.apiUrl}summary`).pipe(
      map((data: any) => {
        return data;
      }),
      catchError((error) => {
        return throwError('Something went wrong!');
      })
    );
  }
}
