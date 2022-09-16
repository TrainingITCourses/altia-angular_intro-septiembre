import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { Agency } from "../models/agency.interface";
import { ApiService } from "../services/api.service";

@Component({
  template: `
    <h2>Agencies page</h2>
    <article>
      <button (click)="onNewClick()">➕ Add new Agency</button>
      <app-agencies-list [agencies]="agencies"></app-agencies-list>
    </article>
  `,
  styles: [],
})
export class AgenciesPage {
  // agencies = this.data.getAgencies();
  agencies: Agency[] = [];

  constructor(private router: Router, private api: ApiService) {
    api.getAgencies$().subscribe({ next: (body) => (this.agencies = body) });
  }

  onNewClick() {
    this.router.navigate(["agencies", "new"]);
  }
}
