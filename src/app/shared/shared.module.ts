import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterPipe } from './pipes/filter.pipe';
import { ContactsService } from "./services/contacts.service";
import { HttpClientModule } from "@angular/common/http";
import {PageTitleService} from './services/page-title.service';

@NgModule({
  imports: [
    CommonModule,
      HttpClientModule
  ],
  declarations: [
      FilterPipe
  ], providers: [
      ContactsService,
      PageTitleService
  ], exports: [
      FilterPipe
  ]
})
export class SharedModule { }
