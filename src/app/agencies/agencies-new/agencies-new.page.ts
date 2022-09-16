import { Component } from "@angular/core";
import { FormBuilder } from "@angular/forms";
import { Router } from "@angular/router";
import { Agency } from "src/app/models/agency.interface";
import { AgenciesNewService } from "./agencies-new.service";

@Component({
  template: `
    <h2>➕ Create a new agency record</h2>
    <form [formGroup]="formGroup">
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
    name: "ChinaKosmos Altia",
    range: "Orbital",
    status: "Pending",
  });
  constructor(
    private formBuilder: FormBuilder,
    private service: AgenciesNewService,
    private router: Router
  ) {}

  onSave(): void {
    const value = this.formGroup.value;
    const agency: Omit<Agency, "id"> = {
      name: value.name || "",
      range: value.range || "",
      status: value.status || "",
    };
    console.log("saving...", agency);
    this.service.saveAgency$(agency).subscribe({
      next: (body) => {
        console.log("saved!", body);
        this.router.navigate(["agencies"]);
      },
    });
    console.log("sent!", agency);
  }
}
