import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-botao-flat',
  imports: [],
  template: `
    <button class="btn btn-flat" (click)="limpar()">
      Limpar Filtro {{counter}}
    </button>
  `,
  styles: `
  .btn{
    --primary-orange: #f55a00;
    --white: #ffffff;

    font-family: Arial, sans-serif;
    padding: 12px 25px;
    font-size: 1em;
    font-weight: bold;
    border-radius: 8px;
    cursor: pointer;
    min-width: 150px;
    text-align: center;
    box-sizing: border-box;
  }

  .btn-flat{
      background-color: var(--white);
      border: 2px solid var(--primary-orange);
      color: var(--primary-orange)
  }
  `,
})
export class BotaoFlat implements OnInit, OnDestroy {
  /**
   * O que podemos fazer dentro da classe do componente?
   * 1º - Injeção de dependências (services, outros componentes, etc)
   *  contructor e inject
   * 
   * 2º - Criar Propriedades (variáveis com encapsulamento)
   * 3º - Criar Métodos (funções com encapsulamento, utilizado apenas no contexto da classe)
   * 4º - Ciclo de vida do componente (ngOnInit, ngOnDestroy, etc)
   * 5º - Passar valores para o template (interpolação, property binding, event binding, etc)
   */
  counter = 0; 

  ngOnInit(){
    console.log("Componente BotaoFlat inicializado")
  } // acontece no momento em que essa classe é instanciada

  ngOnDestroy(){
    console.log("Componente BotaoFlat destruído")
  } // acontece no momento em que essa classe é destruída,
  //exemplo, com um if em que o botão não é mostrado, observables 
  
  limpar() {
    this.counter++;
    console.log("limpado")
  }
}
