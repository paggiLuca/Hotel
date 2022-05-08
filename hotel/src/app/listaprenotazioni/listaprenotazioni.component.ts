import { Component, Input, OnInit } from '@angular/core';
import { booking } from '../models/booking.model';
import { Room } from '../models/room.model';

@Component({
  selector: 'app-listaprenotazioni',
  templateUrl: './listaprenotazioni.component.html',
  styleUrls: ['./listaprenotazioni.component.css']
})
export class ListaprenotazioniComponent implements OnInit {

  constructor() { }
  
  @Input() listaPreno : booking[] = undefined!; 
  rooms : Room = undefined!
  ngOnInit(): void {
  }


  mostraDettagli(room : Room){
    this.rooms = room;
    
  }
}
