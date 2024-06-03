import { Component } from '@angular/core';

@Component({
  selector: 'app-alert-button',
  templateUrl: './alert-button.component.html',
  styleUrl: './alert-button.component.css'
})
export class AlertButtonComponent {

  content  = "você foi avisado";
  hideContent = true;
  severity = 423;

  toggle(){
    this.hideContent = !this.hideContent;
  }
}
