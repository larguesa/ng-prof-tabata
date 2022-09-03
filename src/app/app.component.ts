import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Ricardo Pupo';
  nascimento = 1979;
  counter = 0;
  timer = setInterval(() => {
    this.counter = this.counter + 1;
  }, 100);
  nmbers = this.getRandomNumbers();

  restartCounter() {this.counter = 0;}
  getIdade() {return 2022 - this.nascimento;}
  getMinutos() {return Math.trunc(this.counter / 60);}
  getSegundos() {return Math.trunc(this.counter % 60);}
  refreshRandomNumbers() {
    this.nmbers = this.getRandomNumbers();
  }
  getRandomNumbers() {
    let arr = [];
    for (let i = 0; i < 10; i++) {
      arr[i] = Math.trunc(100 * Math.random());
    }
    return arr;
  }
}
