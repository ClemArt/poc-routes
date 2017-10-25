import { NgModule, Injectable, ComponentFactoryResolver, ComponentFactory } from '@angular/core';
import {CommonModule} from '@angular/common';
import { OneComponent } from './one/one.component';
import {HeaderComponent} from './header/header.component';
import {SayHelloService} from './service/say-hello.service';
import {SayByeService} from './service/say-bye.service';
import {OtherOneComponent} from './other-one/other-one.component';
import { Routes, RouterModule, Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { RoutingService } from '../routing.service';
import { transorm } from 'lodash';

@Injectable()
export class Resolver implements Resolve<void> {
  constructor(private routingService: RoutingService, private componentFactoryResolver: ComponentFactoryResolver) {}
  resolve(route: ActivatedRouteSnapshot): void {
    const componentsFactories: any =  {}
    componentsFactories['header'] = this.componentFactoryResolver.resolveComponentFactory(route.data.tree['header']);
    componentsFactories['main'] = this.componentFactoryResolver.resolveComponentFactory(route.data.tree['main']);
    this.routingService.routes.next(componentsFactories);
  }
}

export const routes: Routes = [
  {path: '', resolve: [Resolver], data: {tree: {
    header: HeaderComponent,
    main: OneComponent,
    aside: null
  }}}
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  entryComponents: [OneComponent, OtherOneComponent, HeaderComponent], // important!!!
  declarations: [OneComponent, OtherOneComponent, HeaderComponent],
  providers: [SayHelloService, SayByeService, Resolver],
  exports: [OneComponent, OtherOneComponent, HeaderComponent]
})
export class UnoModule {
}
