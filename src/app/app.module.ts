import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CustomFormsModule } from 'ng2-validation';

import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from "./shared/shared.module"
import { FormsModule } from "@angular/forms";

import { AppComponent } from './app.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { LayoutComponent } from './components/layout/layout.component';
import { MessagesComponent } from './components/messages/messages.component';
import { ContactDetailsComponent } from './components/contacts/contact-details/contact-details.component';
import { ContactFormComponent } from './components/contacts/contact-form/contact-form.component';
import { ContactRowComponent } from './components/contacts/contact-row/contact-row.component';



@NgModule({
  declarations: [
    AppComponent,
      ContactsComponent,
      LayoutComponent,
      MessagesComponent,
      ContactDetailsComponent,
      ContactFormComponent,
      ContactRowComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    FormsModule,
    CustomFormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
