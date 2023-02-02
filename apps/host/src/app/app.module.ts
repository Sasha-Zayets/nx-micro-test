import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HostShellModule } from '@nx-apps/host/shell';

@NgModule({
  imports: [
    HostShellModule,
  ],
  declarations: [AppComponent],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
