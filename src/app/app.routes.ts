import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { TermsComponent } from './pages/terms/terms.component';
import { PrivacyComponent } from './pages/privacy/privacy.component';
import { ContactComponent } from './pages/contact/contact.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'kullanim-kosullari', component: TermsComponent },
    { path: 'gizlilik-politikasi', component: PrivacyComponent },
    { path: 'iletisim', component: ContactComponent },
    { path: '**', redirectTo: '', pathMatch: 'full' }, // Hatalı URL'ler için
];
