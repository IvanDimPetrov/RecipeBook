import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../recipe.model';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from 'src/app/shopping-list/shopping-list.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

  @Input() recipeDetails: Recipe

  constructor(private shoppingListService: ShoppingListService) { 
  }

  ngOnInit() {
  }

  onAddToShoppingList() {
    this.shoppingListService.addMultypleIngredients(this.recipeDetails.ingredients)
  }
}
