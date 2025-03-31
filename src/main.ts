import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { provideExperimentalZonelessChangeDetection, importProvidersFrom } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

bootstrapApplication(AppComponent, {
  ...appConfig,
  providers: [
    ...appConfig.providers, // Preserve existing providers
    importProvidersFrom(HttpClientModule), // Add HttpClientModule
    provideExperimentalZonelessChangeDetection(), // Optional: Disables Zone.js
  ],
})
  .catch((err) => console.error(err));
