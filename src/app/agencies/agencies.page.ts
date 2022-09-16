import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { catchError, Observable, of } from "rxjs";
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
    <pre *ngIf="error"> 💣</pre>
  `,
  styles: [],
})
export class AgenciesPage {
  error = false;
  agencies$: Observable<Agency[]> = this.api.getActiveAgencies$().pipe(
    catchError((e) => {
      console.warn("Catch error", e);
      this.error = true;
      return of([]);
    })
  );

  constructor(private router: Router, private api: ApiService) {}

  onNewClick() {
    this.router.navigate(["agencies", "new"]);
  }
}
