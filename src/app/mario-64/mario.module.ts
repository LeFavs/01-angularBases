import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MainPageComponent } from './main-page/main-page.component';
import { CharactersComponent } from './characters/characters.component';
import { AddComponent } from './add/add.component';

import { MarioService } from './services/mario.service';




@NgModule({
  declarations: [
  MainPageComponent,
  CharactersComponent,
  AddComponent
  ],
  exports:[
    MainPageComponent,
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  providers: [
    MarioService
  ]
})
export class MarioModule { }
