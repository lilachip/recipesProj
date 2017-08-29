import { Injectable } from '@angular/core';
import { Recipe } from './recipe';
import {RecipesListComponent} from './recipes-list.component';

@Injectable()
export class RecipesService {
    private RECIPES = [
        { id: 11, name: 'chocolate cake', recipe:'2eegs 3 suger cups, 2 cups of flower, mix well'},
        { id: 12, name: 'brauni', recipe:'ccccccccccccccccccccccccccccc'},
        { id: 13, name: 'sponge cake', recipe:'dddddddddddddddddddddddddddddddddd'},
        { id: 14, name: 'black forest cake', recipe:'eeeeeeeeeeeeeeeeeeee'},
        { id: 15, name: 'cheese cake', recipe:'fffffffffffffffffffffffffffffffff'},
        { id: 16, name: 'cookies', recipe:'ggggggggggggggggggggggggggggggg'},
        { id: 17, name: 'chocolate chip cake', recipe:'hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh'},
        { id: 18, name: 'green cake', recipe:'iiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii'},
        { id: 19, name: 'yellow cake', recipe:'jjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj'},
        { id: 20, name: 'purple cake', recipe:'kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk'},
      ];
    
    constructor(){
    
    }
    getRecipesList(){
    return this.RECIPES;
    // getItems(): Promise<Recipe[]> {
    // return Promise.resolve(RECIPES);
    // }
}
}


