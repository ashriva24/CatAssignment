import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(private httpClient: HttpClient) {
  }

  //--- Get the random image of cat from API ---------
  public getRandom() {
    var catList = this.httpClient.get('https://api.thecatapi.com/v1/images/search');
    return catList;
  }

    //--- Get the All cate categories from API ---------
  public getAllCategory() {
    var categoryList = this.httpClient.get('https://api.thecatapi.com/v1/categories');
    return categoryList;   
  }

    //--- Get the cat images according to categoryId from API ---------
  public getCatImagesBycategoryId(categoryId : string) {
    var catList = this.httpClient.get('https://api.thecatapi.com/v1/images/search?category_ids='+categoryId+'&limit=10');
    return catList;   
  }
}
