import { Component, OnInit } from '@angular/core';
import { AlertController, ToastController } from '@ionic/angular';
import { MoviesService } from 'src/app/servicios/movies.service';
import { ThemoviedbService } from 'src/app/servicios/themoviedb.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  results:any
  movies:any
  idMovies:any
  moviesStore:any
  isMovies=false
  constructor(
    private ThemoviedbService:ThemoviedbService,
    private MoviesService:MoviesService,
    private alertCtrl:AlertController,
    private toastController:ToastController
  ) { 
    this.
    results=""
  }

  ngOnInit() {
  }

  buscar(nombre:any){
     
    this.ThemoviedbService.buscarPelicula(nombre).subscribe({
      next:(res: { results: any; })=>{
        this.movies=res.results;
        console.log(this.movies);
        this.isMovies=true
      }
    })

  }

  obtenerDatos(id:any){
    this.idMovies=id
    this.moviesStore=this.movies.find((e:any) =>e.id==id)
    this.MoviesService.guardarPelicula(this.moviesStore).subscribe({
      next:(res: any)=>{
        console.log(res);
        this.alert("pelicula agregada con exito")
      }
    })
    
  }

  async alert(message: string) {
    const alert = await this.alertCtrl.create({
      cssClass: 'modal-delete',
      header: message,
      buttons: [
        {
          text: 'Ok',
          id: 'confirm-button',
        },
      ],
    });
    alert.present();
  }

    async toastAlert(message: string) {
    const toast = await this.toastController.create({
      message,
      duration: 2000
    });
    toast.present();
  }

}
