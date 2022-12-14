import { Component, Input } from "@angular/core";
import { Agency } from "../models/agency.interface";

@Component({
  selector: "app-agencies-list",
  template: `
    <pre>Agencies list</pre>
    <ul>
      <li *ngFor="let agency of agencies">
        <a [routerLink]="agency.id">{{ agency.name }}</a>
      </li>
    </ul>
  `,
  styles: [],
})
export class AgenciesList {
  @Input() agencies: Agency[] = [];
}
