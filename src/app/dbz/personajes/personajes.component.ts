import { Component } from '@angular/core';

import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html'
})

export class PersonajesComponent {

  // @Input() personajes: Personaje[] =  [];
  get personajes() {
    return this.dbzService.personajes;
  } 

  //Esto se conoce como una inyección de dependencias
  constructor( private dbzService: DbzService ) {}

}
