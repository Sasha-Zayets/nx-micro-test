import { Component, OnInit } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import { CustomEventWithSubscribersDecoratorsService } from 'custom-event-with-subscribers-decorators';

const DISPATCH_EVENT = "change-route";
const SUBSCRIBE_EVENT = "change-route-react";

@Component({
  selector: 'nx-apps-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  constructor(private router: Router, private customEvent: CustomEventWithSubscribersDecoratorsService) {
    router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        localStorage.setItem(DISPATCH_EVENT, JSON.stringify({url: event.url}));
        customEvent.dispatch(DISPATCH_EVENT, { url: event.url });
      }
    });
  }

  ngOnInit() {
    this.customEvent.subscribe(SUBSCRIBE_EVENT, (data: any) => {
      this.router.navigate([data.url]);
    });
  }

  ngOnDestroy() {
    this.customEvent.unsubscribe(SUBSCRIBE_EVENT);
  }
}