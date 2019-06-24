import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private options = { headers: new HttpHeaders().set('Content-Type', 'application/json') };

  constructor(private httpClient: HttpClient) { }

  public get(url: string, params: HttpParams = new HttpParams()): Observable<any> {
    return this.httpClient.get(url, { params }).pipe(catchError(this.formatErrors));
  }

  public post(url: string, body: object = {}): Observable<any> {
    return this.httpClient
      .post(url, JSON.stringify(body), this.options)
      .pipe(catchError(this.formatErrors));
  }

  public formatErrors(error: any): Observable<any> {
    return throwError(error);
  }
}
