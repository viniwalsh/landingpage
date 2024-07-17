import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';

// Remova ou corrija esta linha, se não for necessária
// import { appConfig } from './app/app.config';

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
