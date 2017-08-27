import { Pipe, PipeTransform } from '@angular/core';
import { Recipe } from './recipe';

@Pipe({
  name: 'filterSearchedRecipe'
})
export class FilterSearchedRecipePipe implements PipeTransform {
  transform(recipes: Recipe[], filter: string): any {
    console.log("items:" + recipes);
    console.log("filter:" + filter);
     if (!recipes || !filter) {
       return recipes;
     }
     // filter items array, items which match and return true will be kept, false will be filtered out
     return recipes.filter(recipe => recipe.name.indexOf(filter) !== -1);
    }  
}

