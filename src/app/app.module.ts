import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {DosModule} from './dos/dos.module';
import {TresModule} from './tres/tres.module';
import {RouterModule, Routes} from '@angular/router';
import {DynamicDirective} from './directive/dynamic.directive';
import {BigComponent} from './big.component';
import { RoutingService } from './routing.service';


const appRoutes: Routes = [
  {
    path: '', component: BigComponent, children: [
      {path: 'uno', loadChildren: 'app/uno/uno.module#UnoModule'}
    ]
  }
];

@NgModule({
  declarations: [
    AppComponent,
    BigComponent,
    DynamicDirective
  ],
  imports: [
    DosModule,
    TresModule,
    RouterModule.forRoot(appRoutes),
    BrowserModule
  ],
  providers: [
    RoutingService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
