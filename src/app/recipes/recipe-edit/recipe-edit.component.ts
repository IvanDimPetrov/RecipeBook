import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Params, Router  } from '@angular/router';
import { Location } from '@angular/common';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { RecipesService } from '../recipes.service';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']

})
export class RecipeEditComponent implements OnInit {

  private id: number;
  private editMode: boolean = false;
  private form: FormGroup;

  constructor(private route: ActivatedRoute, private location: Location, private router: Router, private recipeService: RecipesService ) { }
  
  private InitForm() {

    let name = '';
    let imagePath = '';
    let description = '';
    let ingredients: Array<FormGroup> = [];

    if (this.editMode) {

      let recipe = this.recipeService.getRecipeById(this.id);
      name = recipe.name;
      description = recipe.description;
      imagePath = recipe.imagePath;
      
      if (recipe.ingredients.length > 0) {
        for (let ingr of recipe.ingredients) {
          ingredients.push(new FormGroup({
            "name": new FormControl(ingr.name, [Validators.required]),
            "amount": new FormControl(ingr.amount, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)])
          }))
        }
      }
    }

    this.form = new FormGroup({
      "name": new FormControl(name, [Validators.required]),
      "imagePath": new FormControl(imagePath, [Validators.required]),
      "description": new FormControl(description, [Validators.required]),
      "ingredients": new FormArray(ingredients)
    });

  }

  

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.id = +params.id;
      this.editMode = params.id != null;
    });

    this.InitForm();
    
  }

  AddIngredient() {
    (<FormArray>this.form.get('ingredients')).push(new FormGroup({
      "name": new FormControl("", [Validators.required]),
      "amount": new FormControl("", [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)])
    }))
  }

  OnSubmit() {
    let values = this.form.value;
    
    if (this.editMode) {
      values.id = this.id;
      this.recipeService.updateRecipe(values);
    }
    else {
      this.recipeService.addRecipe(values);
    }

    this.location.back();
  }

  OnCancelSubmit() {
    //this.location.back();
    this.router.navigate(['../'], { relativeTo: this.route } );
  }

  OnDeleteIngredient(index: number) {
    (<FormArray>this.form.get('ingredients')).removeAt(index);
  }
}
