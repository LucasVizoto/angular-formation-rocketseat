import { Component } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  imports: [],
  templateUrl: './event-binding.html',
  styleUrl: './event-binding.css',
})
export class EventBinding {
  
  onBlur() {
    throw new Error('Method not implemented.');
  } //quando o input perde o foco, basicamente quando vocÊ clica fora do input
  // o seu oposto é o focus

  onInput(event: Event) {
    console.log("Digitando no input!");
    console.log(event);

    const value = (event.target as HTMLInputElement).value;
    console.log(value);

  } //quando digitado qualquer coisa no input

  onButtonClick() {
    console.log("Botão clicado!");
  }
}
