import { Component, OnInit, OnChanges } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  ingredients: Array<Ingredient>;

  constructor(private shoppingListService: ShoppingListService) {}

  ngOnInit(): void {
    this.shoppingListService.ingredientChanged.subscribe((ingredients: Array<Ingredient>) => {
      this.ingredients = ingredients;
    });

    this.ingredients = this.shoppingListService.getIngredients();
  }

}
