import {Component, signal} from '@angular/core';
import {MatSliderModule} from '@angular/material/slider';
import {
  MatAccordion, MatExpansionModule,
  MatExpansionPanel,
  MatExpansionPanelDescription,
  MatExpansionPanelTitle
} from '@angular/material/expansion';
import {MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'app-side-filter',
  templateUrl: './side-filter.component.html',
  imports: [MatSliderModule, MatExpansionPanel, MatAccordion, MatExpansionModule, MatExpansionPanelTitle, MatExpansionPanelDescription, MatIconModule],
  standalone: true,
  styleUrls: ['./side-filter.component.css']
})
export class SideFilterComponent {
  readonly panelOpenState = signal(false);

}
