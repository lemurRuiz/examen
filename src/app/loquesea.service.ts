import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoqueseaService {

  constructor() { }
  logMessage() {
    console.log('Hola Mundo');
  }
}


