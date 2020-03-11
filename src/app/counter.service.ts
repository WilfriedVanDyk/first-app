import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';




@Injectable({
  providedIn: 'root'
})
export class CounterService {

private counter = 60;
  secondsSubject: Subject<number> = new Subject<number>();
  seconds = this.secondsSubject.asObservable();
  //wordt hier niet gebruikt maar in de typescript file waarin je dit subject gebruikt !!!
  //maar wordt hier  wel aangemaakt.
  

  tijdReset = () => {
   this.counter=60;    
  }

  interval = setInterval(() => {
    if(this.counter>=1){
    this.counter -= 1;}
    this.secondsSubject.next(this.counter);
  }, 1000);

  constructor() {
    // setInterval(() => {
    //   this.counter -= 1;
    //   this.secondsSubject.next(this.counter);
    //   this.tijdisOp();
    //   //console.log(this.seconds);
    // }, 1000);

    //this.interval;

  }


  // window.location.reload
  // window.alert
}
