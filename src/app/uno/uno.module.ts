import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {OneComponent} from './one/one.component';
import {HeaderComponent} from './header/header.component';
import {SayHelloService} from './service/say-hello.service';
import {SayByeService} from './service/say-bye.service';
import {OtherOneComponent} from './other-one/other-one.component';

@NgModule({
  imports: [
    CommonModule
  ],
  entryComponents: [OneComponent, OtherOneComponent], // important!!!
  declarations: [OneComponent, OtherOneComponent, HeaderComponent],
  providers: [SayHelloService, SayByeService],
  exports: [OneComponent, OtherOneComponent, HeaderComponent]
})
export class UnoModule {
}
