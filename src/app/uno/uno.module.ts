import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OneComponent } from './one/one.component';
import {HeaderComponent} from "./header/header.component";

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [OneComponent, HeaderComponent],
  exports: [OneComponent, HeaderComponent]
})
export class UnoModule { }
