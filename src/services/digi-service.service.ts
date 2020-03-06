import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { DigiResults } from 'src/interfaces';

@Injectable({
  providedIn: 'root'
})
export class DigiServiceService {
  digiAPI: any;

  constructor(private http:HttpClient) {
    this.digiAPI = environment.digiURL;
   }

   getAllDigimon(): Observable<DigiResults>{
     return this.http
     .get<DigiResults>(`${this.digiAPI}`)
     .pipe(catchError(this._handleError));
   }

   getDigimonByName(name:string): Observable<DigiResults>{
    return this.http
    .get<DigiResults>(`${this.digiAPI}/name/${name}`)
    .pipe(catchError(this._handleError));
   }
   
   getDigimonById(id:string): Observable<DigiResults>{
    return this.http
    .get<DigiResults>(`${this.digiAPI}/id/${id}`)
    .pipe(catchError(this._handleError));
   }

   getDigimonByLevel(lvl:string): Observable<DigiResults>{
    return this.http
    .get<DigiResults>(`${this.digiAPI}/level/${lvl}`)
    .pipe(catchError(this._handleError));
   }


   private _handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` + `body was: ${error.error}`
      );
    }
    // return an observable with a user-facing error message
    return throwError('Something bad happened; please try again later.');
  }
}
