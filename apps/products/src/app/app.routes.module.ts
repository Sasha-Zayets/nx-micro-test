import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { HelloWorldComponent } from './hello-world/hello-world.component';
import { AboutComponent } from './about/about.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { UsersComponent } from './users/users.component';

export const appRoutesModule: Route[] = [
  { path: '', component: HelloWorldComponent },
  { path: 'about', component: AboutComponent },
  { path: 'users', component: UsersComponent },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutesModule)],
  exports: [RouterModule]
})
export class PublicRoutingModule { }
