import { Component, OnInit, OnChanges, Input, SimpleChanges} from '@angular/core';
import { Heart } from '../shared/heart.model';


@Component({
  selector: 'app-attempts',
  templateUrl: './attempts.component.html',
  styleUrls: ['./attempts.component.scss']
})
export class AttemptsComponent implements OnInit, OnChanges{
  
  @Input() public tentativas:number = 3

  public Hearts: Heart[]=[
    new Heart(true),new Heart(true),new Heart(true)
  ]

  constructor() {
    
   }

  ngOnChanges(): void {
    //this.tentativas
    //this.Heats.lenght
    if(this.tentativas !== this.Hearts.length){
      let indice = this.Hearts.length - this.tentativas
      this.Hearts[indice -1].full = false
    }
    console.log(`Tentativas Recebidas no painel: ${this.tentativas}`)
  }

  ngOnInit(): void {
    
  }

}
