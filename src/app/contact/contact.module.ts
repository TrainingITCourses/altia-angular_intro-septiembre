import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { ContactPage } from "./contact.page";

@NgModule({
  declarations: [ContactPage],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: "",
        component: ContactPage,
      },
    ]),
  ],
})
export class ContactModule {}
