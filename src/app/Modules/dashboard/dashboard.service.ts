import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(private httpClient: HttpClient) {
  }

  public getRandom() {
    var catList = this.httpClient.get('https://api.thecatapi.com/v1/images/search');
    return catList;
  }

  public getAllCategory() {
    var categoryList = this.httpClient.get('https://api.thecatapi.com/v1/categories');
    return categoryList;   
  }

  public getCatImagesBycategoryId(categoryId : string) {
    var catList = this.httpClient.get('https://api.thecatapi.com/v1/images/search?category_ids='+categoryId+'&limit=10');
    return catList;   
  }
}
