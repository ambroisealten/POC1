import { Injectable } from 'ngx-onsenui';
import {Observable, Subject} from 'rxjs';

@Injectable()
export class MenuService {
  subject = new Subject();
  get menu$(): Observable<any> {
    this.subject.next();
    return this.subject.asObservable();
  }
  open() {
    console.log("Ici");
    console.log(this.subject);
    this.subject.next();
  }
}