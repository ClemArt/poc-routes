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


const appRoutes: Routes = [
  {
    path: '', component: AppComponent
  },
  {path: 'path-2', component: TreeComponent, outlet: 'side'},

  {path: 'path-2', component: TwoComponent, outlet: 'header'},
  {path: 'path-1', component: OneComponent, outlet: 'main'},
];

@NgModule({
  declarations: [
    AppComponent
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
