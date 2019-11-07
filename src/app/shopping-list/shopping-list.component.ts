import { Component, OnInit, OnChanges } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
 
  ngOnInit(): void {
  }

  ingredients: Array<Ingredient> = [
    new Ingredient("apple", 10),
    new Ingredient("lemon", 10)
  ];

  constructor() { }

}
