import { Component } from "@angular/core";
import { FormBuilder, FormControl, Validators } from "@angular/forms";
import { HelperService } from "../services/helper.service";

@Component({
  selector: "app-contact",
  template: `
    <h1>📧 Get in contact</h1>
    <p>Send us a message</p>
    <form [formGroup]="contactForm">
      <div>
        <label for="name">Your name</label>
        <small *ngIf="mustShowError('name')">
          {{ getErrorMessage("name") }}
        </small>
        <input
          id="name"
          type="text"
          name="name"
          formControlName="name"
          [attr.aria-invalid]="isInvalid('name')"
        />
      </div>
      <div>
        <label for="email">Your email, please</label>
        <small *ngIf="mustShowError('email')">
          {{ getErrorMessage("email") }}
        </small>
        <input
          id="email"
          type="email"
          name="email"
          formControlName="email"
          [attr.aria-invalid]="isInvalid('name')"
        />
      </div>
      <div>
        <label for="message">Your name</label>
        <small *ngIf="mustShowError('message')">
          {{ getErrorMessage("message") }}
        </small>
        <textarea
          id="message"
          name="message"
          formControlName="message"
          [attr.aria-invalid]="isInvalid('name')"
        ></textarea>
      </div>
      <button (click)="onSave()" [disabled]="contactForm.invalid">Send</button>
    </form>
  `,
  styles: [],
})
export class ContactPage {
  nameValidators = [Validators.required, Validators.minLength(2)];
  modelForm = {
    name: new FormControl("", this.nameValidators),
    email: new FormControl("", [Validators.required, Validators.email]),
    message: new FormControl("Contact me, please", [Validators.maxLength(10)]),
  };

  contactForm = this.formBuilder.group(this.modelForm);

  constructor(
    private formBuilder: FormBuilder,
    private helper: HelperService
  ) {}

  mustShowError(controlName: string): boolean {
    const control = this.contactForm.get(controlName);
    if (control) {
      return control.invalid && control.touched;
    }
    return false;
  }

  getErrorMessage = (controlName: string): string =>
    this.helper.getErrorMessage(this.contactForm, controlName);

  isInvalid(controlName: string): boolean {
    const control = this.contactForm.get(controlName);
    if (control) {
      return control.invalid;
    }
    return false;
  }

  onSave() {
    const modelValue = this.contactForm.value;
    console.log(modelValue);
    const payload = { email: modelValue.email };
    // http.post("",payload)
  }
}
