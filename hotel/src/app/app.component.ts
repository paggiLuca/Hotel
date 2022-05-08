import { HttpClient } from '@angular/common/http';   //Importa Il modulo http
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { booking } from './models/booking.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'hotel';
  obsRoom : Observable<booking[]> = undefined! 
  data : booking[] = undefined!;
  constructor(private http: HttpClient) {
    
  }

  ngOnInit(): void {
    
   this.obsRoom = this.http.get<booking[]>("https://my-json-server.typicode.com/malizia-g/hotel/booking");
   this.obsRoom.subscribe(this.faiQualcosa)

  }


  faiQualcosa = (data: booking[])  => {
    
    this.data = data; 

  }
}
