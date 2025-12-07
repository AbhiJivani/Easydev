import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navigationbar } from './navigationbar/navigationbar';
@Component({
  selector: 'app-root',
  imports: [Navigationbar],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('easydev');
}
