import {Component, OnInit} from '@angular/core';
import {HeaderComponent} from './components/header/header.component';
import {SideFilterComponent} from './components/side-filter/side-filter.component';
import {SearchBarComponent} from './components/search-bar/search-bar.component';
import {CardComponentComponent} from './components/card-component/card-component.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {FormsModule} from '@angular/forms';
import {MatCheckbox} from '@angular/material/checkbox';
import {MatButton} from '@angular/material/button';
import { SidenavService } from './sidenav.service';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, SideFilterComponent, SearchBarComponent, CardComponentComponent, MatSidenavModule, FormsModule, MatCheckbox, MatButton],
  templateUrl: './app.component.html',
  standalone: true,
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {

  isSidenavOpened = false;

  constructor(private sidenavService: SidenavService) {}

  ngOnInit() {
    this.sidenavService.sidenavState$.subscribe((state) => {
      this.isSidenavOpened = state; // Aggiorna lo stato del sidenav
    });
  }

  title = 'DietiEstatesFE';
  events: string[] = [];

}
