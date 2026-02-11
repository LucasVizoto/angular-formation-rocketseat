import { Component } from '@angular/core';
import { MeuBotao } from "./meu-botao/meu-botao";
import { BotaoFlat } from './botao-flat/botao-flat';
import { EventBinding } from "./event-binding/event-binding";
import { PropertyBinding } from "./property-binding/property-binding";
import { TwoWayDataBinding } from "./two-way-data-binding/two-way-data-binding";
import { DinamicText } from './component/style-binding/dinamic-text/dinamic-text';
import { ProgressBar } from './component/style-binding/progress-bar/progress-bar';

@Component({
  selector: 'app-root',
  imports: [
    MeuBotao, 
    BotaoFlat, 
    EventBinding, 
    PropertyBinding, 
    TwoWayDataBinding,
    DinamicText,
    ProgressBar
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
}
