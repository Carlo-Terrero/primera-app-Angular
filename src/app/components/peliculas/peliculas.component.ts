// SIEMPRE que se utilcen hooks, tienes que importalos e implementarlos en implements
import { Component, OnInit, DoCheck, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-peliculas', /* el selector ese editable aunque el componente se genere por comandos */
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.css']
})
export class PeliculasComponent implements OnInit, DoCheck, OnDestroy {

  public titulo: string;
  public peliculas: Array<any>; //Es un Array de cualquier cosa

  /* A pesar de que se parecn mucho estos dos metodos en el constructo no se le debe meter logica dentro, 
  eso seria dentro del OnInit. En el constructor sole se le da valor a las propiedades de la clase  y
  precargar cosas necesarias */
  constructor() {
    this.titulo = "Componente peliculas";
    this.peliculas = [
      {year:2022, title: "Spiderman 4", image: "https://e00-marca.uecdn.es/assets/multimedia/imagenes/2021/12/18/16398555270572.jpg"},
      {year:2020, title: "Vangadores endgame", image: "https://www.cinemascomics.com/wp-content/uploads/2021/09/vengadores-endgame-marvel-studios.jpg"},
      {year:2018, title: "Batman vs Superman", image: "https://i.ytimg.com/vi/eyATkmsSZJk/sddefault.jpg"},
      {year:2019, title: "Thor Ragnarok", image: "https://hipertextual.com/wp-content/uploads/2017/10/thor_ragnarok_taika_waititi.jpg"}
    ]
 
  }


  /* Este Methodo se ejecuta cuando se utiliza este componente(cuando es llamado) 
  y es cargado despues del construtor y luego el resto */
  ngOnInit(): void {
    console.log("componente on init inicializado");
    console.log(this.peliculas);
  }


  //Este methodo se ejecuta cuando se hace algun cambio en el componente o la app (constantemente)
  ngDoCheck(){
    console.log("El methodo DoCheck lanzado")
  }


  cambiarTitulo(){
    this.titulo = "El titulo ha sido cambiado";
  }


  //Este methodo nos avisa de que se va a eliminar el componente. Justo antes de eliminar la instancia de componente se ejecuta
  ngOnDestroy(){
    console.log("El componente se va a eliminar") //De la ejecucion instantanea que tiene
  }

}
