import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { CustomEventService } from './custom-event.service';

@Component({
  selector: 'micro-silpo-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(private router: Router, private customEvent: CustomEventService) {
    router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        customEvent.dispatch("change-route", { url: event.url });
      }
    });
  }

  ngOnInit() {
    this.customEvent.subscribe("change-route-react", (data: any) => {
      this.router.navigate([data.url]);
    });
  }

  ngOnDestroy() {
    this.customEvent.unsubscribe("change-route-react");
  }
}
