import {Component, Input} from '@angular/core';
import { Recipe } from './recipe';

@Component({
  selector:'recipe-details',
  template:`
  <div *ngIf="recipe" class="rightDIv">
  <h2 class="markedLabel">Easy 2 make: </h2>  
  <h2>{{recipe.name}} recipe!</h2>
  <div><label>id: </label>{{recipe.id}}</div>
  <div>
    <label>change recipe's name: </label>
    <input [(ngModel)]="recipe.name" placeholder="name"/>
    </div>
    <p class="recipe">{{recipe.recipe}}</p>    
  </div>
  `, 
})

export class RecipeDetailsComponent{
  @Input()recipe: Recipe;
}