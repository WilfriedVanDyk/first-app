import { Component } from '@angular/core';
import { CounterService } from './counter.service';
import { Subject, Observable, Subscription } from 'rxjs';
import { ElementTabel} from './elementTabel';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'first-app';

  secondsLocal: number = 60;
  //secondsSubj: Observable<number>;
 
  tabelGokGetallen:Array<ElementTabel>;
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
      new ElementTabel(1,null),
      new ElementTabel(2,null),
      new ElementTabel(3,null),
      new ElementTabel(4,null),
      new ElementTabel(5,null),
      new ElementTabel(6,null),
      new ElementTabel(7,null),
      new ElementTabel(8,null),
      new ElementTabel(9,null),
      new ElementTabel(10,null),
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
