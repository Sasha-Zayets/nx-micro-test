import customEvent from "custom-event-with-subscribers";
import { Callback } from 'custom-event-with-subscribers-decorators';
import { Injectable } from '@angular/core';

@Injectable({providedIn: 'root'})
export class CustomEventService {
  dispatch(nameEvent: string, params?: any) {
    customEvent.dispatch(nameEvent, params);
  }

  subscribe(nameEvent: string, callback: Callback) {
    customEvent.subscribe(nameEvent, callback);
  }

  unsubscribe(nameEvent: string) {
    customEvent.unsubscribe(nameEvent);
  }
}
