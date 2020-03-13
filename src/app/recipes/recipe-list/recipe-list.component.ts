import { Component, OnInit, OnDestroy } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipesService } from '../recipes.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit, OnDestroy {
 
  recipes: Recipe[];

  private recipesChangedSubscription: Subscription;

  constructor(private router: Router, private recipesService: RecipesService) { }

  ngOnInit() {
 
    this.recipesChangedSubscription = this.recipesService.recipesChanged.subscribe((value) => {
      this.recipes = value;
    })

    this.recipes = this.recipesService.getRecipes();
  }


  ngOnDestroy(): void {
    this.recipesChangedSubscription.unsubscribe();
  }

  OnNewRecipe() {
    this.router.navigate(['/recipes/new'])
  }

}
