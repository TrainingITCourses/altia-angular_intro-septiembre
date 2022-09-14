import { Component } from "@angular/core";

@Component({
  selector: "app-header",
  template: `
    <header>
      <nav>
        <ul>
          <a routerLink="/" class="title">{{ title | uppercase }}</a>
        </ul>
      </nav>
    </header>
  `,
  styles: [],
})
export class HeaderComponent {
  title = "🚀 Astro Bookings!";
}
