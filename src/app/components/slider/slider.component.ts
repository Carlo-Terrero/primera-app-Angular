import { Component,Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {

  /* Con @Input() gestionamos los datos introducidos al componente */
  @Input() nombre:string;

  constructor() {
    this.nombre = ' ';
   }

  ngOnInit(): void {
  }

}
