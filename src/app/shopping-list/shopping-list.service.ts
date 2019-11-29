import { Ingredient } from '../shared/ingredient.model';
import { EventEmitter } from '@angular/core';

export class ShoppingListService {

    private ingredients: Array<Ingredient> =  [
        new Ingredient("apple", 10),
        new Ingredient("lemon", 10)
    ];

    ingredientChanged = new EventEmitter<Array<Ingredient>>();

    getIngredients() {
        return this.ingredients.slice();
    }

    addIngredient(ingredient: Ingredient) {
        this.ingredients.push(ingredient);
        this.ingredientChanged.emit(this.ingredients.slice());
    }

    addMultypleIngredients(ingredients: Array<Ingredient>) {
        this.ingredients.push(...ingredients);
        this.ingredientChanged.emit(this.ingredients.slice());
    }
}