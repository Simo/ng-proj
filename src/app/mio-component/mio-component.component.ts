import { Component, OnInit } from '@angular/core';
import { MioservizioService } from '../shared/mioservizio.service';

@Component({
  selector: 'app-mio-component',
  templateUrl: './mio-component.component.html',
  styleUrls: ['./mio-component.component.css']
})
export class MioComponentComponent implements OnInit {


  private lista = ['stringa1','stringa2','stringa3'];

  constructor(private service: MioservizioService) { }

  ngOnInit() {
    this.service.sendMessage('ciao');
  }

}
