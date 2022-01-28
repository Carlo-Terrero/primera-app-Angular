import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  /* 2 Formas diferentes de inicializar los argumentos */
  public title: string;
  public homeText = 'Bienvenido al Curso de Angular'

  constructor() { 
    this.title = 'Últimos articulos'
  }

  ngOnInit(): void {
  }

}
