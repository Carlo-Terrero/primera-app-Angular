/*Para que el fichero funcione lo tengo que cargar dentro del app module */

import { ModuleWithProviders } from "@angular/core"; //Importamos modulo del router de angular
//Importamos las clases que nos van a permitir generar objetos de rutas y el modulo para la configuración
import { Routes, RouterModule } from '@angular/router'

/* Importamos los componentes que tendran su ruta (homo, formulario...)
-- OJO -- Ten en cuanta que se importa por el nombre de la clase de componente
y no por el que le damos en el selector */
import { HomeComponent } from "./components/home/home.component";
import { BlogComponent } from "./components/blog/blog.component";
import { FormularioComponent } from "./components/formulario/formulario.component";
import { PeliculasComponent } from "./components/peliculas/peliculas.component";
import { PaginaComponent } from "./components/pagina/pagina.component";

// Array de rutas o arry de Obj de tipo Routes (configuracion de las rutas que se quieran crear). Los Obj son Json
const appRoute: Routes = [
    {path: '', component: HomeComponent},
    {path: 'home', component: HomeComponent},
    {path: 'blog', component: BlogComponent},
    {path: 'formulario', component: FormularioComponent},
    {path: 'peliculas', component: PeliculasComponent},
    {path: 'pagina-de-prueba', component: PaginaComponent}
]

// Exportar el modulo de rutas
export const appRoutingProviders: any[] = []; // -> esto es para establecerlo como un servicio
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoute);

