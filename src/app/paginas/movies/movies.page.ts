import { Component, OnInit } from '@angular/core';
import { AlertController, ToastController } from '@ionic/angular';
import { MoviesService } from 'src/app/servicios/movies.service';
import { GenerosService } from 'src/app/servicios/generos.service';
@Component({
  selector: 'app-movies',
  templateUrl: './movies.page.html',
  styleUrls: ['./movies.page.scss'],
})
export class MoviesPage implements OnInit {

  movies:any
  idMovies:any
  isModalOpen = false;
  moviesStore: any;
  genres: any;
  constructor(
    private MoviesService:MoviesService,
    private alertCtrl:AlertController,
    private toastController:ToastController,
    private GenerosService:GenerosService,
  ) {this.genres=""}

  ngOnInit() {
    this.obtnerMovies()
  }

  obtnerMovies(){
    this.MoviesService.mostrarPelicula().subscribe({
      next:(res)=>{
        this.movies=res
      }
    })
  }
  obtnergeneros(){
    this.GenerosService.mostrargeneros().subscribe({
      next:(res)=>{
        this.genres=res
      }
    })
  }

  eliminarPelicula(id:any){
    this.idMovies=id
    this.MoviesService.eliminarPelicula(id).subscribe({
      next:(res)=>{
        console.log(res);
        this.obtnerMovies();
        //this.musicas=this.musicas.filter((e:any)=>e.estado=1)
        this.toastAlert("pelicula eliminada con exito")
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

  setOpen(isOpen: boolean) {
    this.isModalOpen = isOpen;
  }
  
}
