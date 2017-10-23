import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {UnoModule} from './uno/uno.module';
import {DosModule} from './dos/dos.module';
import {TresModule} from './tres/tres.module';
import {RouterModule, Routes} from '@angular/router';
import {DynamicDirective} from './directive/dynamic.directive';
import {BigComponent} from './big.component';


const appRoutes: Routes = [
  {
    path: '**', component: BigComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    BigComponent,
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
