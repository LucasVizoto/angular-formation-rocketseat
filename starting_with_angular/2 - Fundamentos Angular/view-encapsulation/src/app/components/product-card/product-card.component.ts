import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-product-card',
  imports: [],
  template: `
    <p>
      product-card works!
    </p>
  `,
  styles: `
  p{
    font-weight: bold;
  }
  `,
  encapsulation: ViewEncapsulation.None
  // a partir do momento que eu deixei a encapsulação como None ele
  // vai aplicar o estilo em todos os componentes filhos
  // ou seja, há maneiras de manipular o comportamento dos estilos da aplicação
})
export class ProductCardComponent {

}
