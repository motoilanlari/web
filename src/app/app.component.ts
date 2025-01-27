import { Component } from '@angular/core';
import { RouterOutlet, Router, NavigationEnd } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { filter } from 'rxjs';

import {FooterComponent} from "./shared/footer/footer.component";
import {HeaderComponent} from "./shared/header/header.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FooterComponent, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  constructor(private router: Router, private titleService: Title) {
    // Router event'lerini dinleyerek başlıkları güncelliyoruz
    this.router.events
        .pipe(filter(event => event instanceof NavigationEnd))
        .subscribe(() => {
          const currentRoute = this.router.routerState.root;
          this.setTitleFromRoute(currentRoute);
        });
  }

  private setTitleFromRoute(route: any) {
    while (route.firstChild) {
      route = route.firstChild;
    }
    if (route.snapshot.data && route.snapshot.data['title']) {
      this.titleService.setTitle(route.snapshot.data['title']);
    }
  }
}
