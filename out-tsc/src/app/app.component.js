import { __decorate } from "tslib";
import { Component } from '@angular/core';
const ELEMENT_DATA = [
    { gokPoging: 1, getal: 1 },
    { gokPoging: 2, getal: null },
];
let AppComponent = class AppComponent {
    constructor() {
        this.title = 'first-app';
        this.displayedColumns = ["gokPoging", "getal"];
        this.dataSource = ELEMENT_DATA;
        this.randomNummer = Math.floor((Math.random() * 100) + 1);
        this.aantalGokken = 10;
        this.aantalGokkenGedaan = 1;
        this.value = null;
        this.hint = "";
        this.nullBoodschap = "Je hebt nog geen nummer ingegeven...";
        this.errorMessage = "Ik zij het toch, je hebt nog geen nummer ingegeven...";
    }
    getalOK() {
        if (this.value === null) {
            this.getErrorMessage();
        }
        else if (this.value < this.randomNummer) {
            this.hint = "het gegeven getal is te laag. Kies opnieuw!";
            this.aantalGokken--;
            this.aantalGokkenGedaan++;
        }
        else if (this.value > this.randomNummer) {
            this.hint = "het gegeven getal is te hoog. Kies opnieuw!";
            this.aantalGokken--;
            this.aantalGokkenGedaan++;
        }
        else {
            this.hint = "Proficiat! Dit is het juiste getal!! Geef een nieuw getal in om te herbeginnen";
            this.herbeginSpel();
        }
        if (this.aantalGokken <= 0) {
            this.hint = "je hebt het spel verloren! Je kan herbeginnen LOOSER";
            this.herbeginSpel();
        }
    }
    herbeginSpel() {
        this.randomNummer = Math.floor((Math.random() * 100) + 1);
        this.aantalGokken = 10;
        this.aantalGokkenGedaan = 1;
        this.nullBoodschap = "Je hebt nog geen nummer ingegeven...";
    }
    getErrorMessage() {
        //this.errorMessage = "Ik zij het toch, je hebt nog geen nummer ingegeven...";
        return this.errorMessage;
    }
};
AppComponent = __decorate([
    Component({
        selector: 'app-root',
        templateUrl: './app.component.html',
        styleUrls: ['./app.component.css']
    })
], AppComponent);
export { AppComponent };
// import {Component} from '@angular/core';
// @Component({
//   selector: 'example-app',
//   template: `
//     <input [(ngModel)]="name" #ctrl="ngModel" required>
//     <p>Value: {{ name }}</p>
//     <p>Valid: {{ ctrl.valid }}</p>
//     <button (click)="setValue()">Set value</button>
//   `,
// })
// export class AppComponent {
//   name: string = '';
//   setValue() { this.name = 'Nancy'; }
// }
//# sourceMappingURL=app.component.js.map