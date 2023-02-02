import { Route } from "@angular/router";
import { MainComponent } from "./main/main.component";
import { WrapperComponent } from "./wrapper/wrapper.component";

export const router: Route[] = [
    {
        path: '',
        component: MainComponent,
        children: [
            {
                path: '',
                loadChildren: () => import('@nx-apps/host/home').then((m) => m.HostHomeModule),
            },
            {
                path: 'about',
                component: WrapperComponent,
                data: {
                    loadChildren: () => import('silpo/module'),
                    elementName: 'silpo-web-component'
                }
            },
            {
                path: 'stores',
                component: WrapperComponent,
                data: {
                    loadChildren: () => import('silpo/module'),
                    elementName: 'silpo-web-component'
                }
            },
            {
                path: 'stores/city/:id',
                component: WrapperComponent,
                data: {
                    loadChildren: () => import('silpo/module'),
                    elementName: 'silpo-web-component'
                }
            },
            {
                path: 'notfound',
                loadChildren: () => import('@nx-apps/host/not-found').then((m) => m.HostNotFoundModule),
            },
            {
                path: 'unavailable',
                component: WrapperComponent,
                data: {
                    loadChildren: () => import('silpo/module'),
                    elementName: 'silpo-web-component'
                }
            },
            {
                path: '**',
                redirectTo: 'notfound',
            },
        ],
    },
];
