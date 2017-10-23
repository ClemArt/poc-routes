import {Component, ComponentFactoryResolver, Type, ViewChild} from '@angular/core';
import {OneComponent} from './uno/one/one.component';
import {TwoComponent} from './dos/two/two.component';
import {TreeComponent} from './tres/tree/tree.component';
import {OtherOneComponent} from './uno/other-one/other-one.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'app';

  @ViewChild('main') elementMain;

  @ViewChild('header') elementHeader;

  @ViewChild('side') elementSide;

  headerComponents: Array<Type<any>> = [OneComponent, OtherOneComponent];
  headerCount = 0;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) {
  }


  chargeOne() {
    this.headerCount++;
    if (this.headerCount >= this.headerComponents.length) {
      this.headerCount = 0;
    }
    const comp = this.headerComponents[this.headerCount];

    const OneComponentFactory = this.componentFactoryResolver.resolveComponentFactory(this.headerComponents[this.headerCount]);

    const viewContainerRef = this.elementHeader.viewContainerRef;
    viewContainerRef.clear();

    viewContainerRef.createComponent(OneComponentFactory);

  }

  chargeTwo() {
    const twoComponentFactory = this.componentFactoryResolver.resolveComponentFactory(TwoComponent);

    const viewContainerRef = this.elementSide.viewContainerRef;
    viewContainerRef.clear();

    viewContainerRef.createComponent(twoComponentFactory);

  }

  chargeTree() {
    const treeComponentFactory = this.componentFactoryResolver.resolveComponentFactory(TreeComponent);

    const viewContainerRef = this.elementMain.viewContainerRef;
    viewContainerRef.clear();

    viewContainerRef.createComponent(treeComponentFactory);

  }


}
