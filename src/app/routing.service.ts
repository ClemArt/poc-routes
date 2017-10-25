import { Injectable, Component, ComponentFactory } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { Routes } from '@angular/router';

@Injectable()
export class RoutingService {

  routes: BehaviorSubject<RoutingTree> = new BehaviorSubject<RoutingTree>(null);
  counter = 0;

  constructor() { 
    this.routes.do(value => {
      this.counter = this.counter+1;
      console.log(value, this.counter)
    });
  }

}

class RoutingTree {
  constructor(
    public header: ComponentFactory<any>,
    public main: ComponentFactory<any>,
    public side: ComponentFactory<any>
  ) {}
}
