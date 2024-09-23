import { Injectable } from '@angular/core';
import { CLIENTE } from '../data/cliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor() { }

  getCliente() {
    return CLIENTE;
  }
}
