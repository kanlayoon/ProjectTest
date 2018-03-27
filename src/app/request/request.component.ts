import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatFormFieldModule, MatError, MatFormField, MatPlaceholder, MatFormFieldControl } from '@angular/material/form-field';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { Product } from '../product/product.model';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable, Subject } from 'rxjs/Rx';
import { DataSource } from '@angular/cdk/collections';
import { Router, ActivatedRoute } from '@angular/router';
import { RequestService } from '../request/request.service';

export class State {
  constructor(public name: string, public population: string, public flag: string,
  private route: ActivatedRoute,
    private router: Router,
    private supplyService: RequestService, private _http: Http) { }
}

@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.css']
})
export class RequestComponent implements OnInit {
  dataSource1: MatTableDataSource<any>;
  code : any;
  date:Date;
  amount :any;
  public products: any[];
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private RequestService: RequestService, private _http: Http) {

  }
  ngOnInit() {
    this.RequestService.getAll().subscribe(data => {
      this.products = data;
      console.log(data);
      this.dataSource1 = new MatTableDataSource(this.products);
    },
      error => console.log(error));
  }

  myControl: FormControl = new FormControl();


  displayedColumns = ['Product_Id', 'Product_Name', 'ProductType_Name', 'Product_Des', 'Product_Instruction', 'BranchProduct_Amount', 'input_num', 'button'];

  dataSource = new ProductDataSource(this.RequestService);

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource1.filter = filterValue;
  }
 

request(pCode,amount): void{
  this.code = pCode;
  console.log("amount" + amount);
  this.amount = amount;
  let obj = {
    code : this.code,
    amount: this.amount,
    bid: 3,
    Date: this.date = new Date(),
  
  }
console.log("obj" + obj)
 this.RequestService.request(obj).subscribe(data => {
      this.request = data;  
    }, error => console.log(error));

}
}
export class ProductDataSource extends DataSource<any> {
  constructor(private supplyService: RequestService) {
    super();
  }
  connect(): Observable<Product[]> {
    return this.supplyService.getAll();
  }
  disconnect() { }
}

