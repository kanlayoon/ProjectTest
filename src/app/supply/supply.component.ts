import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatFormFieldModule, MatError, MatFormField, MatPlaceholder, MatFormFieldControl } from '@angular/material/form-field';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { SupplyService } from '../supply/supply.service';
import { Product } from '../product/product.model';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable, Subject } from 'rxjs/Rx';
import { DataSource } from '@angular/cdk/collections';
import { Router, ActivatedRoute } from '@angular/router';

export class State {
  constructor(public name: string, public population: string, public flag: string,
    private route: ActivatedRoute,
    private router: Router,
    private supplyService: SupplyService, private _http: Http) { }
}

@Component({
  selector: 'app-supply', 
  styleUrls: ['./supply.component.css'],
  templateUrl: './supply.component.html',
})
export class SupplyComponent implements OnInit {
  product:any;
  code: any;
  
  Amount :number;
  branchsel: any;
  public products: any[];
  branchs: any;
  selectbranch :any;
  branch: any;
  date:any;
  private productList: Product[];
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private supplyService: SupplyService, private _http: Http) {

  }
 
  ngOnInit() {
    this.supplyService.getBranch().subscribe(data => this.branchs = data,
      error => console.log(error),
      () => console.log("Get all product complete"));

    this.supplyService.getAll().subscribe(data => {
      this.products = data;
      console.log(data);
   
    },
      error => console.log(error));

  }
 
  displayedColumns = ['Product_Id', 'Product_Name', 'ProductType_Name', 'BranchProduct_EXP', 'Product_Des', 'Product_Instruction', 'BranchProduct_Amount', 'input_num', 'button'];
  // dataSource: MatTableDataSource<UserData>;
  dataSource = new ProductDataSource(this.supplyService);

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  
  supply(pCode,amount): void {
    console.log("Fsupply");
    // console.log(this.selectbranch);
    this.branchsel = this.selectbranch.Branch_Id;
    this.Amount = parseInt(amount);
    this.code = pCode;
    console.log(pCode);
    console.log(amount);
    let obj = {
      code : this.code,
      number: this.Amount,
      branchid: this.branchsel,
      Date: this.date = new Date(),
      head_id : 1
    }
   console.log(obj)
    
    this.supplyService.supply(obj).subscribe(data => {
      this.supply = data;  
    }, error => console.log(error));
  }

  onRowClicked(row) {
    
  }

}

export class ProductDataSource extends DataSource<any> {
  constructor(private supplyService: SupplyService) {
    super();
  }
  connect(): Observable<Product[]> {
    return this.supplyService.getAll();
  }
  disconnect() { }
}

