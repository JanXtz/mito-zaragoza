import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { provideRouter } from '@angular/router';
import { appRoutes  } from './app/app.routes';
import { AppComponent } from './app/core/layout/app.component';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(appRoutes), provideFirebaseApp(() => initializeApp({ projectId: "cbpeh2", appId: "1:194303910954:web:8b5762c72b52f0d14b4f53", databaseURL: "https://cbpeh2-default-rtdb.firebaseio.com", storageBucket: "cbpeh2.appspot.com", apiKey: "AIzaSyCDFORq29dvlWxT1--cl0qvyKCIxUlaonM", authDomain: "cbpeh2.firebaseapp.com", messagingSenderId: "194303910954" })), provideFirestore(() => getFirestore()),
  ],
});