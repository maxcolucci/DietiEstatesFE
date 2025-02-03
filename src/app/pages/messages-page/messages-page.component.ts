import { Component } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import {DatePipe, NgClass, NgForOf} from '@angular/common';

interface MessageType {
  id: number;
  houseTitle: string;
  message: string;
  status: 'accepted' | 'rejected' | 'rescheduled' | 'confirmed';
  date: Date;
  read: boolean;
}

@Component({
  selector: 'app-messages-page',
  templateUrl: './messages-page.component.html',
  imports: [MatListModule, MatCardModule, DatePipe, NgClass, NgForOf],
  styleUrls: ['./messages-page.component.css'],
  standalone: true
})
export class MessagesPageComponent {
  messages: MessageType[] = [
    {
      id: 1,
      houseTitle: 'Appartamento in centro',
      message: 'Il venditore ha accettato la tua offerta!',
      status: 'accepted',
      date: new Date(),
      read: false,
    },
    {
      id: 2,
      houseTitle: 'Villa con giardino',
      message: 'Il venditore ha rifiutato la tua offerta.',
      status: 'rejected',
      date: new Date(),
      read: true,
    },
    {
      id: 3,
      houseTitle: 'Attico panoramico',
      message: 'Il venditore ha rimandato la visita al 25 Febbraio.',
      status: 'rescheduled',
      date: new Date(),
      read: false,
    },
    {
      id: 4,
      houseTitle: 'Monolocale moderno',
      message: 'Il venditore ha confermato la visita!',
      status: 'confirmed',
      date: new Date(),
      read: true,
    },
  ];

  markAsRead(message: MessageType) {
    message.read = true;
  }
}
