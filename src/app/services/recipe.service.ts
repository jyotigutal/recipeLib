import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  getSearchResults:any = 'https://api.spoonacular.com/recipes/complexSearch';

   getRecipeInformation:any= 'https://api.spoonacular.com/recipes/${id}/information?includeNutrition=false&apiKey=b04bdf19c9c246719db16e6f60c708bb';
  
  // getInstructions:any ='https://api.spoonacular.com/recipes/${id}/analyzedInstructions?apiKey=b04bdf19c9c246719db16e6f60c708bb';
  
  constructor(private httpClient:HttpClient) { }

  
  getSearchRecipe(query:any,number:any,apiKey:any):Observable<any>{
    const params = new HttpParams()
    .set("query", query)
    .set("number", number)
    .set("apiKey", apiKey)

    return this.httpClient.get(this.getSearchResults,{params:params});
  }
  getRecipe(includeNutrition:any,apiKey:any):Observable<any>{
    const params = new HttpParams()
    .set("includeNutrition",includeNutrition)
    .set("apiKey",apiKey)
    return this.httpClient.get(this.getRecipeInformation,{params:params})
  }
}
