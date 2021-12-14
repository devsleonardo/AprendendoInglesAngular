import { Frase } from './../shared/frase.model';
import { Component, OnInit,  } from '@angular/core';
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

  public percentual:number = 0  

  public tentativas:number = 3


  constructor() {
    this.rodadaFrase = this.frases[this.rodada]
  }

  ngOnInit(): void {
  }

  public atualizaResposta(resposta:Event):void{
    this.resposta = (<HTMLInputElement>resposta.target).value
  }

  public atualizarResposta():void{
    //Atualizada Pergunda da rodadaFrase
    this.rodadaFrase = this.frases[this.rodada]
    //Limpar Resposta do usuario
    this.resposta = ""
  }

  public verificarResposta():void{
    
    if (this.rodadaFrase.frasePtBr == this.resposta){
      alert("A tradução esta correta!")

      //troca pergunta da rodada
      this.rodada++

      //Atualiza percentual
      this.percentual= this.percentual + (100 / this.frases.length)

      this.atualizarResposta()
      
    }else{
      //diminuir a variavel tentativas
      this.tentativas--
      if(this.tentativas === -1){
        alert("Você perdeu todas as tentativas!")
      }
    }

  }
  
}
