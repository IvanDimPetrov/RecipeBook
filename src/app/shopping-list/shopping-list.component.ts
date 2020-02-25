import { Component, OnInit, OnChanges, OnDestroy } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  

  private shopingListServiceSubcription: Subscription;

  ingredients: Array<Ingredient>

  constructor(private shoppingListService: ShoppingListService) {}

  ngOnInit(): void {
    this.shopingListServiceSubcription = this.shoppingListService.ingredientChanged.subscribe((ingredients: Array<Ingredient>) => {
      this.ingredients = ingredients;
    });

    this.ingredients = this.shoppingListService.getIngredients();
  }

  ngOnDestroy(): void {
    this.shopingListServiceSubcription.unsubscribe();
  }

}
