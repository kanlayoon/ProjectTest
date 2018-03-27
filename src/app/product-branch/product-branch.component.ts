import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatFormFieldModule, MatError, MatFormField, MatPlaceholder, MatFormFieldControl } from '@angular/material/form-field';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { ProductService } from '../product/product.service';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable, Subject } from 'rxjs/Rx';
import { DataSource } from '@angular/cdk/collections';
import { Router, ActivatedRoute } from '@angular/router';
import { Product } from '../product/product.model';
export class State {
  constructor(public name: string, public population: string, public flag: string) { }
}

@Component({
  selector: 'app-product-branch',
  templateUrl: './product-branch.component.html',
  styleUrls: ['./product-branch.component.css']
})
export class ProductBranchComponent implements OnInit {
  dataSource1: MatTableDataSource<any>;
  product: any;
  idp:any;
  idb:any;
  private productList: Product[];
  constructor( private route: ActivatedRoute,
    private router: Router,
    private productService: ProductService, private _http: Http) {

  }
  public products: any[];
  ngOnInit() {
    this.idb = 3;
    this.productService.getAll(this.idb).subscribe(data => {
      this.products = data;
      console.log(data)
      this.dataSource1 = new MatTableDataSource(this.products);
    },
      error => console.log(error));
  }

  myControl: FormControl = new FormControl();

  displayedColumns = ['Product_Code', 'Product_Name', 'ProductType_Name', 'BranchProduct_EXP', 'Product_Des', 'Product_Instruction', 'BranchProduct_Amount'];
 
  dataSource = new ProductDataSource(this.productService);

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource1.filter = filterValue;
  }
}

export class ProductDataSource extends DataSource<any> {
  idb :any; 
    constructor(private productService: ProductService) {
      
      super();
    }
    connect(): Observable<Product[]> {
      this.idb = 3;
      return this.productService.getAll(this.idb);
    }
    disconnect() { }
  }
