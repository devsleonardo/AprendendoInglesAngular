import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public gamePlay:boolean = true
  public tipoEncerramento:string =""

  public encerrarJogo(tipo:string):void{
    this.gamePlay = false
    this.tipoEncerramento =tipo
  }

  public newGame():void{
    this.gamePlay = true
    this.tipoEncerramento = ""
  }
}
