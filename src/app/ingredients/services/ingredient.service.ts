import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IngredientService {

  constructor() { }

  getIngredients() {
    return of([
      { id: 2, name: 'Mout', quantity: 2000, unit: 'g', price: 0.01 },
      { id: 3, name: 'Hop', quantity: 50, unit: 'g', price: 0.01 },
      { id: 4, name: 'Gist', quantity: 1, unit: 'stuk', price: 0.01 },
    ]);
  }

}

export type Ingredient = { id: number, name: string, quantity: number, unit: string, price: number};

