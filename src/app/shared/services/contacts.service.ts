import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Contact} from '../contact.model';
import {Observable, Observer } from 'rxjs';

@Injectable()
export class ContactsService {

  constructor(private http: HttpClient) { }

  public getContacts() {
      return this.http.get<any[]>('http://localhost:8000/contacts.php');
  }
  public addContact(contact: Contact){
      return this.http.post('http://localhost:8000/contacts-add.php', {
          firstName: contact.firstName,
          lastName: contact.lastName,
          email: contact.email
      });
  }

  public editContact(contact: Contact){
      return this.http.put('http://localhost:8000/contacts-edit.php', {
          id: contact.id,
          firstName: contact.firstName,
          lastName: contact.lastName,
          email: contact.email
          }
      );
  }

  removeContact(contact: Contact){
      return new Observable((o: Observer<any>) => {
          setTimeout(() => {
              o.next(contact);
              return o.complete();
          },1000);
      });
  }

}
