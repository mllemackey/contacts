import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import { ContactsService } from "../../../shared/services/contacts.service";
import {PageTitleService} from '../../../shared/services/page-title.service';
import {Contact} from '../../../shared/contact.model';
@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.component.html'
})
export class ContactDetailsComponent implements OnInit {

  private contact: any = '';

  constructor(private route: ActivatedRoute, private contactsService: ContactsService,
              private pageTitleService: PageTitleService) {

  }

  ngOnInit() {
      this.route.params.subscribe(() => {
        let id = parseInt(this.route.snapshot.paramMap.get('id'));

        this.contact = [];
        this.contactsService.getContacts()
            .subscribe((data: any[]) => {
            this.contact = data.find(item => item['id'] == id);
            this.pageTitleService.setTitle("Contacts details - " + this.contact.firstName);
        });
     });
  }

}
