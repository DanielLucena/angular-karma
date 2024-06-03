import { Component } from '@angular/core';

@Component({
  selector: 'app-hello',
  templateUrl: 'hello.component.html',
 })
 export class HelloComponent {
  name = "Fulano"
  numMsgs = 0

  aumentar(){
    this.numMsgs++;
  }

  diminuir(){
    if(this.numMsgs > 0)
    this.numMsgs--;
  }
 }