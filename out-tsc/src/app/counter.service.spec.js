import { TestBed } from '@angular/core/testing';
import { CounterService } from './counter.service';
describe('CounterService', () => {
    let service;
    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(CounterService);
    });
    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=counter.service.spec.js.map