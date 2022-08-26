import { Injectable } from "@angular/core";

import { Character } from "../interface/mario-64.interface";


@Injectable()
export class MarioService{

    private _characters: Character[] = [
        {
          name: "Peach",
          power: 85
        },
        {
          name: "Fungi",
          power: 65
        }
      ];
    
    get characters(): Character[]{
        return [...this._characters];
        //Operador SPREAD means: separa cada uno de los elementos independientes del arreglo y crea uno nuevo.
    }
    
    constructor(){
        console.log("servicio inicializado");
    }

    addNewCharacter(character: Character){
        this._characters.push(character);
      }
}
