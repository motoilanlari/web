import {Component, OnInit} from '@angular/core';
import {Title, Meta} from "@angular/platform-browser";

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  constructor(private titleService: Title, private metaService: Meta) {}

  ngOnInit(): void {
    this.titleService.setTitle('Motoilanlari, Türkiye’nin en büyük motosiklet alım satım platformu!');
    this.metaService.updateTag({ name: 'description', content: 'Motoilanlari artık mobil platformlarda yayında! Motoilanlari ile EIDS uyumlu motosiklet ilanları yayınlayın, hayalinizdeki motoru kolayca bulun. Hızlı, güvenilir ve kullanıcı dostu mobil uygulama ile motor alım satımı şimdi çok daha kolay!' });
  }
}
