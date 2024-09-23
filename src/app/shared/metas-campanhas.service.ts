import { Injectable } from '@angular/core';
import { METAS_CAMPANHAS } from '../data/metas-campanha';

@Injectable({
  providedIn: 'root'
})
export class MetasCampanhasService {

  constructor() { }

  getMetasOptin() {
    return METAS_CAMPANHAS;
  }
}
