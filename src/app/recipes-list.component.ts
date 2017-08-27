import {Component, Input, OnInit} from '@angular/core';
import { Recipe } from './recipe';
import {RecipesService} from './recipes.service';

  @Component({
    selector: 'recipes-list',
    template: `
    <div class="container-fluid"> 
    <div class="row align-items-center">     
  <div class="col-md-3">   
  <h1>{{title}}</h1>
  <h2>search 4 recipe:</h2>        
  <input placeholder="serach for a recipe..." [(ngModel)]="search">
  <ul>
    <li *ngFor="let recipe of recipes | filterSearchedRecipe:search"
      [class.selected]="recipe === selectedItem"
      (click)="onSelect(recipe)">
      <span>{{recipe.id}}) {{recipe.name}}</span>
    </li>
  </ul>
</div> 
<recipe-details class="col-md-8" [recipe]="selectedItem"></recipe-details>
</div>
</div>
`,
//styleUrls: ['./recipes.list.component.css'],
//  providers:[ItemService]
})

export class RecipesListComponent implements OnInit{
  constructor(private recipesService:RecipesService){}

  @Input()recipe: Recipe;  
  recipes: Recipe[];
  selectedItem: Recipe;

  onSelect(recipe:Recipe):void{
    this.selectedItem = recipe;
  }

  ngOnInit(){
     var _this = this;
     console.log("hello");
     this.recipes = this.recipesService.getRecipesList();
    }
}
