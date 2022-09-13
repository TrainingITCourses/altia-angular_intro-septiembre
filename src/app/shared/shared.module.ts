import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReloadingComponent } from "./reloading.component";

@NgModule({
  declarations: [ReloadingComponent],
  imports: [CommonModule],
  exports: [ReloadingComponent],
})
export class SharedModule {}
