import {Component, ComponentFactoryResolver, OnInit, Type, ViewChild} from '@angular/core';
import {OneComponent} from './uno/one/one.component';
import {TwoComponent} from './dos/two/two.component';
import {TreeComponent} from './tres/tree/tree.component';
import {OtherOneComponent} from './uno/other-one/other-one.component';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-big',
  templateUrl: './big.component.html'
})
export class BigComponent implements OnInit {


  @ViewChild('main') elementMain;

  @ViewChild('header') elementHeader;

  @ViewChild('side') elementSide;

  constructor(private componentFactoryResolver: ComponentFactoryResolver, public activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.activatedRoute.url.subscribe((route) => {

      this.clear(this.elementHeader.viewContainerRef);
      this.clear(this.elementMain.viewContainerRef);
      this.clear(this.elementSide.viewContainerRef);
      if (route[0]) {
        switch (route[0].path) {
          case 'one-two':
            this.charge(OneComponent, this.elementHeader.viewContainerRef);
            this.charge(TwoComponent, this.elementSide.viewContainerRef);
            break;
          case 'otherone-tree':
            this.charge(OtherOneComponent, this.elementHeader.viewContainerRef);
            this.charge(TreeComponent, this.elementMain.viewContainerRef);
            break;
          case 'two':
            this.charge(TwoComponent, this.elementSide.viewContainerRef);
            break;
        }
      }

    });
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
