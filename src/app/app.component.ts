import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  counter = -10;
  timer = setInterval(() => {
    this.counter = this.counter + 1;
  }, 100);

  getAbs() {
    return Math.abs(this.counter);
  }
  getRound() {
    return Math.trunc(this.counter / 30) + 1;
  }
  getSeconds() {
    return Math.trunc(this.counter % 30);
  }
  restartCounter() {
    this.counter = -10;
  }
}
