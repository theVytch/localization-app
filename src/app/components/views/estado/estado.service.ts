import { environment } from './../../../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { Estado } from './estado.model';

@Injectable({
  providedIn: 'root'
})
export class EstadoService {

  baseUrl: String = environment.baseUrl;

  constructor(private http: HttpClient, private _snack: MatSnackBar) { }

  findAll():Observable<Estado[]>{
    const url = `${this.baseUrl}/estados`
    return this.http.get<Estado[]>(url)
  }

}
