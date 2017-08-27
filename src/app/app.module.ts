import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms'; // <-- NgModel lives here
import { AppComponent } from './app.component';
import {RecipeDetailsComponent} from './recipeDetails.component';
import {RecipesListComponent} from './recipes-list.component';
import { FilterSearchedRecipePipe } from './filter-searched-recipe.pipe';
import {RecipesService} from './recipes.service';

@NgModule({
  declarations: [
    AppComponent,
    RecipeDetailsComponent,
    RecipesListComponent,
    FilterSearchedRecipePipe,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [RecipesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
