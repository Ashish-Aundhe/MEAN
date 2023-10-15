import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',

  // Inline CSS Method 
  template: `
    <div style="text-align: center">
      <h1>
        Welcome to Inline App!
      </h1>
      <!-- <p [style.color]="textColor">This is an inline template and style example.</p> -->
    </div>
  `,
  styles: [`
    h1 {
      color: red;
    }
    p {
      font-size: 18px;
    }
  `]
})
export class AppComponent {
  title = 'assign06';
  Name = 'Hellow '
}
