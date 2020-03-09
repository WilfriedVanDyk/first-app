import { Injectable } from '@angular/core';
import { Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CounterService {

 // seconds: number = 60;
  private counter = 60;

  secondsSubject: Subject<number> = new Subject<number>();
  seconds = this.secondsSubject.asObservable(); 
  //wordt hier niet gebuikt maar in de typescript file waarin je dit subject gebruikt !!!
  //maar wordt hier  wel aangemaakjt.

   constructor() { 

  //   setInterval(() => {
  //     this.seconds-1;
      
  //   }, 1000);
  //dit werkt niet want er wordt enkel de beginwaarde meegegeven. je moet een subject maken om daarop te abonneren met een observable in de 
  //andere component.
  //hieronder verander je de waarde

    setInterval( () => {

      this.counter-1;
      //this.seconds.next(this.counter);
      this.secondsSubject.next(this.counter);
    }, 1000);    
  }
}
