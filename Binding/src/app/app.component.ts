import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Binding';

  pageTitle = 'Angular Data Binding';
  message = 'Hello, Angular!';



  imageUrl = 'https://angular.io/assets/images/logos/angular/angular.svg';
  isDisabled = false;



  showMessage() {
    alert('Button clicked!');
  }




  name = '';




  isHighlighted = true;
  isItalic = false;
  textColor = 'blue';
  fontSize = 20;
}
