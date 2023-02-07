import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ThemoviedbService {

  urlApi: string= "https://api.themoviedb.org/3/search/movie?api_key=ebdcb0263960de0880214e632c7d2682&language=en-US&query="

  constructor(   private http:HttpClient) { }

  buscarPelicula(nombre:any){
    return this.http.get<any>(this.urlApi+nombre)
}
}
