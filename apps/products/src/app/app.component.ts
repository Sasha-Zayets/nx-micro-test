import { Component, OnInit } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import { CustomEventWithSubscribersDecoratorsService } from 'custom-event-with-subscribers-decorators';

@Component({
  selector: 'micro-silpo-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(private router: Router, private customEvent: CustomEventWithSubscribersDecoratorsService) {
    router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        localStorage.setItem("change-route", JSON.stringify({url: event.url}));
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
