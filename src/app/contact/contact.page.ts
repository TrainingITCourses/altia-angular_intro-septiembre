import { Component } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";

@Component({
  selector: "app-contact",
  template: `
    <h1>📧 Get in contact</h1>
    <p>Send us a message</p>
    <form [formGroup]="contactForm">
      <div>
        <label for="email">Your email, please</label>
        <input id="email" type="email" name="email" formControlName="email" />
      </div>
      <button (click)="onSave()">Send</button>
    </form>
  `,
  styles: [],
})
export class ContactPage {
  contactForm: FormGroup;

  constructor(formBuilder: FormBuilder) {
    this.contactForm = formBuilder.group({
      email: "",
    });
  }

  onSave() {
    console.log(this.contactForm.value);
  }
}
