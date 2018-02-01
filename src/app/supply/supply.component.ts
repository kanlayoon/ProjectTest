import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatFormFieldModule, MatError, MatFormField, MatPlaceholder, MatFormFieldControl } from '@angular/material/form-field';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { SupplyService } from '../supply/supply.service';
import { Product } from '../product/product.model';
import { Http, Headers, RequestOptions, Response} from '@angular/http';
import { Observable, Subject } from 'rxjs/Rx';
import {DataSource} from '@angular/cdk/collections';

export class State {
  constructor(public name: string, public population: string, public flag: string) { }
}

@Component({
  selector: 'app-supply',
  templateUrl: './supply.component.html',
  styleUrls: ['./supply.component.css'],
  
})
export class SupplyComponent implements OnInit {
  private productList: Product[];
  constructor( private supplyService: SupplyService, private _http: Http ) {
   
  }
  public products: any[];

  ngOnInit() {     
    this.supplyService.getAll().subscribe( data => this.products = data, 
     error => console.log(error),
    () => console.log("Get all product complete"));

  }

  
  myControl: FormControl = new FormControl();
  Catproduct = [
    { value: 'steak-0', viewValue: 'รหัสสินค้า' },
    { value: 'pizza-1', viewValue: 'ชื่อสินค้า' },
    { value: 'tacos-2', viewValue: 'ประเภทสินค้า' }
  ];
  branchs =[
    { value: 'steak-0', viewValue: 'สาขา1' },
    { value: 'steak-0', viewValue: 'สาขา2' },
    { value: 'steak-0', viewValue: 'สาขา3' },
    { value: 'steak-0', viewValue: 'สาขา4' },
    { value: 'steak-0', viewValue: 'สาขา5' },
  ]

  
  displayedColumns = ['Product_Id', 'Product_Name','ProductType_Name','BranchProduct_EXP','Product_Des','Product_Instruction','BranchProduct_Amount','sss'];
  // dataSource: MatTableDataSource<UserData>;
  dataSource = new ProductDataSource(this.supplyService);

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
  constructor(private supplyService: SupplyService) {
    super();
  }
  connect(): Observable<Product[]> {
    return this.supplyService.getAll();
  }
  disconnect() {}
}



/** Builds and returns a new User. */
// function createNewUser(id: number): UserData {
//   const name =
//       NAMES[Math.round(Math.random() * (NAMES.length - 1))] + ' ' +
//       NAMES[Math.round(Math.random() * (NAMES.length - 1))].charAt(0) + '.';
//       const aaa =
//       aaas[Math.round(Math.random() * (aaas.length - 1))] + ' ' +
//       aaas[Math.round(Math.random() * (aaas.length - 1))].charAt(0) + '.';

//   return {
//     id: id.toString(),
//     name: name,
//     progress: Math.round(Math.random() * 100).toString(),
//     color: COLORS[Math.round(Math.random() * (COLORS.length - 1))],
//     aaa:aaa,
//   };
// }

