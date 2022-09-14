import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  template: `
    <h2>Agencies page</h2>
    <button (click)="onNewClick()">➕ Add new Agency</button>
  `,
  styles: [],
})
export class AgenciesPage {
  constructor(private router: Router) {}

  onNewClick() {
    this.router.navigate(["agencies", "new"]);
  }
}
