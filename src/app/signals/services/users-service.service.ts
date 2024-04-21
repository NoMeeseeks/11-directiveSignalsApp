import { HttpClient } from '@angular/common/http';
import { Inject, Injectable, inject } from '@angular/core';
import { Observable, map, tap } from 'rxjs';
import { SingleUserResponse, User } from '../interfaces/user-request.interface';
import { response } from 'express';

@Injectable({
  providedIn: 'root'
})
export class UsersServiceService {

  private urlBase = 'https://reqres.in/api/users';
  private _http = inject(HttpClient);

  obtenerUsuarioPorId(id: number): Observable<User> {
    return this._http.get<SingleUserResponse>(`${this.urlBase}/${id}`).pipe(
      map(response => response.data),
      tap(console.log)
    );
  }
}
