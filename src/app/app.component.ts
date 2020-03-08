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

//counter=this.countService.seconds;

  displayedColumns: string[] = ["gokPoging", "getal"];
  dataSource = this.tabelGokGetallen;

  randomNummer: number = Math.floor((Math.random() * 100) + 1);
  aantalGokken: number = 10;
  aantalGokkenGedaan: number = 1;
  value: number = null;
  hint: string = "";
  nullBoodschap: string = "Geef een nieuw nummer in.";
  verlorenBoodschap: string;
  gewonnenBoodschap: string;
  gewonnen: boolean = false;
  verloren: boolean = false;
  cijferHint: string = "Het nieuwe getal is te hoog of te laag. Kies opnieuw."


  getalOK() {
    if (this.value === this.randomNummer) {
      this.tabelGokGetallen[this.aantalGokkenGedaan - 1].getal = this.value;
      this.gewonnenBoodschap = "Proficiat! Dit is het juiste getal!! klik op de Herbegin! button om opnieuw te spelen";
      this.gewonnen = true;
      this.tabelGokGetallen.length = this.aantalGokkenGedaan;
     
    }

    else if (this.aantalGokken <=1  && this.value!=null) {
      this.tabelGokGetallen[this.aantalGokkenGedaan - 1].getal = this.value;
      this.verlorenBoodschap="Het aantal beurten is op. Jammer, je bent verloren! "+
      "het juiste getal was "
      this.verloren = true;
      this.tabelGokGetallen.length = this.aantalGokkenGedaan;
    }

   else if (!this.gewonnen && !this.verloren && this.value!=null && (this.value > 100 || this.value <= 0)) {
      this.value=null;
      this.hint="";
    }

    
    else if (this.value < this.randomNummer && this.gewonnen ==false && this.value!=null) {
      this.hint = "het gegeven getal is te laag. ";
      this.aantalGokken--;
      this.aantalGokkenGedaan++;
      this.itemToevoegenAanTabel();
      this.value=null;

    }
    else if (this.value > this.randomNummer && this.gewonnen ==false && this.value!=null) {
      this.hint = "het gegeven getal is te hoog.";
      this.aantalGokken--;
      this.aantalGokkenGedaan++;
      this.itemToevoegenAanTabel();
      this.value=null;
    }
    
  }

  herbeginSpel() {
    this.randomNummer = Math.floor((Math.random() * 100) + 1);
    this.aantalGokken = 10;
    this.aantalGokkenGedaan = 1;
    this.gewonnen = false;
    this.verloren = false;
    this.nullBoodschap = "Geef een nieuw nummer in.";
    this.value = null;
    this.hint="";
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
  itemToevoegenAanTabel() {    
     this.tabelGokGetallen[this.aantalGokkenGedaan - 2].getal = this.value;
  }

}
