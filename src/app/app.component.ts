import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'first-app';

  randomNummer: number = Math.floor((Math.random() * 100) + 1);
  aantalGokken: number = 10;  
  aantalGokkenGedaan: number = 1;
  value = null;
  hint: string = "";
  nullBoodschap: string = "Je hebt nog geen nummer ingegeven...";
  errorMessage: string = "Ik zij het toch, je hebt nog geen nummer ingegeven...";

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
}

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