import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TreeComponent } from './tree/tree.component';
import {MainComponent} from "./main/main.component";

@NgModule({
  imports: [
    CommonModule
  ],
  entryComponents: [TreeComponent],
  declarations: [TreeComponent, MainComponent],
  exports: [TreeComponent, MainComponent]
})
export class TresModule { }
