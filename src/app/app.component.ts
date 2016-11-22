import { Component } from '@angular/core';
import { FileDropComponent } from './filedrop.component';

@Component({
  selector: 'app-root',
  templateUrl: './app/app.component.html',
  styleUrls: ['./app/app.component.css']
})
export class AppComponent {
  title = 'HelpText App!!!';
  footer = 'Info:';
  message = '';
}
