import { Component, Input, OnInit } from '@angular/core';
import { Room } from '../models/room.model';

@Component({
  selector: 'app-dettaglistanza',
  templateUrl: './dettaglistanza.component.html',
  styleUrls: ['./dettaglistanza.component.css']
})
export class DettaglistanzaComponent implements OnInit {

@Input() room : Room = undefined!

  constructor() { }

  ngOnInit(): void {
  }

}
