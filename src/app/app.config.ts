import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { MATERIAL_PROVIDERS } from './shared/shared.material';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes),MATERIAL_PROVIDERS]
};
