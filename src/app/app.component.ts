import { Component } from '@angular/core';
import { CounterService } from './counter.service';
import { Subject, Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'first-app';

  secondsLocal: number = 60;
  //secondsSubj: Observable<number>;
 
  tabelGokGetallen;
  service: CounterService;
 

  randomNummer: number;
  aantalGokken: number;
  aantalGokkenGedaan: number;
  value: number;
  hint: string ;
  nullBoodschap: string;
  verlorenBoodschap: string;
  gewonnenBoodschap: string;
  gewonnen: boolean;
  verloren: boolean;
  eersteGok: boolean;
  cijferHint: string;



  constructor(counterService: CounterService) {
    this.service = counterService;
    // counterService.secondsSubject.subscribe((argumentSeconds) => {
    //   this.secondsLocal = argumentSeconds;
    //});
    this.Init();
  }

  Init = () =>{

    this.service.tijdReset();

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

    this.randomNummer = Math.floor((Math.random() * 100) + 1);
    this.aantalGokken = 10;
    this.aantalGokkenGedaan = 1;
    this.value = null;
    this.hint = "";
    this.nullBoodschap = "Geef een nieuw nummer in.";
    this.verlorenBoodschap;
    this.gewonnenBoodschap;
    this.gewonnen = false;
    this.verloren = false;
    this.eersteGok = true;
    this.cijferHint= "Het nieuwe getal is te hoog of te laag. Kies opnieuw."
  }

  displayedColumns: string[] = ["gokPoging", "getal"];
  dataSource = this.tabelGokGetallen;

  
  getalOK = () => {
    if (this.eersteGok) {
      this.service.tijdReset();
      this.eersteGok = false;
    }
    this.service.secondsSubject.subscribe((argumentSeconds) => {
      this.secondsLocal = argumentSeconds;
    });



    if (this.value === this.randomNummer) {
      this.tabelGokGetallen[this.aantalGokkenGedaan - 1].getal = this.value;
      this.gewonnenBoodschap = "Proficiat! Dit is het juiste getal!! klik op de Herbegin! button om opnieuw te spelen";
      this.gewonnen = true;
      this.tabelGokGetallen.length = this.aantalGokkenGedaan;
    }
    else if (this.secondsLocal <= 0) {
      this.verlorenBoodschap = "je tijd is op. Jammer, je bent verloren! " +
        "het juiste getal was "
      this.verloren = true;
      this.tabelGokGetallen.length = this.aantalGokkenGedaan;
    }

    else if (this.aantalGokken <= 1 && this.value != null) {
      this.tabelGokGetallen[this.aantalGokkenGedaan - 1].getal = this.value;
      this.verlorenBoodschap = "Het aantal beurten is op. Jammer, je bent verloren! " +
        "het juiste getal was "
      this.verloren = true;
      this.tabelGokGetallen.length = this.aantalGokkenGedaan;
    }

    else if (!this.gewonnen && !this.verloren && this.value != null && (this.value > 100 || this.value <= 0)) {
      this.value = null;
      this.hint = "";
    }


    else if (this.value < this.randomNummer && this.gewonnen == false && this.value != null) {
      this.hint = "het gegeven getal is te laag. ";
      this.aantalGokken--;
      this.aantalGokkenGedaan++;
      this.itemToevoegenAanTabel();
      this.value = null;

    }
    else if (this.value > this.randomNummer && this.gewonnen == false && this.value != null) {
      this.hint = "het gegeven getal is te hoog.";
      this.aantalGokken--;
      this.aantalGokkenGedaan++;
      this.itemToevoegenAanTabel();
      this.value = null;
    }
  }


  counterOpNull = () => {
    this.verloren = true;
    this.verlorenBoodschap = "je tijd is op. Jammer, je bent verloren! " +
    "het juiste getal was "
  
  this.tabelGokGetallen.length = this.aantalGokkenGedaan;
  }

  itemToevoegenAanTabel = () => {
    this.tabelGokGetallen[this.aantalGokkenGedaan - 2].getal = this.value;
  }

}
