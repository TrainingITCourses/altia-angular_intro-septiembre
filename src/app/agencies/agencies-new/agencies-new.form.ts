import { Component, EventEmitter, Output } from "@angular/core";
import { FormBuilder } from "@angular/forms";
import { Agency } from "src/app/models/agency.interface";

@Component({
  selector: "app-agencies-new-form",
  template: `
    <form [formGroup]="formGroup">
      <input type="text" placeholder="name" />
      <input type="text" placeholder="range" />
      <input type="text" placeholder="status" />
      <button (click)="onClick()">Save</button>
    </form>
  `,
  styles: [],
})
export class AgenciesNewForm {
  @Output() save = new EventEmitter<Omit<Agency, "id">>();

  formGroup = this.formBuilder.nonNullable.group({
    name: "India AeroSpace",
    range: "Orbital",
    status: "Pending",
  });

  constructor(private formBuilder: FormBuilder) {}

  onClick() {
    const value = this.formGroup.value;
    const agency: Omit<Agency, "id"> = {
      name: value.name || "",
      range: value.range || "",
      status: value.status || "",
    };
    this.save.next(agency);
  }
}
