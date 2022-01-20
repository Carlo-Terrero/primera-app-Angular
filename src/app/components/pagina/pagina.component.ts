import { Component, OnInit } from '@angular/core';

// Con estos servicios se recogen los datos introducidos por url
import { Router, ActivatedRoute, Params } from '@angular/router'

@Component({
  selector: 'app-pagina',
  templateUrl: './pagina.component.html',
  styleUrls: ['./pagina.component.css']
})
export class PaginaComponent implements OnInit {

  public nombre: String;
  public apellido: String;

  //Cargamos los servicios dentro de constructor
  constructor(
    private _route: ActivatedRoute, // Sacamos los parametros de la url.
    private _router: Router // Con este hacemos redirecciones a otras paginas.
  ) { 

    this.nombre = " "
    this.apellido = ""
  }

  ngOnInit(): void {
    
    /*Recogemos los parametros. Angular trabaja mucho con observables, que esperan una respuesta de un 
    servicio. Estoy puede se asíncrono o no. Recogeremos unos params que son unos objetos de tipo params*/
    this._route.params.subscribe((params: Params) => {
      /* console.log(params["nombre"]) */
      this.nombre = params["nombre"]
      this.apellido = params["apellido"]
    });
  }

  // Metodo para redireccionar al usuario ( Utilizamos el servicio antes instanciado)
  // Se puede hacer con cualquiera de las que tenemos hechas.
  redireccion(){
    //this._router.navigate(['/formulario'])
    this._router.navigate(['pagina-de-prueba', 'Carlos', 'Terrero'])
  }


}
