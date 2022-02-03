import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// Esta es la importacion de las rutas que hemos hecho
import {routing, appRoutingProviders } from './app.routing'

import { AppComponent } from './app.component';
import { MiComponent } from './components/mi-componente/mi-componente.component';
import { PeliculasComponent } from './components/peliculas/peliculas.component';
import { PruebasComponent } from './components/pruebas/pruebas.component';
import { HeaderComponent } from './components/header/header.component';
import { SliderComponent } from './components/slider/slider.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { BlogComponent } from './components/blog/blog.component';
import { FormularioComponent } from './components/formulario/formulario.component';
import { PaginaComponent } from './components/pagina/pagina.component';
import { ErrorComponent } from './components/error/error.component';
import { PeliculaComponent } from './components/pelicula/pelicula.component'
import { EsParPipe } from './pipes/espar.pipe';

@NgModule({
  declarations: [
    AppComponent,
    MiComponent,
    PeliculasComponent,
    PruebasComponent,
    HeaderComponent,
    SliderComponent,
    SidebarComponent,
    FooterComponent,
    HomeComponent,
    BlogComponent,
    FormularioComponent,
    PaginaComponent,
    ErrorComponent,
    EsParPipe,
    PeliculaComponent  // agregamos el componente y lo podemos agragar donde yo quiera
  ],
  imports: [ // Aqui se cargan los modulos que modifican el funcionamiento global del framework(agregamos routing)
    BrowserModule,
    routing
  ],
  //En providers se cargan los servicios
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
