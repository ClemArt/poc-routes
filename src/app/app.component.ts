import {Component, ComponentFactoryResolver, OnInit, Type, ViewChild} from '@angular/core';
import {OneComponent} from './uno/one/one.component';
import {TwoComponent} from './dos/two/two.component';
import {TreeComponent} from './tres/tree/tree.component';
import {OtherOneComponent} from './uno/other-one/other-one.component';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'SIX App';

}
