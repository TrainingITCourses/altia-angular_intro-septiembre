import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { Observable } from "rxjs";
import { Agency } from "../models/agency.interface";
import { ApiService } from "../services/api.service";

@Component({
  template: `
    <h2>Agencies page</h2>
    <article>
      <button (click)="onNewClick()">➕ Add new Agency</button>
      <app-agencies-list
        *ngIf="agencies$ | async as body"
        [agencies]="body"
      ></app-agencies-list>
    </article>
  `,
  styles: [],
})
export class AgenciesPage {
  agencies$: Observable<Agency[]> = this.api.getAgencies$();

  constructor(private router: Router, private api: ApiService) {}

  onNewClick() {
    this.router.navigate(["agencies", "new"]);
  }
}
