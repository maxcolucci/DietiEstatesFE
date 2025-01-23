import { Component } from '@angular/core';
import {HeaderComponent} from './components/header/header.component';
import {SideFilterComponent} from './components/side-filter/side-filter.component';
import {SearchBarComponent} from './components/search-bar/search-bar.component';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, SideFilterComponent, SearchBarComponent],
  templateUrl: './app.component.html',
  standalone: true,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'DietiEstatesFE';
}
