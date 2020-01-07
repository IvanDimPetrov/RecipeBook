import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecipesComponent } from './recipes/recipes.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { RecipeEmptyComponent } from './recipes/recipe-empty/recipes-empty.component';
import { RecipeEditComponent } from './recipes/recipe-edit/recipe-edit.component';

const routes: Routes = [
  { path: '', redirectTo: 'recipes', pathMatch: 'full', },
  { path: 'recipes', component: RecipesComponent, children: [
    { path: '', component: RecipeEmptyComponent},
    { path: 'new', component: RecipeEditComponent},
    { path: ':id', component: RecipeDetailComponent},
    { path: ':id/edit', component: RecipeEditComponent}
  ]},
  { path: 'shoping-list', component: ShoppingListComponent}
]


@NgModule({
    declarations: [

    ],
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutesModule {}