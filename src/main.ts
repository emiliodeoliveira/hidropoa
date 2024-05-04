import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

import { registerLicense } from '@syncfusion/ej2-base';
import { environment } from './environments/environment';

registerLicense("Ngo9BigBOggjHTQxAR8/V1NBaF5cXmZCe0x3RXxbf1x0ZFRGalxYTnZYUj0eQnxTdEFjXH9dcnZVT2BbUUR+WA==");
// const content = `${environment.production.valueOf(SYNCFUSIONJSLICENSEKEY);

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
