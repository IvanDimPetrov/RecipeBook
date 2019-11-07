import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';


@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  @Output() OnRecipeSelectEvent = new EventEmitter<Recipe>();


  recipes: Recipe[] = [
    new Recipe("миш маш", "чушляци с яйца", "https://recepti.gotvach.bg/files/lib/500x350/mishmashselski5.jpg"),
    new Recipe("пърженица", "пак чушляци с яйца", "https://receptite.com/photos/2019/41/big/R21705ULirinkaN82662.jpg"),
    new Recipe("бобец", "фартинг", "https://receptite.com/photos/2019/41/big/R5365USlavinaN37265.jpg")
  ];

  constructor() { }

  ngOnInit() {
  }

  OnRecipeClick(recipe: Recipe) {
    this.OnRecipeSelectEvent.emit(recipe)
  }

}
