import {Component, OnInit} from '@angular/core';
import {Title} from "@angular/platform-browser";

@Component({
  selector: 'app-privacy',
  imports: [],
  templateUrl: './privacy.component.html',
  styleUrl: './privacy.component.scss'
})
export class PrivacyComponent implements OnInit {
  constructor(private titleService: Title) {}

  ngOnInit(): void {
    this.titleService.setTitle('Gizlilik Politikası - Motoilanlari');
  }
}
