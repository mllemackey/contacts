import {Component, Inject} from '@angular/core';
import {PageTitleService} from '../../shared/services/page-title.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html'
})
export class LayoutComponent{

    private title: string;

  constructor(private pageTitleService: PageTitleService, @Inject('APP_CONFIG_DEFAULT_TITLE') private defaultTitle: string) {


      this.pageTitleService.pageTitleAnnounces$.subscribe(
          (title: string) => {
              this.title = title;
          });
  }



}
