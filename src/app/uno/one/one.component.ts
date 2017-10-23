import { Component, OnInit } from '@angular/core';
import {SayHelloService} from '../service/say-hello.service';

@Component({
  selector: 'app-one',
  templateUrl: './one.component.html',
  styleUrls: ['./one.component.css']
})
export class OneComponent implements OnInit {

  constructor(public sayHelloService: SayHelloService) { }

  ngOnInit() {
    this.sayHelloService.boomAlert();
  }

}
