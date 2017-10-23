import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TwoComponent} from './two/two.component';
import {SideComponent} from './side/side.component';

@NgModule({
  imports: [
    CommonModule
  ],
  entryComponents: [TwoComponent],
  declarations: [TwoComponent, SideComponent],
  exports: [TwoComponent, SideComponent]
})
export class DosModule {
}
