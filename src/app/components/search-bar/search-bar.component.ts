import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {CommonModule} from '@angular/common';

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
  imports: [CommonModule, FormsModule, MatFormFieldModule, MatSelectModule, MatInputModule],
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent {

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

  onSearch() {
    // Qui puoi aggiungere la logica per inviare i criteri di ricerca al servizio/endpoint
    // console.log('Ricerca:', this.searchCriteria);
    console.log('funziona');
    console.warn('funziona');
  }
}
