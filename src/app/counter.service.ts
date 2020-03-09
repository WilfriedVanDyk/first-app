import { Injectable } from '@angular/core';
import { Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CounterService {


  private counter = 60;

  secondsSubject: Subject<number> = new Subject<number>();
  seconds = this.secondsSubject.asObservable(); 
  //wordt hier niet gebuikt maar in de typescript file waarin je dit subject gebruikt !!!
  //maar wordt hier  wel aangemaakjt.

   constructor() { 
    setInterval( () => {
      this.counter -= 1;
      this.secondsSubject.next(this.counter);
      //evaluate
    }, 1000);    
  }
// evaluate( () => {

// })))
// window.location.reload
// window.alert
}
