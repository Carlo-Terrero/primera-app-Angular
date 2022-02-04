/* Importamos el objeto Injectable que permite aplicar un decorador a la clase y 
cuando necesite usar el servicio no tengo que craar el objeto como tal.
En este servicio SI nos comunicaremos con el backend */
import { Injectable } from '@angular/core';

//Comunicarnos con el backend y manipular una mayor cantidad de datos
import { HttpClient, HttpHeaders } from '@angular/common/http';

//Es para ver los datos que nos devuelve la API
import { Observable } from 'rxjs'; 
import { Article } from '../models/article'; //Modelo 'objeto'
import { Global } from '../services/global' // Var/Json con la url de la api.

@Injectable()
export class ArticleService{

    public url: string;

    constructor(
        private _http: HttpClient  //Para hacer peticionesas ajax. Y lo cargamos en module.
    ){
        this.url = Global.url;
    }

    pruebas(){
        return "Soy el servicio de Article";
    }

    //Obtenemos los articulos una peticion ajax -- OJO -- Usa el Observable<any>
    getArticles():Observable<any>{
        return this._http.get(this.url+'articles')
    }

}