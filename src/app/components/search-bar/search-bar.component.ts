import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {CommonModule} from '@angular/common';
import {MatButton} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { SidenavService } from '../../sidenav.service';


interface BuildingType {
  value: string;
  viewValue: string;
}

interface ContractType {
  value: string;
  viewValue: string;
  disabled: boolean;
}

@Component({
  selector: 'search-bar',
  templateUrl: './search-bar.component.html',
  standalone: true,
  imports: [CommonModule, FormsModule, MatFormFieldModule, MatSelectModule, MatInputModule, MatButton, MatIconModule],
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent {

  constructor(private sidenavService: SidenavService) {}

  // Metodo per attivare il sidenav
  openSidenav() {
    this.sidenavService.toggleSidenav();
  }


  buildingTypes: BuildingType[] = [
    {value: 'apartment', viewValue: 'Appartamento'},
    {value: 'villa', viewValue: 'Villa'},
    {value: 'house', viewValue: 'Casa'},
    {value: 'office', viewValue: 'Ufficio'},
    {value: 'warehouse', viewValue: 'Magazzino'}
  ]

  contractTypes: ContractType[] = [
    {value: 'rent', viewValue: 'Affitto', disabled: false},
    {value: 'sale', viewValue: 'Vendita', disabled: false},
    {value: 'rent small', viewValue: 'Affitto Breve (prossimamente)', disabled: true},
  ]
  isHovered: boolean = false;

  onSearch() {
    // Qui puoi aggiungere la logica per inviare i criteri di ricerca al servizio/endpoint
    // console.log('Ricerca:', this.searchCriteria);
    console.log('funziona');
    console.warn('funziona');
  }
}
