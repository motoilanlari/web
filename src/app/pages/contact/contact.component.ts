import { Component, OnInit } from '@angular/core';
import {NgOptimizedImage} from "@angular/common";
import {Meta, Title} from "@angular/platform-browser";

@Component({
  selector: 'app-contact',
  imports: [
    NgOptimizedImage
  ],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent implements OnInit {
  constructor(private titleService: Title, private metaService: Meta) {}

  ngOnInit(): void {
    this.titleService.setTitle('İletişim - Motoilanlari');
    this.metaService.updateTag({ name: 'description', content: 'Motoilanlari, güncel motosiklet ilanları görmek, ilan yayınlamak ve motosiklet dünyasından güncellemeler takip etmek için iletişim instagram\'da @motoilanlari takip edebiliriniz. WhatsApp iletişim hattımız üzerinden bize yazabilirsiniz.' });
  }
}
