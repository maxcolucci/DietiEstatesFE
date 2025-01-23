import { Component } from '@angular/core';
import {HeaderComponent} from './components/header/header.component';
import {SideFilterComponent} from './components/side-filter/side-filter.component';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, SideFilterComponent],
  templateUrl: './app.component.html',
  standalone: true,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'DietiEstatesFE';
}
