import { Component, OnInit, OnDestroy } from '@angular/core';
import { MioservizioService } from '../shared/mioservizio.service';

@Component({
  selector: 'app-secondo',
  templateUrl: './secondo.component.html',
  styleUrls: ['./secondo.component.css']
})
export class SecondoComponent implements OnInit, OnDestroy {

  saluto = '';

  constructor(private servizio: MioservizioService) { }

  ngOnInit() {
    this.servizio.messaggio.subscribe(mess => this.saluto = mess );
  }

  ngOnDestroy(){
    this.servizio.messaggio.unsubscribe();
  }


}
