import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  
  formOption? : number = 0;
  
  openForm(option? : number) : void{
    this.formOption = option;
  }

}