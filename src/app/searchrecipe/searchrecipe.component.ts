import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../services/recipe.service';

@Component({
  selector: 'app-searchrecipe',
  templateUrl: './searchrecipe.component.html',
  styleUrls: ['./searchrecipe.component.css']
})
export class SearchrecipeComponent implements OnInit {

  searchResult:any[]=[];
  constructor(private recipeService : RecipeService) {
    
   }

  ngOnInit(): void {
    this.recipeService.getRecipeInformation('false','b04bdf19c9c246719db16e6f60c708bb').subscribe((res:any)=>{
      console.log('Getting the Data ',res.results);
       this.searchResult = res.results;
    })
  }


}
