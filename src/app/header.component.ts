import { Component } from "@angular/core";

@Component({
  selector: "app-header",
  template: `
    <header>
      <nav>
        <ul>
          <a routerLink="/" class="title">{{ title | uppercase }}</a>
        </ul>
        <ul>
          <li><a routerLink="/agencies">➡️ Agencies</a></li>
          <!-- <li><a routerLink="/auth/register">🔏 Register</a></li>
          <li><a routerLink="/auth/login">🔐 Login</a></li> -->
        </ul>
      </nav>
    </header>
  `,
  styles: [],
})
export class HeaderComponent {
  title = "🚀 Astro Bookings!";
}
