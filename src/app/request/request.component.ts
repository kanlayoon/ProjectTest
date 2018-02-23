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
   
    },
      error => console.log(error));
  }

  myControl: FormControl = new FormControl();
  foods = [
    { value: 'steak-0', viewValue: 'Steak' },
    { value: 'pizza-1', viewValue: 'Pizza' },
    { value: 'tacos-2', viewValue: 'Tacos' }
  ];

  options = [
    'One',
    'Two',
    'Three'
  ];

  displayedColumns = ['Product_Id', 'Product_Name', 'ProductType_Name', 'BranchProduct_EXP', 'Product_Des', 'Product_Instruction', 'BranchProduct_Amount', 'input_num', 'button'];

  dataSource = new ProductDataSource(this.RequestService);

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

 

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

