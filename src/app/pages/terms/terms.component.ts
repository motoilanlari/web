import {Component, OnInit} from '@angular/core';
import {Meta, Title} from "@angular/platform-browser";

@Component({
  selector: 'app-terms',
  imports: [],
  templateUrl: './terms.component.html',
  styleUrl: './terms.component.scss'
})
export class TermsComponent implements OnInit {
  constructor(private titleService: Title) {}

  ngOnInit(): void {
    this.titleService.setTitle('Kullanım Koşulları - Motoilanlari');
  }
}
