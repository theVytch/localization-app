import { environment } from './../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Cidade } from './cidade.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CidadeService {

  baseUrl: String = environment.baseUrl;

  constructor(private http: HttpClient, private _snack: MatSnackBar) { }

  findAll(id_est: String):Observable<Cidade[]>{
    const url = `${this.baseUrl}cidades?estado=${id_est}`
    return this.http.get<Cidade[]>(url)
  }

  findByName(nome_cid: String):Observable<Cidade[]>{
    const url = `${this.baseUrl}cidades/filter?nome=${nome_cid}`
    console.log(url)
    return this.http.get<Cidade[]>(url)
  }
}
