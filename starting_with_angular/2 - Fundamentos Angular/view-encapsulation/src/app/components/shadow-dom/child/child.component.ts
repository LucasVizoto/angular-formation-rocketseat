import { Component } from '@angular/core';

@Component({
  selector: 'app-child',
  imports: [],
  template: `
    <p>
      child works!
    </p>

    <!-- <video src="exemplo.mp4" controls width="640" height="360"></video> -->

`,
  styles: `
  :host {
    display: block; /* Web components são inline por padrão, para ocupar uam linha inteira e permitir widht/height */
    border: 1px solid #ddd;
    box-shadow: 0 4px 8px rgba(0,0,0,0.1);
    margin: 20px;
    padding: 0; /* Remove padding paddrão se houver */
    widht: 300px; /*Define lagura para o card */
    float: left; /* Para colocar vários card lado a lado */
  }

  /* Estilo para hover */
  :host(:hover){
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
    transform: translateY(-2px);
    transition: all 0.2s ease-in-out;
  }
  `
})
export class ChildComponent {

}
