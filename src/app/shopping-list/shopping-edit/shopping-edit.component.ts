import { Component, OnInit, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  @Output() OnAddIngredientEvent = new EventEmitter<Ingredient>();


  @ViewChild('nameInput', {static: true}) nameInput: ElementRef;
  @ViewChild('amountInput', {static: true}) amountInput: ElementRef;

  constructor() { }

  ngOnInit() {
  }

  OnSubmit(formData: any) {

    let ingredientName: string = formData.name;
    let ingredientAmount: number = formData.amount;

    this.OnAddIngredientEvent.emit(new Ingredient(ingredientName, ingredientAmount ));

    //this.nameInput.nativeElement.value = "";
    //this.amountInput.nativeElement.value = "";

  }

}
