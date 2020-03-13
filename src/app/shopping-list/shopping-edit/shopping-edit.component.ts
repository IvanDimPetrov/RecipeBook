import { Component, OnInit, Output, EventEmitter, ViewChild, ElementRef, AfterViewInit, OnDestroy } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';
import { FormGroup, NgForm } from '@angular/forms';
import { format } from 'util';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, AfterViewInit, OnDestroy {
 
  private isValidFormData: boolean = false;
  private editIngredientSubscription: Subscription;
  private editMode: boolean = false;
  private editedItemIndex: number;

  private get submitButtonLabel() {
    return this.editMode === false ? "Add" : "Update";
  }

  private ResetForm() {
    this.editMode = false;
    this.editedItemIndex = null;
    this.form.reset();
  }


  @ViewChild("addIngredientForm", {static: false}) form: NgForm;

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
    this.editIngredientSubscription = this.shoppingListService.editIngredient.subscribe((value: number) => {
      this.editMode = true;
      this.editedItemIndex = value;
      var ingredient = this.shoppingListService.getIngredient(this.editedItemIndex);
      this.form.setValue(ingredient);
    })
  }

  ngAfterViewInit(): void {
    this.form.statusChanges.subscribe((value) => {
      if(value === "VALID") {
        this.isValidFormData = true;
      }
      else if (value === "INVALID") {
        this.isValidFormData = false;
      }
    })
  }

  ngOnDestroy(): void {
    this.editIngredientSubscription.unsubscribe();
  }

  private OnSubmit() {
    
    if (this.editMode === true) {
      this.shoppingListService.updateIngredient(this.editedItemIndex, this.form.value);
    }
    else {
      let ingredientName: string = this.form.value.name;
      let ingredientAmount: number = this.form.value.amount;

      this.shoppingListService.addIngredient(new Ingredient(ingredientName, ingredientAmount ));
    }

    this.ResetForm();
  }

  private DeleteIngredient() {
      this.shoppingListService.DeleteIngredient(this.editedItemIndex);
      this.ResetForm();
  }

}
