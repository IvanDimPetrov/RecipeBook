import { Recipe } from './recipe.model';
import { EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

export class RecipesService {

    OnSelectRecipeEvent = new EventEmitter();

    private recipes: Recipe[] =[
        new Recipe("миш маш", 
                    "чушляци с яйца", 
                    "https://recepti.gotvach.bg/files/lib/500x350/mishmashselski5.jpg",
                    [new Ingredient("Чубрица", 5)]),

        new Recipe("пърженица", 
                   "пак чушляци с яйца", 
                   "https://receptite.com/photos/2019/41/big/R21705ULirinkaN82662.jpg",
                   [new Ingredient("Сол", 2)]),
                   

        new Recipe("бобец", 
                   "фартинг", 
                   "https://receptite.com/photos/2019/41/big/R5365USlavinaN37265.jpg",
                   [new Ingredient("джоджен", 15)])
    ];

    getRecipes() {
        return this.recipes.slice();
    }

}