import {Component, Input, ViewChild} from '@angular/core';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import {AsyncPipe, NgFor} from '@angular/common';

interface HouseCardType {
  image: string;
  title: string;
  price: number;
  fewInfo: string;
  shortDescription: string;
}

@Component({
  selector: 'app-card-component',
  imports: [MatCardModule, MatPaginatorModule],
  templateUrl: './card-component.component.html',
  standalone: true,
  styleUrl: './card-component.component.css'
})


export class CardComponentComponent {
  @Input() house!: HouseCardType;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

}
