import { Component } from '@angular/core';

@Component({
  selector: 'app-square-popup',
  imports: [],
  template: `
  <div class="quadrado" [style.left.%]="posicaoHorizontal"></div>
  <div class="popup" [style.top]="alturaPopup + 'vh'" [style.right]="'10px'">
      PopUp Dinâmico
  </div>

  <button (click)="moverQuadrado()">Mover Quadrado</button>
  <button (click)="togglePopup()">Toggle Popup</button>
`,
  styles: `
  .quadrado{
    width: 50px;
    height: 50px;
    background-color: purple;
    position: relative;
    transition: left 0.5s ease;
    margin-top:20px; 
  }
  .popup{
    position: fixed;
    background-color: lightcoral;
    padding: 15px;
    border-radius: 8px;
    transform: translateY(-100%);
    transition: transform 0.3s ease-out, top 0.3s ease-out;
  }
  `,
})
export class SquarePopup {
  posicaoHorizontal: number = 0; //posiçao em %
  alturaPopup: number = -10; // Posiçao em vh (fora da tela)

  moverQuadrado(){
    this.posicaoHorizontal = (this.posicaoHorizontal + 10) % 100;
  }

  togglePopup(){
    this.alturaPopup = this.alturaPopup === -10 ? 10 : -10;
  }
}
