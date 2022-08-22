import { Component } from '@angular/core';
@Component({
    selector: 'app-contador',
    template:`
        <h1>{{title}}</h1>
        <h3>The base is: <strong>{{base}}</strong></h3>
        <button (click)='modifyValue(base);'>+ {{base}}</button>
        <span>{{number}}</span>
        <button (click)='modifyValue(-base)'>- {{base}}</button>
    `
})
export class ContadorComponent{

    public title: string = 'Contador App';
    public number: number = 5;
    public base:number = 5;

    modifyValue( value: number ){
        this.number += value;
    }
}