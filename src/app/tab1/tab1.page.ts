import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  //nombre="Erick";

  arregloComponentes = [
  {nombre:"Rest-Api RickMorty",ruta:"/rest"},
  {nombre:"Alimentos",ruta:"/rest2"}
  ];
  
  constructor() {}
} 
 