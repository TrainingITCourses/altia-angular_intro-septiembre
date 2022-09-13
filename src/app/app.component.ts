import { Component } from "@angular/core";
import { data } from "./data.repository";

@Component({
  selector: "app-root",
  template: `
    <header>
      <h1>{{ title | uppercase }}</h1>
    </header>
    <main>
      <article>
        <h3>We work with {{ getAgenciesCount() }} agencies</h3>
        <ul>
          <li *ngFor="let agency of agencies">
            <span [class]="getClassByStatus(agency.status)">
              {{ agency.name }}
            </span>
            <span *ngIf="agency.range === 'Interplanetary'">🪐</span>
            <span *ngIf="agency.range === 'Orbital'">🌍</span>
          </li>
        </ul>
      </article>
      <article>
        <h3>Offering {{ getTripsCount() }} trips</h3>
        <ul>
          <li *ngFor="let trip of trips">
            <span [ngClass]="getClassForStatus(trip.status)">
              {{ trip.destination }}
            </span>
            <span>💸 {{ trip.flightPrice | currency }}</span>
            <span>⤴️ {{ trip.startDate | date: "yyyy-MMM-dd" }}</span>
            <span>⤵️ {{ trip.endDate | date: "yyyy-MMM-dd" }}</span>
            <span [ngClass]="getClassForPlaces(trip.places)">
              🧑🏼‍🚀 {{ trip.places }}
            </span>
            <ng-container
              *ngIf="trip.kind === 'WithStay'; then withStay; else tripOnly"
            ></ng-container>
            <ng-template #withStay>🧳</ng-template>
            <ng-template #tripOnly>🛰️</ng-template>
          </li>
        </ul>
      </article>
      <button (click)="reload()">♻️ Reload</button>
      <aside *ngIf="isReloading">Reloading... please wait. ⌛</aside>
      <router-outlet></router-outlet>
    </main>
    <footer>
      <h6>{{ title }}</h6>
      <p [style]="subtitleStyle">{{ subtitle }}</p>
      <a [href]="authorUrl">{{ author }}</a>
    </footer>
  `,
  styles: [
    `
      .active {
        font-style: normal;
        font-weight: bold;
      }
      .pending {
        font-style: italic;
      }
      .green {
        color: green;
      }
      .orange {
        color: orange;
      }
      .sold-out {
        color: red;
      }
      .few-places {
        color: orange;
      }
    `,
  ],
})
export class AppComponent {
  title = "🚀 Astro Bookings!";
  subtitle = "Welcome on board";
  subtitleStyle = "font-style: italic";
  agencies = data.agencies;
  author = "Alberto Basalo";
  authorUrl = "https://twitter.com/albertobasalo";
  trips = data.trips;
  isReloading = false;

  getAgenciesCount = () => this.agencies.length;

  getTripsCount = () => this.trips.length;

  reload = () => (this.isReloading = true);

  getClassForStatus(status: string): string {
    return status === "Confirmed" ? "green" : "orange";
  }
  getClassForPlaces(places: number): string {
    if (places === 0) return "sold-out";
    if (places < 8) return "few-places";
    return "";
  }

  getClassByStatus = (agencyStatus: string) => agencyStatus.toLowerCase();
}
