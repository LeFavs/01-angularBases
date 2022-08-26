import { Component, Input,} from '@angular/core';

import { Character } from '../interface/mario-64.interface';

import { MarioService } from '../services/mario.service';
@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
})
export class AddComponent {

@Input()new: Character = {
    name: "",
    power: 0
  }

// @Output() onNewCharacter: EventEmitter <Character> = new EventEmitter();
constructor( private marioService: MarioService ){}

add(){
    if(this.new.name.trim().length == 0){
      alert("Name: Please introduce a valid name.");
      return;
    }if (this.new.power>100 || this.new.power<=0) {
      alert("Power: Your character needs a power range between 1 and 100 to be valid.");
      return;
    } else {
      console.log(this.new);
      // this.onNewCharacter.emit(this.new);
      this.marioService.addNewCharacter(this.new);
      this.new = {name: "", power:0};
    }
  }
}
