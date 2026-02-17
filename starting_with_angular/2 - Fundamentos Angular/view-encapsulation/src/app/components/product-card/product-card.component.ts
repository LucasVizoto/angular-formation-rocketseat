import { Component, ViewEncapsulation } from '@angular/core';
import { CustomButtonComponent } from "../custom-button/custom-button.component";

@Component({
  selector: 'app-product-card',
  imports: [CustomButtonComponent],
  template: `
    <p>
      product-card works!
    </p>

    <app-custom-button />
  `,
  styles: `
  p{
    font-weight: bold;
  }
  `,
  //encapsulation: ViewEncapsulation.None
  // a partir do momento que eu deixei a encapsulação como None ele
  // vai aplicar o estilo em todos os componentes filhos
  // ou seja, há maneiras de manipular o comportamento dos estilos da aplicação
  
  //encapsulation: ViewEncapsulation.Emulated
  // este é o padrão do angular onde ele é restrito apenas
  // a este componente que seguqm um certo padrão de escopo 

  //encapsulation: ViewEncapsulation.ShadowDom
 // #shadow-root(open) inserir na chamadado component  
  // ele vai isolar completamente o componente e seus filhos
  // utilizando o shadow dom do navegador
  // Ex.: Se eu tenho uma classe container na global e quero colocar outra classe container no meu component
  // eu só consigo esse isolamento a partir do ShadowDom
  // muito usado quando queremos criar componentes reutilizáveis
  // micro front-end
  // web component

})
export class ProductCardComponent {

}
