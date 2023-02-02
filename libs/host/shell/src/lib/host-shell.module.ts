import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { HostHeaderModule } from '@nx-apps/host/header';
import { BrowserModule } from '@angular/platform-browser';
import { router } from './routes';
import { WrapperComponent } from './wrapper/wrapper.component';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(router, { initialNavigation: 'enabledBlocking' }),
    HostHeaderModule,
  ],
  declarations: [MainComponent, WrapperComponent],
  exports: [RouterModule],
})
export class HostShellModule {}
