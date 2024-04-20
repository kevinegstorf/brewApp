import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BatchService {
  constructor() {}

  getBatches() {
    return of([
      { id: 1, name: 'Alt', volume: 20, alcohol: 5, recipe: '1', rating: 2, date: new Date(), type: 'Ale'},
      { id: 2, name: 'Alt Right', volume: 20, alcohol: 5, recipe: '1', rating: 3, date: new Date(), type: 'Ale' },
      { id: 3, name: 'Chouffe', volume: 20, alcohol: 5, recipe: '1', rating: 4, date: new Date(), type: 'Ale' },
      { id: 3, name: 'Stammer Stout', volume: 20, alcohol: 5, recipe: '1', rating: 4, date: new Date(), type: 'Ale' },
      { id: 3, name: 'Barry Weizen', volume: 20, alcohol: 5, recipe: '1', rating: 4, date: new Date(), type: 'Ale'},
      { id: 3, name: 'Rooie Harry', volume: 20, alcohol: 5, recipe: '1', rating: 4, date: new Date(), type: 'Ale' },
      { id: 3, name: 'Ed Neipa', volume: 20, alcohol: 5, recipe: '1', rating: 4, date: new Date(), type: 'Ale' },
    ]);
  }
}

export type Batch = {
  id: number;
  name: string;
  volume: number;
  alcohol: number;
  recipe: string;
  rating: number;
  date: Date;
  type: string;
};
