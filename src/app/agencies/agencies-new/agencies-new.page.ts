import { Component } from "@angular/core";
import { FormBuilder } from "@angular/forms";
import { Agency } from "src/app/models/agency.interface";
import { AgenciesNewService } from "./agencies-new.service";

@Component({
  template: `
    <h2>➕ Create a new agency record</h2>
    <form>
      <input type="text" placeholder="name" />
      <input type="text" placeholder="range" />
      <input type="text" placeholder="status" />
      <button (click)="onSave()">Save</button>
    </form>
  `,
  styles: [],
})
export class AgenciesNewPage {
  formGroup = this.formBuilder.nonNullable.group({
    name: "Nasa Altia",
    range: "Orbital",
    status: "Pending",
  });
  constructor(
    private formBuilder: FormBuilder,
    private agenciesNew: AgenciesNewService
  ) {}

  onSave(): void {
    const value = this.formGroup.value;
    const agency: Omit<Agency, "id"> = {
      name: value.name || "",
      range: value.range || "",
      status: value.status || "",
    };
    this.agenciesNew.saveAgency(agency);
  }
}
