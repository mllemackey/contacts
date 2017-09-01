import { Injectable } from '@angular/core';
import {Observable, Observer } from 'rxjs';
import {Subject} from 'rxjs/Subject';

@Injectable()
export class PageTitleService {

    private pageTitleSource = new Subject();

    pageTitleAnnounces$ = this.pageTitleSource.asObservable();

    setTitle(title: string) {
        this.pageTitleSource.next(title);
    }

}
