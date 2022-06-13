import { Component, Input } from '@angular/core';

import { Personaje } from '../interfaces/dbz.interface';

import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
})
export class AgregarComponent {
  
  @Input() nuevo: Personaje = {
    nombre: '',
    poder: 0,
  };
  
  constructor( private dbzService: DbzService) {}

  // @Output() onNuevoPersonaje: EventEmitter<Personaje> = new EventEmitter();

  agregar() {
    if (this.nuevo.nombre.trim().length === 0) {
      //Si nombre no tiene valor, salte de este método
      return;
    }
        
    //Método del servicio para agregar el personaje
    this.dbzService.agregarPersonaje( this.nuevo );

    // this.onNuevoPersonaje.emit( this.nuevo );

    this.nuevo = {
      nombre: '',
      poder: 0,
    };

  }
}
