import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { TermsComponent } from './pages/terms/terms.component';
import { PrivacyComponent } from './pages/privacy/privacy.component';
import { ContactComponent } from './pages/contact/contact.component';

export const routes: Routes = [
    { path: '', component: HomeComponent, title: 'Ana Sayfa' },
    { path: 'kullanim-kosullari', component: TermsComponent, title: 'Kullanım Koşulları' },
    { path: 'gizlilik-politikasi', component: PrivacyComponent, title: 'Gizlilik Politikası' },
    { path: 'iletisim', component: ContactComponent, title: 'İletişim' },
    { path: '**', redirectTo: '', pathMatch: 'full' }, // Hatalı URL'ler için
];
