import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent {

  heroes: string[] = ["Starlight", "Homelander", "Queen Mave", "Deep", "Atrain", "Night Owl", "Liberty"];
  deletedHero: string = "";
  poppedHeroes: string[] = [];

  deleteHero(): string {
    console.log("Deleting...");
    this.deletedHero = this.heroes.pop() || "";
    this.poppedHeroes.push(this.deletedHero);
    console.log(this.poppedHeroes);
    return this.deletedHero;
  }

  addBackHero() {
    console.log("Adding...");
    this.heroes.push(this.poppedHeroes.pop() || "");
    this.deletedHero = this.poppedHeroes[this.poppedHeroes.length - 1];
  }
}
