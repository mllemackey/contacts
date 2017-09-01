import { Component, EventEmitter, Output } from '@angular/core';
import { Contact } from '../../../shared/contact.model';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html'
})
export class ContactFormComponent {

    private newContact: Contact = new Contact();
  constructor() { }

  @Output() onSubmit = new EventEmitter<Contact>();

  submitContact(contact){
      this.onSubmit.emit(contact);
      this.newContact = new Contact();
  }
    edit(contact: Contact){
        this.newContact = Object.assign({}, contact);
    }
    remove(contact: Contact){
        this.newContact = Object.assign({}, contact);
    }

}
