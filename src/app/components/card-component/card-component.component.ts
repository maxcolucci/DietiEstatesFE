import { Component, ViewChild } from '@angular/core';
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
  imports: [MatCardModule, NgFor, MatPaginatorModule, AsyncPipe],
  templateUrl: './card-component.component.html',
  standalone: true,
  styleUrl: './card-component.component.css'
})


export class CardComponentComponent {
  houseCard: HouseCardType[] = [
    {
      image: "",
      title: 'Villa in campagna',
      price: 1000000,
      fewInfo: '3 camere, 2 bagni',
      shortDescription: 'Villa in campagna con giardino e piscina'
    },
    {
      image: "",
      title: 'Appartamento in centro',
      price: 5000000,
      fewInfo: '9m2, 2 camere, 1 bagno',
      shortDescription: 'Appartamento in centro con terrazzo'
    },
    {
      image: "",
      title: 'Loft in periferia',
      price: 1000000,
      fewInfo: '100m2, 7 camere, 3 bagni',
      shortDescription: 'Loft in periferia con terrazzo e piscina royale'
    },
    {
      image: "",
      title: 'Appartamento in centro',
      price: 5000000,
      fewInfo: '9m2, 2 camere, 1 bagno',
      shortDescription: 'Appartamento in centro con terrazzo'
    },
    {
      image: "",
      title: 'Loft in periferia',
      price: 1000000,
      fewInfo: '100m2, 7 camere, 3 bagni',
      shortDescription: 'Loft in periferia con terrazzo e piscina royale'
    },
    {
      image: "",
      title: 'Appartamento in centro',
      price: 5000000,
      fewInfo: '9m2, 2 camere, 1 bagno',
      shortDescription: 'Appartamento in centro con terrazzo'
    },
    {
      image: "",
      title: 'Loft in periferia',
      price: 1000000,
      fewInfo: '100m2, 7 camere, 3 bagni',
      shortDescription: 'Loft in periferia con terrazzo e piscina royale'
    },
    {
      image: "",
      title: 'Appartamento in centro',
      price: 5000000,
      fewInfo: '9m2, 2 camere, 1 bagno',
      shortDescription: 'Appartamento in centro con terrazzo'
    },
    {
      image: "",
      title: 'Loft in periferia',
      price: 1000000,
      fewInfo: '100m2, 7 camere, 3 bagni',
      shortDescription: 'Loft in periferia con terrazzo e piscina royale'
    },
    {
      image: "",
      title: 'Appartamento in centro',
      price: 5000000,
      fewInfo: '9m2, 2 camere, 1 bagno',
      shortDescription: 'Appartamento in centro con terrazzo'
    },
    {
      image: "",
      title: 'Loft in periferia',
      price: 1000000,
      fewInfo: '100m2, 7 camere, 3 bagni',
      shortDescription: 'Loft in periferia con terrazzo e piscina royale'
    }
  ];
  dataSource = new MatTableDataSource(this.houseCard);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
}
