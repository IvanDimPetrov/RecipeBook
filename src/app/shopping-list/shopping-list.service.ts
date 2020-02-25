import { Ingredient } from '../shared/ingredient.model';
import { Subject } from 'rxjs';

export class ShoppingListService {

    private ingredients: Array<Ingredient> =  [
        new Ingredient("apple", 10),
        new Ingredient("lemon", 10)
    ];

    ingredientChanged = new Subject<Array<Ingredient>>();

    getIngredients() {
        return this.ingredients.slice();
    }

    addIngredient(ingredient: Ingredient) {
        this.ingredients.push(ingredient);
        this.ingredientChanged.next(this.ingredients.slice());
    }

    addMultypleIngredients(ingredients: Array<Ingredient>) {
        this.ingredients.push(...ingredients);
        this.ingredientChanged.next(this.ingredients.slice());
    }
}