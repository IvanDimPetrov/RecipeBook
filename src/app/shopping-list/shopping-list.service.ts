import { Ingredient } from '../shared/ingredient.model';
import { Subject } from 'rxjs';

export class ShoppingListService {

    private ingredients: Array<Ingredient> =  [
        new Ingredient("apple", 10),
        new Ingredient("lemon", 10)
    ];

    ingredientChanged = new Subject<Array<Ingredient>>();
    editIngredient = new Subject<Number>();

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

    getIngredient(id) {
        return this.ingredients[id];
    }

    updateIngredient(id: number, ingredient: Ingredient) {
        this.ingredients[id] = ingredient;
        this.ingredientChanged.next(this.ingredients.slice());
    }

    DeleteIngredient(id: number) {
       this.ingredients.splice(id, 1);
       this.ingredientChanged.next(this.ingredients.slice());
    }

}