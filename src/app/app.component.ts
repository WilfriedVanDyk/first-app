import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'first-app';

  tabelGokGetallen = [
    { gokPoging: 1, getal: null },
    { gokPoging: 2, getal: null },
    { gokPoging: 3, getal: null },
    { gokPoging: 4, getal: null },
    { gokPoging: 5, getal: null },
    { gokPoging: 6, getal: null },
    { gokPoging: 7, getal: null },
    { gokPoging: 8, getal: null },
    { gokPoging: 9, getal: null },
    { gokPoging: 10, getal: null },

  ];


  displayedColumns: string[] = ["gokPoging", "getal"];
  dataSource = this.tabelGokGetallen;

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
      this.itemToevoegenAanTabel();

    }
    else if (this.value > this.randomNummer) {
      this.hint = "het gegeven getal is te hoog. Kies opnieuw!";
      this.aantalGokken--;
      this.aantalGokkenGedaan++;
      this.itemToevoegenAanTabel();
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

    this.tabelGokGetallen = [
      { gokPoging: 1, getal: null },
      { gokPoging: 2, getal: null },
      { gokPoging: 3, getal: null },
      { gokPoging: 4, getal: null },
      { gokPoging: 5, getal: null },
      { gokPoging: 6, getal: null },
      { gokPoging: 7, getal: null },
      { gokPoging: 8, getal: null },
      { gokPoging: 9, getal: null },
      { gokPoging: 10, getal: null },

    ];
  }

  getErrorMessage() {
    return this.errorMessage;
  }

  itemToevoegenAanTabel() {
    this.tabelGokGetallen[this.aantalGokkenGedaan - 2].getal = this.value;
  }

}
