import { Component } from "@angular/core";

@Component({
    selector: 'app-hero',
    templateUrl: 'hero.component.html'
})
export class HeroComponent{
    public name: string = 'Homelander';
    public age: number = 32;

    getHero():string {
        return`
        ${this.name} - ${this.age}
        `
    }

    get capitalizeName ():string {
        return this.name.toUpperCase();
    }

    changeName ():void {
        this.name = 'Starlight';
    }
    changeAge ():void {
        this.age = 25;
    }
}

