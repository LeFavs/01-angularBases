import { Component } from '@angular/core';

import { Character } from '../interface/mario-64.interface';

import { MarioService } from '../services/mario.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',

})

export class CharactersComponent {

  // @Input()characters: Character[] = [];
  get characters(): Character[]{
      return this.marioService.characters;
    }
  
  constructor( private marioService: MarioService ){}
}
