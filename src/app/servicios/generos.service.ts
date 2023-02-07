import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GenerosService {

  urlApi: string= "https://api.themoviedb.org/3/genre/list?api_key=ebdcb0263960de0880214e632c7d2682&language=en-US="

  constructor(   private http:HttpClient) { }

  mostrargeneros(){
    return this.http.get<any>(this.urlApi+'genres')
  }
}
