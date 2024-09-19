import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Recipe } from '../model/recipe.model';

const BASE_PATH = environment.basePath;
console.log(BASE_PATH);

@Injectable({
  providedIn: 'root',
})
export class RecipesService {
  recipes$ = this.http.get<Recipe[]>(`${BASE_PATH}/recipes`);

  constructor(private http: HttpClient) {}
}
