import { Route } from '@angular/router';
import { WrapperComponent } from './utils/wrapper/wrapper.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';

export const appRoutes: Route[] = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'about',
    component: WrapperComponent,
    data: {
      loadChildren: () => import('silpo/module').then(module => console.log(module)),
      elementName: 'silpo-web-component'
    }
  },
  {
    path: 'stores',
    component: WrapperComponent,
    data: {
      loadChildren: () => import('silpo/module').then(module => console.log(module)),
      elementName: 'silpo-web-component'
    }
  },
  {
    path: 'stores/city/:id',
    component: WrapperComponent,
    data: {
      loadChildren: () => import('silpo/module').then(module => console.log(module)),
      elementName: 'silpo-web-component'
    }
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];
