import { Component } from '@angular/core';

@Component({
  selector: 'app-property-binding',
  imports: [],
  templateUrl: './property-binding.html',
  styleUrl: './property-binding.css',
})
export class PropertyBinding {
  propriedade = 'Texto do input'
  inputType = 'text';
  inputDisabled = false; //true ele fica bloqueado e false vocÊ habilita ele novamente
  
  
  habilitarInput() {
    this.inputDisabled = false;
  }
  
  desabilitarInput() {
    this.inputDisabled = true;
  }
  
  mudarInputTypeParaText() {
    this.inputType = 'text'
  }

  mudarInputTypeParaPassword() {
    this.inputType = 'password'
  }

  onInputChange(event: Event) {
    const value = (event.target as HTMLInputElement).value;
    this.propriedade = value;
  }
}
