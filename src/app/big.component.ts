import {Component, ComponentFactoryResolver, OnInit, Type, ViewChild, AfterContentInit} from '@angular/core';
import {OneComponent} from './uno/one/one.component';
import {TwoComponent} from './dos/two/two.component';
import {TreeComponent} from './tres/tree/tree.component';
import {OtherOneComponent} from './uno/other-one/other-one.component';
import {ActivatedRoute} from '@angular/router';
import { RoutingService } from './routing.service';
import { forEach } from 'lodash';

@Component({
  selector: 'app-big',
  templateUrl: './big.component.html'
})
export class BigComponent implements AfterContentInit {


  @ViewChild('main') main;

  @ViewChild('header') header;

  @ViewChild('side') side;

  constructor(private routingService: RoutingService, private componentFactoryResolver: ComponentFactoryResolver, public activatedRoute: ActivatedRoute) {
  }

  ngAfterContentInit(): void {
    this.routingService.routes.subscribe(tree => {
      forEach(tree, (val, key) => {
        // debugger;
        this.clear(this[key].viewContainerRef);

        if(val) {
          this.charge(val, this[key].viewContainerRef);
        }
      });
    })
  //   this.activatedRoute.url.subscribe((route) => {

  //     this.clear(this.elementHeader.viewContainerRef);
  //     this.clear(this.elementMain.viewContainerRef);
  //     this.clear(this.elementSide.viewContainerRef);
  //     if (route[0]) {
  //       switch (route[0].path) {
  //         case 'one-two':
  //           this.charge(OneComponent, this.elementHeader.viewContainerRef);
  //           this.charge(TwoComponent, this.elementSide.viewContainerRef);
  //           break;
  //         case 'otherone-tree':
  //           this.charge(OtherOneComponent, this.elementHeader.viewContainerRef);
  //           this.charge(TreeComponent, this.elementMain.viewContainerRef);
  //           break;
  //         case 'two':
  //           this.charge(TwoComponent, this.elementSide.viewContainerRef);
  //           break;
  //       }
  //     }

  //   });
  }

  charge(component, viewContainerRef) {

    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(component);

    this.clear(viewContainerRef);

    viewContainerRef.createComponent(componentFactory);
  }


  clear(viewContainerRef) {
    viewContainerRef.clear();
  }


}
