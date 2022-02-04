export class Article{
    constructor(
        public _id: string, //Así nos lo devuelve mongo
        public title: string,
        public content: string,
        public date: any,
        public image: string
    ){}
}

