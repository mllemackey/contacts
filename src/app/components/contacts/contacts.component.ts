import {Component, Injector} from '@angular/core';
import { ContactsService } from "../../shared/services/contacts.service";
import { HttpErrorResponse } from "@angular/common/http";
import { Contact } from "../../shared/contact.model";
import { Observable } from 'rxjs/Observable';

@Component({
    selector: 'app-contacts',
    templateUrl: './contacts.component.html'
})
export class ContactsComponent{

    private contacts: any = [];
    private filter: string = '';
    private contactsService: ContactsService;

    constructor( private injector: Injector ){

        this.contactsService = this.injector.get(ContactsService);
        this.contactsService.getContacts().subscribe(data => {
            this.contacts = data;
        });

    }

    remove(contact){
        const index = this.contacts.indexOf(contact);

        this.contactsService.removeContact(contact)
            .subscribe(
                (contact: Contact) => {
                    const index = this.contacts.indexOf(contact);
                    this.contacts.splice(index,1);
                }
            )
    }

    submitContact(contact: Contact){
        if(contact.id){
            this.contactsService.editContact(contact)
                .subscribe(
                    (contact: Contact) => {
                        let existing = this.contacts.filter(c => c.id == contact.id);
                        if(existing.length){
                            Object.assign(existing[0], contact)
                        }
                    }
                );
        } else {
            this.contactsService.addContact(contact).subscribe(
                contact => {
                    this.contacts.push(contact);
                }
            );
        }
    }

}