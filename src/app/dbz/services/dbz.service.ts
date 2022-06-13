import { Injectable } from '@angular/core';

import { Personaje } from '../interfaces/dbz.interface';

@Injectable()
export class DbzService {
  //Se le pone Guión bajo por estandar para indicar que es una propiedad privada
  private _personajes: Personaje[] = [
    {
      nombre: 'Goku',
      poder: 15000,
    },
    {
      nombre: 'Vegeta',
      poder: 7500,
    },
  ];

  /*Tener cuidado con esto porque los objetos 
    son mandados por referencia por eso se aplica lo siguiente:
    -Operador spread leer: https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Operators/Spread_syntax
    - [] => indican que es un arreglo
    - ... => Separa cada uno de los elementos independientes
     del arreglo y crea uno nuevo por así decirlo, esto es una buena práctica de JavaScript.
  */
  get personajes(): Personaje[] {
    return [...this._personajes];
  }

  //En los servicios también se pueden inyectar otros servicios
  constructor() { }
  
  //Método para agregar Personajes y redibujarlos en la aplicación.
  agregarPersonaje(personaje: Personaje) {
      this._personajes.push(personaje);
  }

}