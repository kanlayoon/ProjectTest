import { Component, OnInit } from '@angular/core';
import { ViewChild} from '@angular/core';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import { UsingProductBService } from '../usingproduct-branch/usingproductB.service';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable, Subject } from 'rxjs/Rx';
import { DataSource } from '@angular/cdk/collections';
import { Router, ActivatedRoute } from '@angular/router';
// import { course } from './usingproduct-branch.model';
import { Product } from '../product/product.model';
@Component({
  selector: 'app-usingproduct-branch',
  templateUrl: './usingproduct-branch.component.html',
  styleUrls: ['./usingproduct-branch.component.css']
})
export class UsingproductBranchComponent implements OnInit {
  Code:any;
  Amount:any;
  Date :any;
  use :any[];
  CourseSel:any;
 public course: any;
 courseSelected: any;
 public product:any[];
 
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private UsingProductBService: UsingProductBService, private _http: Http) { }
  displayedColumns = ['Product_Code', 'Product_Name', 'amount','button'];
  dataSource = new ProductDataSource(this.UsingProductBService);

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  ngOnInit() {
    this.UsingProductBService.get_course().subscribe(data => {
      this.course = data;
      console.log(data);
   
    },
      error => console.log(error));
      this.UsingProductBService.getAll().subscribe(data => {
        this.product = data;
        console.log(data);
     
      },
        error => console.log(error));
  }
  foods = [
    { value: 'steak-0', viewValue: 'Steak' },
    { value: 'pizza-1', viewValue: 'Pizza' },
    { value: 'tacos-2', viewValue: 'Tacos' }
  ];
  useProduct(Course,code,amount){
    this.Code = code;
    this.Amount = amount;
    this.CourseSel = Course.Course_Id;
    console.log("course"+this.CourseSel);
    console.log("amount"+amount);
    console.log("code"+this.Code);
    let obj = {
      code: this.Code,
      amount: this.Amount,
      course: this.course,
      date :this.Date = new Date(),
      bid: 3
    }
    this.UsingProductBService.useProduct(obj).subscribe(data => {
      this.use = data;  
    }, error => console.log(error), () => console.log("insert complete"));
    
  }
 
}
export class ProductDataSource extends DataSource<any> {
  constructor(private UsingProductBService: UsingProductBService) {
    super();
  }
  
  connect(): Observable<Product[]> {
    return this.UsingProductBService.getAll();
  }
  disconnect() { }
}


