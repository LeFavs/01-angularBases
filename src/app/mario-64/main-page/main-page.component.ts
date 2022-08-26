import { Component } from '@angular/core';

import { Character } from '../interface/mario-64.interface';

import { MarioService } from '../services/mario.service';


@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
})
export class MainPageComponent {
  
  new: Character = {
    name: "Favianix",
    power: 100,
  }

  // get characters(): Character[]{
  //   return this.marioService.characters;
  // }

  // addNewCharacter(character: Character){
  //   this.characters.push(character);
  // }

  constructor( private marioService: MarioService ){}
}
