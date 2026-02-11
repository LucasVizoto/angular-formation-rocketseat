import { Component } from '@angular/core';

@Component({
  selector: 'app-dinamic-text',
  imports: [],
  template: `
  <p [style.font-size.rem]="tamanhoTextoRem">
    Este texto tem um tamanho dinâmico.
  </p>
  <button (click)="aumentarTexto()">Tamanho + </button>
  <button (click)="diminuirTexto()">Tamanho - </button>
  `,
  styles: ``,
})
export class DinamicText {
  tamanhoTextoRem: number = 1.2

  aumentarTexto(){
    this.tamanhoTextoRem = Math.min(this.tamanhoTextoRem + 0.2, 2.0)
  }
  diminuirTexto(){
    this.tamanhoTextoRem = Math.max(this.tamanhoTextoRem - 0.2, 0.8)
  }
}
