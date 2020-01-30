import { Component, OnInit } from '@angular/core';
import { DashboardService } from './dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  catList;
  categoryList;
  selectedCategory;
  constructor(private dashboardService: DashboardService) {
  }

  ngOnInit() { 
    this.getRandom();
    this.getAllCategory();
  }
  

  // display the ramdom image on load/ landing
  public getRandom() {
    var catList = this.dashboardService.getRandom().subscribe((data) => {
      this.catList = data;     
    });   
  }

  // display the category List in dropdown
  public getAllCategory() {
    var categoryList = this.dashboardService.getAllCategory().subscribe((data) => {
      this.categoryList = data;     
    });   
  }

  //display the according to category
  modelChanged(value:string) {  
    var catList = this.dashboardService.getCatImagesBycategoryId(value).subscribe((data) => {
      this.catList = data;      
    }); 
  }
}
