/* Este servicio NO se comunica con el back
1º Importamos el objeto Injectable que permite aplicar un decorador a la clase y cuando necesite usar el servicio no 
tengo que craar el objeto como tal. 
2º Luego importamos el modelo. */

import { Injectable } from '@angular/core';
import { Pelicula } from '../models/pelicula';

//Definimos el servicio. Con el servicion se llevamos los datos al componente donde se necesiten.
@Injectable()
export class PeliculaService{

    public peliculas: Pelicula[]

    constructor(){
        this.peliculas = [
            new Pelicula("Sing 2", 2021, "https://m.media-amazon.com/images/I/71cYOjYT-LL._SY355_.jpg"),
            new Pelicula("Lunáticos", 2015, "https://www.bizcochito.es/Films/Movil/tt14534992.jpg"),
            new Pelicula("The King's Man", 2019, "https://www.jotdown.es/wp-content/uploads/2021/12/Portada-2.jpg"),
        ]
    }

    holaMundo(){
        return 'Hola Mundo desde el servicio pelicula'
    }

    getPeliculas(){
        return this.peliculas;
    }
}