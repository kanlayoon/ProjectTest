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
import { Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';


@Component({
  selector: 'app-supply',
  styleUrls: ['./supply.component.css'],
  templateUrl: './supply.component.html',
})
export class SupplyComponent implements OnInit {
  product: any;
  code: any;

  animal: string;
  name: string;
  branchName:any;
  Amount: number;
  branchsel: any;
  public products: any[];
  branchs: any;
  selectbranch: any;
  branch: any;
  date: any;
  private productList: Product[];
  constructor(public dialog: MatDialog,
    private route: ActivatedRoute,
    private router: Router,
    private supplyService: SupplyService, private _http: Http) {

  }
  openDialog(): void {
    let dialogRef = this.dialog.open(check_branch_supplyDialog, {
      width: '250px',
      data: { name: this.name, animal: this.animal }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
    });
  }
  openDialog1(): void {
    let dialogRef = this.dialog.open(check_amount_supplyDialog, {
      width: '250px',
      data: { name: this.name, animal: this.animal }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
    });
  }
  openDialog2(pCode, amount,branchName,productName,bid): void {
    let dialogRef = this.dialog.open(modal_confirm_supplyDialog, {
      width: '250px',
      data: { code :pCode,amount: amount,branch :branchName,name : productName ,bid:bid }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
      // this.supply(code,amount);
    });
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


  supply(pCode, amount,name,bname): void {
    console.log("Fsupply");
    console.log(this.selectbranch);
    if (this.selectbranch === undefined) {
      console.log("check");
      this.openDialog();
    }
    if (this.selectbranch !== undefined) {
      this.branchsel = this.selectbranch.Branch_Id;
      this.branchName = this.selectbranch.Branch_Name;
      console.log("branch" + this.branchsel);
    }
    if(amount === undefined){
      this.openDialog1();
    }
    if(amount !== undefined){
     
      this.openDialog2(pCode, amount,this.branchName,name,this.branchsel);
    }

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

@Component({
  selector: 'dialog-overview-example-dialog',
  templateUrl: 'modal_check_branch.html',
})
export class check_branch_supplyDialog {

  constructor(
    public dialogRef: MatDialogRef<check_branch_supplyDialog>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
@Component({
  selector: 'dialog-overview-example-dialog',
  templateUrl: 'modal_check_amount.html',
})
export class check_amount_supplyDialog {

  constructor(
    public dialogRef: MatDialogRef<check_amount_supplyDialog>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
@Component({
  selector: 'dialog-overview-example-dialog',
  templateUrl: 'modal_confirm_supply.html',
})
export class modal_confirm_supplyDialog {
  product: any;
  code: any;
  animal: string;
  name: string;
  Amount: number;
  branchsel: any;
  public products: any[];
  branchs: any;
  selectbranch: any;
  branch: any;
  date: any;
  private productList: Product[];

  constructor(public dialog: MatDialog,
    private route: ActivatedRoute,
    private router: Router,
    private supplyService: SupplyService, private _http: Http,
    public dialogRef: MatDialogRef<modal_confirm_supplyDialog>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  onNoClick(): void {
    this.dialogRef.close();
  }
  supplyConfirm(pCode, amount,bid): void {
    console.log("Fsupply");
    console.log("pCode"+pCode);
    console.log("amount"+amount);
    console.log("bid"+bid);
      this.code = pCode;
      console.log(pCode);
      console.log(amount);
      let obj = {
        code: pCode,
        number: amount,
        branchid:bid,
        Date: this.date = new Date(),
        head_id: 1
      }
      this.supplyService.supply(obj).subscribe(data => pCode = data,
        error => console.log(error),
        () => console.log("supply complete"));
  }
 

}
