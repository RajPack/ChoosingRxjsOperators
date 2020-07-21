import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AppConsoleComponent } from "./components/app-console/app-console.component";

@NgModule({
  declarations: [AppConsoleComponent],
  imports: [CommonModule],
  exports: [AppConsoleComponent]
})
export class SharedModule {}
