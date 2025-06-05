import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { AgmCoreModule, LazyMapsAPILoaderConfigLiteral, MapsAPILoader } from '@babluroy/agm-core';
import { environment } from '../environments/environment.local'; // 👈 Import environment

import { routes } from './app.routes';

const config: LazyMapsAPILoaderConfigLiteral = {
  apiKey: environment.MAP_API_KEY,
  libraries: ['places']
};

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }), 
    provideRouter(routes),
    { provide: AgmCoreModule, useValue: config },
    {
      provide: MapsAPILoader,
      useValue: {
        load: () => Promise.resolve()
      }
    }
  ]
};
