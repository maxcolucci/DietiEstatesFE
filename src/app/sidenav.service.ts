import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SidenavService {
  private sidenavState = new BehaviorSubject<boolean>(false); // Stato del sidenav
  sidenavState$ = this.sidenavState.asObservable(); // Observable che altri componenti possono osservare

  // Metodo per attivare il sidenav
  toggleSidenav() {
    this.sidenavState.next(!this.sidenavState.value);
  }
}
