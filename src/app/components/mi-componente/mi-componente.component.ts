import { Component } from "@angular/core";

@Component({
    selector: 'mi-componente',   /* Aqui se coloca el nombre de la etiqueta que se va a generar a nivel html(directiva) */
    /* hay dos formas de hacer un template, este es una, la cual se hac en el mismo component y la otra se hace aparte uniendose por url */
    /* template: `
        <h1> Hola mundo, soy Mi Componente </h1>
        <p> Este es mi primer componente </p>
        <p> Esto es bindig por interpolacion y se usa para mostrar los datos de las propiedades </p>
        <h1> {{titulo}} </h1>
        <h2> {{year}} </h2>
        <p> {{comentario}} </p>
    ` */
    templateUrl: './mi-componente.component.html'
})

export class MiComponent{

    /* Propiedades que creamos e indicamos el tipo de dato, y luego asignamos valor en el constructor */
    public titulo: string;
    public comentario: string;
    public year: number;
    public mostratPeliculas: boolean;

    constructor(){
        this.titulo = "Hola mundo, soy Mi Componente";
        this.comentario = "Este es mi primer componente";
        this.year = 2022;
        this.mostratPeliculas = true;

        console.log("Mi-Componente esta operativo")    
        console.log(this.titulo, this.comentario, this. year)
    }
    
    ocultarPeliculas(){
        this.mostratPeliculas = false;
    }

}