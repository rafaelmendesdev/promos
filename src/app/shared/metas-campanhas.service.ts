import { Injectable } from '@angular/core';
import { CAMPANHA_CLIENTE } from '../data/metas-campanha';

@Injectable({
  providedIn: 'root'
})
export class MetasCampanhasService {

  constructor() { }

  getMetasOptin() {
    return CAMPANHA_CLIENTE;
  }
}
