import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HelloWorldComponent } from './hello-world.component';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [HelloWorldComponent],
  imports: [BrowserModule, CommonModule],
  exports: [
    HelloWorldComponent
  ]
})
export class HelloWorldModule {}
