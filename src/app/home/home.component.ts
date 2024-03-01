import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../services/recipe.service';
import { FormControl, FormGroup, NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  isSubmitted:boolean=false;
searchResult:any[]=[];
myFormGroup !: FormGroup;
  constructor(private recipeService:RecipeService,private _router:Router) { }

  ngOnInit(): void {
   this.myFormGroup = new FormGroup({
    searchBox : new FormControl('')
   });
  }

  search(value:any){
    const searchbox = this.myFormGroup.get('searchBox')!.value;
      // alert(searchbox);
    this.recipeService.getSearchRecipe(searchbox,'2','b04bdf19c9c246719db16e6f60c708bb')
    .subscribe((res)=>{
      console.log('Getting api from recipe',res);
      this.searchResult=res.results;
      
    })
  }

  OnSubmit() {
    this.isSubmitted=true;
    console.log('Value to search',this.myFormGroup.value);
    // this._router.navigate(['searchrecipe']);
    }

}
