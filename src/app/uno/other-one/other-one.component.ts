import {Component, OnInit} from '@angular/core';
import {SayByeService} from '../service/say-bye.service';

@Component({
  selector: 'app-other-one',
  templateUrl: './other-one.component.html'
})
export class OtherOneComponent implements OnInit {

  constructor(public sayByeService: SayByeService) {
  }

  ngOnInit() {
    this.sayByeService.console();
  }

}
