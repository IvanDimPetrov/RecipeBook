import { Component, OnInit, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  @ViewChild('nameInput', {static: true}) nameInput: ElementRef;
  @ViewChild('amountInput', {static: true}) amountInput: ElementRef;

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
  }

  OnSubmit(formData: any) {

    let ingredientName: string = formData.name;
    let ingredientAmount: number = formData.amount;

    //this.nameInput.nativeElement.value = "";
    //this.amountInput.nativeElement.value = "";

    this.shoppingListService.addIngredient(new Ingredient(ingredientName, ingredientAmount ))

  }

}
