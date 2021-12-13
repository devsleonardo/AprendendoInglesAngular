import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-attempts',
  templateUrl: './attempts.component.html',
  styleUrls: ['./attempts.component.scss']
})
export class AttemptsComponent implements OnInit {

  public heartFull:string = "mx-1 fa fa-heart fa-3x"
  public heartEmpy:string = "mx-1 fa fa-heart-o fa-3x"

  constructor() { }

  ngOnInit(): void {
  }

}
