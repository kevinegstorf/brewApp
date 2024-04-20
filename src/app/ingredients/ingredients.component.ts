import { Component } from '@angular/core';
import { Ingredient, IngredientService } from './services/ingredient.service';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-ingredients',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './ingredients.component.html',
  styleUrl: './ingredients.component.scss'
})
export class IngredientsComponent {
  readonly ingredients$!: Observable<Ingredient[]>;

  constructor(private ingredientService: IngredientService) { 
    this.ingredients$ = this.ingredientService.getIngredients().pipe(
      (ing) =>{
        return ing;
      }
    )
  }
}
