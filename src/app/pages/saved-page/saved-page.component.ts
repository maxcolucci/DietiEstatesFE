import {Component, ViewChild, AfterViewInit} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {CardComponentComponent} from '../../components/card-component/card-component.component';
import {AsyncPipe, NgForOf} from '@angular/common';

interface HouseCardType {
  image: string;
  title: string;
  price: number;
  fewInfo: string;
  shortDescription: string;
  isSaved?: boolean;
}

@Component({
  selector: 'app-saved-page',
  imports: [
    CardComponentComponent,
    NgForOf,
    MatPaginator
  ],
  templateUrl: './saved-page.component.html',
  standalone: true,
  styleUrl: './saved-page.component.css'
})
export class SavedPageComponent {
  houses: HouseCardType[] = [
    {
      image: "assets/immagine.png",
      title: 'Villa in campagna',
      price: 1000000,
      fewInfo: '3 camere, 2 bagni',
      shortDescription: 'Villa in campagna con giardino e piscina',
      isSaved: true
    },
    {
      image: "",
      title: 'Appartamento in centro',
      price: 5000000,
      fewInfo: '9m2, 2 camere, 1 bagno',
      shortDescription: 'Appartamento in centro con terrazzo',
      isSaved: true
    },
    {
      image: "",
      title: 'Loft in periferia',
      price: 1000000,
      fewInfo: '100m2, 7 camere, 3 bagni',
      shortDescription: 'Loft in periferia con terrazzo e piscina royale',
      isSaved: true
    },
    {
      image: "",
      title: 'Appartamento in centro',
      price: 5000000,
      fewInfo: '9m2, 2 camere, 1 bagno',
      shortDescription: 'Appartamento in centro con terrazzo',
      isSaved: true
    },
    {
      image: "",
      title: 'Loft in periferia',
      price: 1000000,
      fewInfo: '100m2, 7 camere, 3 bagni',
      shortDescription: 'Loft in periferia con terrazzo e piscina royale',
      isSaved: true
    },
    {
      image: "",
      title: 'Appartamento in centro',
      price: 5000000,
      fewInfo: '9m2, 2 camere, 1 bagno',
      shortDescription: 'Appartamento in centro con terrazzo',
      isSaved: true
    },
    {
      image: "",
      title: 'Loft in periferia',
      price: 1000000,
      fewInfo: '100m2, 7 camere, 3 bagni',
      shortDescription: 'Loft in periferia con terrazzo e piscina royale',
      isSaved: true
    },
    {
      image: "",
      title: 'Appartamento in centro',
      price: 5000000,
      fewInfo: '9m2, 2 camere, 1 bagno',
      shortDescription: 'Appartamento in centro con terrazzo',
      isSaved: true
    }
  ];

  dataSource = new MatTableDataSource<HouseCardType>(this.houses);

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

}
