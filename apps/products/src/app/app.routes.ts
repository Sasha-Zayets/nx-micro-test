import { Route } from '@angular/router';
import { HelloWorldComponent } from './hello-world/hello-world.component';
import { AboutComponent } from './about/about.component';

export const appRoutes: Route[] = [
  { path: '', component: HelloWorldComponent },
  { path: 'about', component: AboutComponent },
];
