import { Component } from '@angular/core';
import { VERSION } from '@angular/core';
@simpleDecorator
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;
  title = 'practical';

  constructor() {
    console.log('Hello from Class constructor');
  }

  ngOnInit() {
    console.log((this as any).value1);
    console.log((this as any).value2);
  }
}

function simpleDecorator(target: any) {
  console.log('Hello from Decorator');
  Object.defineProperty(target.prototype, 'value1', {
    value: 100,
    writable: false,
  });
  Object.defineProperty(target.prototype, 'value2', {
    value: 200,
    writable: false,
  });
}