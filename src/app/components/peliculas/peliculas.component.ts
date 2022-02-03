// SIEMPRE que se utilcen hooks, tienes que importalos e implementarlos en implements
import { Component, OnInit, DoCheck, OnDestroy } from '@angular/core';
import { Pelicula } from '../../models/pelicula';

@Component({
  selector: 'app-peliculas', /* el selector es editable aunque el componente se genere por comandos */
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.css']
})
export class PeliculasComponent implements OnInit, DoCheck, OnDestroy {

  public pelifab: any;
  public titulo: string;
  // public peliculas: Array<any>; //Es un Array de cualquier cosa
  // public peliculas: Array<Pelicula> ya que tenemos el objeto pelicula tambien se puede hacer así
  // Pero tambien se puede hacer así
  public peliculas: Pelicula[];
  public fecha: any;

  /* A pesar de que se parecn mucho estos dos metodos en el constructo no se le debe meter logica dentro, 
  eso seria dentro del OnInit. En el constructor sole se le da valor a las propiedades de la clase  y
  precargar cosas necesarias */
  constructor() {
    this.pelifab = '';
    this.titulo = "Componente peliculas";
    this.peliculas = [
      new Pelicula("Spider-Man: No Way Home", 2021, "https://i.blogs.es/cb2ce6/spiderman-no-way-home-cartel/1366_2000.jpeg"),
      new Pelicula("Venom", 2018, "https://depor.com/resizer/vod5Glu5S--OQLDKvOcYnmISghQ=/1200x675/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/Y653K6IYRJGCBKBSYXR36COJD4.jpg"),
      new Pelicula("Guardianes de la Galaxia", 2018, "https://as01.epimg.net/meristation/imagenes/2021/10/12/noticias/1634031467_926414_1634031548_noticia_normal.jpg"),
      {year:2022, title: "Spiderman 4", image: "https://e00-marca.uecdn.es/assets/multimedia/imagenes/2021/12/18/16398555270572.jpg"},
      {year:2020, title: "Vangadores endgame", image: "https://www.cinemascomics.com/wp-content/uploads/2021/09/vengadores-endgame-marvel-studios.jpg"},
      {year:2018, title: "Batman vs Superman", image: "https://i.ytimg.com/vi/eyATkmsSZJk/sddefault.jpg"},
      {year:2019, title: "Thor Ragnarok", image: "https://hipertextual.com/wp-content/uploads/2017/10/thor_ragnarok_taika_waititi.jpg"}
    ]
    this.fecha = new Date(2022, 2, 3)
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

  favorita(pelicula: Pelicula){
    this.pelifab = pelicula;
  }

}
