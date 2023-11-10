import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'que_1To4';
  
  //que-02
  fun(): string {
    return "Hello";
  }

  buttonText: string = 'Show Text';
  displayTextValue: string = '';

  displayText() {
    if (this.displayTextValue === 'Educating for Better tomorrow') {
      this.displayTextValue = 'Marvellous Infosystems';
      this.buttonText = 'Show Educating for Better tomorrow';
    } else {
      this.displayTextValue = 'Educating for Better tomorrow';
      this.buttonText = 'Show Marvellous Infosystems';
    }
  }
}
