import { Component, OnInit, NgZone } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Console } from '@angular/core/src/console';
import { Router, ActivatedRoute } from '@angular/router';
import { typeProductService } from '../TypeProduct/typeProduct.service';
import { Observable, Subject } from 'rxjs/Rx';
import { DataSource } from '@angular/cdk/collections';
import { TypeProduct } from './TypeProduct.model';
import { MatFormFieldModule, MatError, MatFormField, MatPlaceholder, MatFormFieldControl } from '@angular/material/form-field';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-type-product',
  templateUrl: './Typeproduct.component.html'
  //   styleUrls: ['./type-product.component.css']

})
export class TypeProductComponent implements OnInit {
  productTypes: any[];
  addtype: any;
  id: any;
  TypeName: any;
  animal: string;
  name: string;
  data: any;
  warnAdd: any;
  constructor(private zone: NgZone,
    private route: ActivatedRoute,
    private router: Router,
    private typeProductService: typeProductService, private _http: Http, public dialog: MatDialog) { }


  openDialog(id, name): void {
    let dialogRef = this.dialog.open(ModalTypeProductDialog, {
      height: '300px',
      width: '400px',
      data: { name: name, id: id }

    });
    console.log(this.data);
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed' + result);
      if (result != undefined) {
        this.update(id, result);
      }


    });
  }
  update(id, name): void {
    //let update_string = this.idp + "/" + this.name +"/"+ this.ins +"/" +this.des +"/"+this.id + "/"+this.types;
    console.log("update" + id + name);
    let code = id;
    let obj = {
      name
    }
    console.log(code);
    this.typeProductService.update(code, obj).subscribe(data => code = data,
      error => console.log(error),
      () => console.log("update complete"));
    // console.log(this.types);
  }
  openDialogDel(id, name): void {
    let dialogRef = this.dialog.open(ModalTypeProductDelDialog, {
      height: '300px',
      width: '400px',
      data: { name: name, id: id }

    });
    console.log(this.data);
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed' + result);

      // this.del(id);

    });
  }


  ngOnInit() {

    this.typeProductService.getAll().subscribe(data => {
      this.zone.run((() => {
        this.productTypes = data;
      }))
    });


  }
  displayedColumns = ['type_id', 'type_name', 'btt'];
  dataSource = new ProductDataSource(this.typeProductService);
  save(): void {
    if (this.addtype == '' || this.addtype == undefined) {
      this.warnAdd = 1;
      console.log("warnAdd" + this.warnAdd);

    }
    else {
      this.warnAdd = 0;
      console.log(this.addtype);
      //let update_string = this.idp + "/" + this.name +"/"+ this.ins +"/" +this.des +"/"+this.id + "/"+this.types;
      let addProductType = this.addtype;

      console.log(addProductType);
      this.typeProductService.addType(addProductType).subscribe(data => this.id = data,
        error => console.log(error),
        () => console.log("update complete"));
      // console.log(this.types);
    }


  }



}
export class ProductDataSource extends DataSource<any> {
  constructor(private typeProductService: typeProductService) {
    super();
  }
  connect(): Observable<TypeProduct[]> {
    return this.typeProductService.getAll();
  }
  disconnect() { }
}
@Component({
  selector: 'dialog-overview-example-dialog',
  templateUrl: 'modal_type.html',
})

export class ModalTypeProductDialog {


  constructor(private route: ActivatedRoute,
    private router: Router,
    private typeProductService: typeProductService, private _http: Http, public dialog: MatDialog,
    public dialogRef: MatDialogRef<ModalTypeProductDialog>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
@Component({
  selector: 'dialog-overview-example-dialog',
  templateUrl: 'modal_DelType.html',
})

export class ModalTypeProductDelDialog {

  constructor(private route: ActivatedRoute,
    private router: Router,
    private typeProductService: typeProductService, private _http: Http, public dialog: MatDialog,
    public dialogRef: MatDialogRef<ModalTypeProductDelDialog>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  onNoClick(): void {
    this.dialogRef.close();

  }
  del(code): void {
    console.log(code);
    this.typeProductService.del(code).subscribe(data => code = data,
      error => console.log(error),
      () => console.log("update complete"));
    // console.log(this.types);
  }

}