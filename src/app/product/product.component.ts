import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatFormFieldModule, MatError, MatFormField, MatPlaceholder, MatFormFieldControl } from '@angular/material/form-field';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { ProductService } from '../product/product.service';
import { Product } from './product.model';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable, Subject } from 'rxjs/Rx';
import { DataSource } from '@angular/cdk/collections';
import { Router, ActivatedRoute } from '@angular/router';
export class State {
  constructor(public name: string, 
    public population: string, 
    public flag: string,
  ) { }
}

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  providers: [ProductService]
})
export class ProductComponent implements OnInit {
  product: any;
  idp:any;
  private productList: Product[];
  constructor( private route: ActivatedRoute,
    private router: Router,
    private productService: ProductService, private _http: Http) {

  }
  public products: any[];

  ngOnInit() {
    this.productService.getAll().subscribe(data => {
      this.products = data;
      console.log(data)
      
    },
      error => console.log(error));
  }  
  category = [
    {value: '1', viewValue: ''},
    {value: '2', viewValue: 'Pizza'},
    {value: '3', viewValue: 'Tacos'}
  ];


  addIdDel(Product_Id){
    this.idp = Product_Id;
    console.log("addIdDel: " + this.idp);
  }
  delProduct(): void { 
      let update_string = this.idp;
      console.log(update_string);
      this.productService.del(update_string).subscribe( data => this.idp = data, 
         error => console.log(error),
        () => console.log("delete complete"));
        // console.log(this.types);
      
     }


  displayedColumns = ['Product_Code', 'Product_Name', 'ProductType_Name', 'BranchProduct_EXP', 'Product_Des', 'Product_Instruction', 'BranchProduct_Amount', 'sss'];
  // dataSource: MatTableDataSource<UserData>;
  dataSource = new ProductDataSource(this.productService);

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;


  /**
   * Set the paginator and sort after the view init since this component will
   * be able to query its view for the initialized paginator and sort.
   */
  ngAfterViewInit() {
    // this.dataSource.paginator = this.paginator;
    // this.dataSource.sort = this.sort;

  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    // this.dataSource.filter = filterValue;
  }



}

export class ProductDataSource extends DataSource<any> {
  constructor(private productService: ProductService) {
    super();
  }
  connect(): Observable<Product[]> {
    return this.productService.getAll();
  }
  disconnect() { }
}



