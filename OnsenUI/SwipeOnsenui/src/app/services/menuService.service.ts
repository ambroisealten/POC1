import { Injectable } from 'ngx-onsenui';
import {Observable, Subject} from 'rxjs';

@Injectable()
export class MenuService {
  subject = new Subject();
  get menu$(): Observable<any> {
    return this.subject.asObservable();
  }
  open() {
    this.subject.next();
  }
}
