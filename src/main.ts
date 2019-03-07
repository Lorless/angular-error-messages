import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AngularValidationMessagesModule } from './app/angularValidationMessages.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AngularValidationMessagesModule)
  .catch(err => console.error(err));
