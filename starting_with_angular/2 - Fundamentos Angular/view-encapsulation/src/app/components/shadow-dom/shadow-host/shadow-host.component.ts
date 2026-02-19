import { Component, ViewEncapsulation } from '@angular/core';
import { ChildComponent } from "../child/child.component";

@Component({
  selector: 'app-shadow-host',
  imports: [ChildComponent],
  template: `
    <p>
      shadow-host works!
    </p>
    <app-child />
  `,
  styles: `
  :host{
    --shadow-color: blue;
  }

  p {
    color: var(--secondary-color);
  }
  `,
  encapsulation: ViewEncapsulation.ShadowDom  
})
export class ShadowHostComponent {

}
