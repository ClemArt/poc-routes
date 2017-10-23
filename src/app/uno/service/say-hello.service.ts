import {Injectable} from '@angular/core';

@Injectable()
export class SayHelloService {

  boomAlert() {
    alert('Boom Nicolas');
  }

}
