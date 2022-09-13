import { Component } from "@angular/core";

@Component({
  selector: "app-home",
  template: `
    <app-agencies></app-agencies>
    <app-trips></app-trips>
    <button (click)="reload()">♻️ Reload</button>
    <aside *ngIf="isReloading">Reloading... please wait. ⌛</aside>
  `,
  styles: [],
})
export class HomeComponent {
  isReloading = false;

  reload = () => (this.isReloading = true);
}
