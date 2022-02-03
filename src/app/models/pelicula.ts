export class Pelicula{
   /*   
    Esto es lo mismo que lo de abajo  
   
    public title: string; 
    public year: number;
    public image: String;

    constructor(title: string, year: number, image: String){
        this.title = title;
        this.year = year;
        this.image = image;
    } */

    constructor(
        public title: string, 
        public year: number,
        public image: string
    ){}

}