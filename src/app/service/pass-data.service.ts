import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PassDataService {

    private subject = new Subject<string[]>();

    constructor() {}

    passData(res: string[]) {
        this.subject.next(res);
    }

    getData(): Observable<string[]> {
        return this.subject.asObservable();
    }
}
