import {Component, signal} from '@angular/core';
import {MatSliderModule} from '@angular/material/slider';
import {
  MatAccordion, MatExpansionModule,
  MatExpansionPanel,
  MatExpansionPanelDescription,
} from '@angular/material/expansion';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonToggle, MatButtonToggleGroup} from '@angular/material/button-toggle';
import {FormsModule} from '@angular/forms';
import {NgClass} from '@angular/common';

interface Option {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-side-filter',
  templateUrl: './side-filter.component.html',
  imports: [MatSliderModule, MatExpansionPanel, MatAccordion, MatExpansionModule, MatExpansionPanelDescription, MatIconModule, MatButtonToggleGroup, MatButtonToggle, FormsModule, MatSliderModule],
  standalone: true,
  styleUrls: ['./side-filter.component.css']
})
export class SideFilterComponent {
  readonly panelOpenState = signal(false);

  selectedOption: string = ''; // Inizializzata come stringa vuota (puoi cambiarla se necessario)

  // Funzione che viene chiamata quando un'opzione viene selezionata
  onSelect(option: string): void {
    this.selectedOption = option;
    console.log('Opzione selezionata:', this.selectedOption);  // Puoi anche fare altre operazioni qui
  }

  selectedOption2: number | null = null; // Nessuna opzione selezionata inizialmente

  onCheckboxChange(option: number): void {
    if (this.selectedOption2 === option) {
      // Se l'opzione è già selezionata, deselezionala
      this.selectedOption2 = null;
    } else {
      // Se una nuova opzione viene selezionata, aggiorna la variabile
      this.selectedOption2 = option;
    }
    console.log('Opzione selezionata:', this.selectedOption2);
  }
}
