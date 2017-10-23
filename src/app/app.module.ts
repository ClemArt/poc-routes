import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {UnoModule} from './uno/uno.module';
import {DosModule} from './dos/dos.module';
import {TresModule} from './tres/tres.module';
import {RouterModule, Routes} from '@angular/router';
import {OneComponent} from './uno/one/one.component';
import {TwoComponent} from './dos/two/two.component';
import {TreeComponent} from './tres/tree/tree.component';
import {DynamicDirective} from './directive/dynamic.directive';


const appRoutes: Routes = [
  {
    path: '', component: AppComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    DynamicDirective
  ],
  imports: [
    UnoModule,
    DosModule,
    TresModule,
    RouterModule.forRoot(appRoutes),
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
