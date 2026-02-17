import { Component } from '@angular/core';

@Component({
  selector: 'app-child',
  imports: [],
  template: `
    <p>
      child works!
    </p>

    <video src="exemplo.mp4" controls width="640" height="360"></video>
  `,
  styles: `
  p {
    font-family: cursive;
  }
  `
})
export class ChildComponent {

}
