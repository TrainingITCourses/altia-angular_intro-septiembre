import { Component } from "@angular/core";

@Component({
  selector: "app-home-page",
  template: `
    <app-agencies></app-agencies>
    <app-trips></app-trips>
    <app-reloading></app-reloading>
  `,
  styles: [],
})
export class HomePage {}
