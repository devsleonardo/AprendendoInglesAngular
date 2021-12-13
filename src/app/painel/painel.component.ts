import { Frase } from './../shared/frase.model';
import { Component, OnInit } from '@angular/core';
import { FRASES } from './frases-mock';

@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.scss']
})
export class PainelComponent implements OnInit {

  public frases:Frase[] = FRASES
  public instrucao:string = "Trazuda a frase: "
  public resposta:string = ""

  public rodada:number = 0
  public rodadaFrase:Frase


  constructor() {
    this.rodadaFrase = this.frases[this.rodada]
    console.log(this.rodadaFrase)
  }

  ngOnInit(): void {
  }

  public atualizaResposta(resposta:Event):void{
    this.resposta = (<HTMLInputElement>resposta.target).value
  }

  public verificarResposta():void{
    //console.log("Verificar Resposta: " ,this.resposta)
  }
}
