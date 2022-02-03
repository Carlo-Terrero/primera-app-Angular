//De esta manera se crean las pipes. Tienes que importarla al app.module.ts e implementarla en declarations.
// En las pipes se puede poner toda la logica que quieras y realizar los cambios que quieras
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'espar'
})

export class EsParPipe implements PipeTransform{

    transform(value: any){

        var espar = " no un año par"
        if(value % 2 == 0){
            espar = " es un año par"
        }
        return 'El años: ' + value + espar;
    }
}