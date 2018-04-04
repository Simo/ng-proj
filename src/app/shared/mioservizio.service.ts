import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';


@Injectable()
export class MioservizioService {

  messaggio = new Subject<string>();

  constructor() { }

  sendMessage(msg: string){
    this.messaggio.next(msg);
  }



}
