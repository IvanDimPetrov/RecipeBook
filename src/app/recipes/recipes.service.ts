import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { Subject } from 'rxjs';

export class RecipesService {

    private recipes: Recipe[] =[
        new Recipe(1, "миш маш", 
                    "чушляци с яйца", 
                    "https://recepti.gotvach.bg/files/lib/500x350/mishmashselski5.jpg",
                    [new Ingredient("Чубрица", 5), new Ingredient("Чушляци", 5)]),

        new Recipe(2, "пърженица", 
                   "пак чушляци с яйца", 
                   "https://receptite.com/photos/2019/41/big/R21705ULirinkaN82662.jpg",
                   [new Ingredient("Сол", 2)]),
                   

        new Recipe(3, "бобец", 
                   "фартинг", 
                   "https://receptite.com/photos/2019/41/big/R5365USlavinaN37265.jpg",
                   [new Ingredient("джоджен", 15)])
    ];

    recipesChanged = new Subject<Recipe[]>();

    getRecipes() {
        return this.recipes.slice();
    }

    getRecipeById(id: number) {
        var recipe = this.recipes.find((el) => {
            return el.id === id;
        })

        return Object.assign({}, recipe);
    }

    addRecipe(formValue) {
        let lastIdInRecipes: number;

        if (this.recipes.length > 0 ) {
            lastIdInRecipes = this.recipes[this.recipes.length - 1].id;
        }
        else {
            lastIdInRecipes = 0;
        }

        let newRecipe =  new Recipe(lastIdInRecipes + 1, formValue.name, formValue.description, formValue.imagePath, formValue.ingredients);
        this.recipes.push(newRecipe);
        this.recipesChanged.next(this.recipes.slice());

    }

    updateRecipe(formValue) {

        let index = this.recipes.findIndex((el) => {
            return el.id === formValue.id;
        });

        var newRecipe =  new Recipe(formValue.id, formValue.name, formValue.description, formValue.imagePath, formValue.ingredients);

        this.recipes[index] = newRecipe;
     
        this.recipesChanged.next(this.recipes.slice());
        
    }

    deleteRecipe(id: number) {
       
        let index = this.recipes.findIndex((el) => {
            console.log(el.id === id)
            return el.id === id;
        });

        this.recipes.splice(index, 1);

        this.recipesChanged.next(this.recipes.slice());
    }
}