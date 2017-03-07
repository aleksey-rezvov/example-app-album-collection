import {NgModule, ModuleWithProviders} from '@angular/core';
import { CommonModule } from '@angular/common';
import {DataService} from "./data.service";
import {DsService} from "./ds.service";

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: []
})
export class SharedModule {
  static forRoot() : ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [DataService, DsService]
    }
  }
}
