import { Injectable } from '@angular/core';
import { Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CounterService {

  private counter = 60;

  secondsSubject: Subject<number> = new Subject<number>();
  seconds = this.secondsSubject.asObservable();

  constructor() { 
    setInterval(() => {
      this.counter-1;
      this.secondsSubject.next(this.counter);
    }, 1000);
    
  }

  
  
}
