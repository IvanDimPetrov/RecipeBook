import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { ShoppingListService } from 'src/app/shopping-list/shopping-list.service';
import { ActivatedRoute, Params } from '@angular/router';
import { RecipesService } from '../recipes.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

  recipeDetails: Recipe

  constructor(private route: ActivatedRoute, private shoppingListService: ShoppingListService, private recipesService: RecipesService) { 
  }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      let id = +params.id;
      let recipe = this.recipesService.getRecipeById(id);
      this.recipeDetails = recipe;
    });
  }

  onAddToShoppingList() {
    this.shoppingListService.addMultypleIngredients(this.recipeDetails.ingredients)
  }
}
