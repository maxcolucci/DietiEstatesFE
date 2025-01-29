import { Component } from '@angular/core';
import {MatSliderModule} from '@angular/material/slider';

@Component({
  selector: 'app-side-filter',
  templateUrl: './side-filter.component.html',
  imports: [MatSliderModule],
  standalone: true,
  styleUrls: ['./side-filter.component.css']
})
export class SideFilterComponent {

}
