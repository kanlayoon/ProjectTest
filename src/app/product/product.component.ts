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
import { Inject} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';



@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  
})
export class ProductComponent implements OnInit {
  id_add :any;
idp_add: any;
name_add: any;
types_add: any;
des_add:any;
ins_add :any;
productTypes_add: any;
addtype_add:any;
typeproduct_add :any;
date_add :any;
amount_add : any;
  //
  animal: string;
  product: any;
  idp:any;
  code :any;
  name:any;
  exp:Date;
  amount:any;
  des:any;
  ins:any;
  type:any;
  data :any;
  selected : any;
  private productList: Product[];
  constructor(public dialog: MatDialog, private route: ActivatedRoute,
    private router: Router,
    private productService: ProductService, private _http: Http,
    ) {

  }
  
  public products: any[];
  openDialog(Product_Code,Product_Name,BranchProduct_EXP:'dd/MM/yyyy',Product_Des
  ,Product_Instruction,BranchProduct_Amount,ProductType_Name): void {
    // console.log("typeeeeeeeeeeeeeeeeeeeeee" + ProductType_Name);
    
    let dialogRef = this.dialog.open(updateProductDialog, {
      width: '400px',
      height: '500px',
      
      data: { code: Product_Code, name: Product_Name,exp:BranchProduct_EXP,
         des:Product_Des,ins:Product_Instruction,amount:BranchProduct_Amount ,type:ProductType_Name}  
    });
    
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.code = result.code;
      this.name = result.name;
      this.exp = result.exp;
      this.amount = result.amount;
      this.des = result.des;
      this.ins = result.ins;
      this.type = result.type;
     
    //  console.log("result" + result);
    this.openDialog1(this.code,this.name,this.exp,this.type,this.des,this.ins,this.amount);

    
    });
  }
 openDialog1(code,name,exp,des,ins,amount,type): void {

    let dialogRef = this.dialog.open(confirm_updateDialog, {
     
      
      data: { code: code, name: name,exp:exp,
         des:des,ins:ins,amount:amount ,type:type}  
    });
    
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
    });
  }
  dataAdd:any;
  warnAdd :any;
  warnConfirm:any;
  code_add :any;
  exp_add :Date;
  type_add :any;
  openDialogAdd(): void {
    let dialogRef = this.dialog.open(addProductDialog, {
      width: '700px',
      height: '500px',
      data: {  }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      // this.dataAdd = result;
      console.log("result"+result);
    
      this.code_add = result.id_add;
      this.name_add = result.name_add;
      this.exp_add = result.date_add;
      this.amount_add = result.amount_add;
      this.des_add = result.des_add;
      this.ins_add = result.ins_add;
      this.type_add = result.typeproduct_add;
      console.log("---------------------------------------------------add")
      console.log("data type" + this.type_add);
      
      if(result.id_add == undefined && result.name_add == undefined && result.date_add== undefined && result.typeproduct_add == undefined ){
        console.log("if addproduct");
        this.openDialog_warnAddP();
      }
      else{
      
        this.openDialog_confirmAddP(this.code_add,this.name_add,this.exp_add,this.amount_add, this.des_add ,this.ins_add,this.type_add);
      }
    });
  }
  openDialog_warnAddP(): void {
    let dialogRef = this.dialog.open(warnAddPDialog, {
      width: '250px',
      data: { name: this.name, animal: this.animal }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
    });
  }
 
  openDialog_confirmAddP(code_add,name_add,exp_add,amount_add, des_add ,ins_add,type_add): void {
    let dialogRef = this.dialog.open(confirmAddPDialog, {
      width: '250px',
      data: { name: this.name, animal: this.animal }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
      let insert_p = code_add; 
        let obj = {
          code_add: code_add,
          name_add: name_add,
          ins_add: ins_add,
          des_add: des_add,
          type_add: type_add,
          exp_add:exp_add,
          amount_add:amount_add,
          idb: 1
        }
        console.log("insert_p"+insert_p);
        console.log("obj"+code_add+name_add+ins_add+des_add+type_add+exp_add+amount_add);
         this.productService.sp_insert_Product(insert_p,obj).subscribe( data => this.id_add = data, 
             error => console.log(error),
            () => console.log("insert complete"));
          // console.log(this.types);
      
    });
  }
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


@Component({
  selector: 'dialog-overview-example-dialog',
  templateUrl: './update_product_modal.html',
})
export class updateProductDialog implements OnInit{
  productTypes:any;
  typeproduct:any;
  types:any;
  id:any;
  select ='sussssssssssssssssss';
  selected = this.productTypes;
  constructor(private route: ActivatedRoute,
    private router: Router,
    private productService: ProductService, private _http: Http,
    public dialogRef: MatDialogRef<updateProductDialog>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

    
  onNoClick(): void {
    this.dialogRef.close(); 
  }
  ngOnInit() {
    this.productService.getAllT().subscribe( data => this.productTypes = data, 
    error => console.log(error),
   //  console.log("eieiza: " + this.productTypes);
   () => console.log("Get all product complete"));
 }
  update(code,name,exp,type,des,ins,amount): void {
    console.log("do update" + code + name + exp+type+des+ins+amount);
    // this.openDialog1(code,name,exp,type,des,ins,amount);

    this.data.code =  code;
    this.data.name = name;
    this.data.exp = exp;
    this.data.type= type;
    this.data.des= des;
    this.data.ins= ins;
    this.data.amount = amount;
    
   
        
     }
}


@Component({
  selector: 'dialog-overview-example-dialog',
  templateUrl: 'modal_confirm_update.html',
})
export class confirm_updateDialog{
 
  constructor(private route: ActivatedRoute,
    private router: Router,
    private productService: ProductService, private _http: Http,
    public dialogRef: MatDialogRef<confirm_updateDialog>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

    
  onNoClick(): void {
    this.dialogRef.close(); 
  }
  update(code,name,exp,type,des,ins,amount): void {
 
    console.log("updateeeeeeeeppppppppppppppppppppppppppp"+code+name+exp+type+des+ins+amount);
    //  this.types =  this.typeproduct.ProductType_Id;
    //  console.log(this.types);
      //let update_string = this.idp + "/" + this.name +"/"+ this.ins +"/" +this.des +"/"+this.id + "/"+this.types;
      let update_string = code;
      let obj = {
        idp: code,
        name:name,
        ins: ins,
        des: des,
        type: type
      }
      console.log(update_string);
        this.productService.update(update_string,obj).subscribe( data => 
         error => console.log(error),
        () => console.log("update complete"));
        // console.log(this.types);
        
     }
 
     
}
@Component({
  selector: 'dialog-overview-example-dialog',
  templateUrl: 'modal_add.html',
})
export class addProductDialog implements OnInit{
//add
id_add :any;
idp_add: any;
name_add: any;
types_add: any;
des_add:any;
ins_add :any;
productTypes_add: any;
addtype_add:any;
typeproduct_add :any;
date_add :any;
amount_add : any;
  constructor(public dialog: MatDialog, private route: ActivatedRoute,
    private router: Router,
    private productService: ProductService, private _http: Http,
    public dialogRef: MatDialogRef<addProductDialog>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }
    ngOnInit() {
      this.productService.getAllType().subscribe( data => this.productTypes_add = data, 
        error => console.log(error),
       //  console.log("eieiza: " + this.productTypes);
       () => console.log("Get all product complete"));
       
      }
      code = new FormControl('', [Validators.required, Validators.email]);

  getErrorMessage() {
    return this.code.hasError('required') ? 'You must enter a value' :
        this.code.hasError('email') ? 'Not a valid email' :
            '';
  }
  namep = new FormControl('', [Validators.required, Validators.email]);

  getErrorMessage2() {
    return this.namep.hasError('required') ? 'You must enter a value' :
        this.namep.hasError('email') ? 'Not a valid email' :
            '';
  }

  
  sp_insert_Product(id_add,name_add,typeproduct_add,date_add,des_add,ins_add,amount_add): void {
    this.types_add =  this.productTypes_add.ProductType_Id;
      //  console.log(this.types_add);
        console.log("add dataaaaaaaaaaa");
        let insert_p = this.id_add; 
        let obj = {
          id: this.id_add,
          name: this.name_add,
          ins: this.ins_add,
          des: this.des_add,
          type: this.types_add,
          date :this.date_add,
          amount:this.amount_add,
          idb: 1
        }
         this.productService.sp_insert_Product(insert_p,obj).subscribe( data => this.id_add = data, 
             error => console.log(error),
            () => console.log("insert complete"));
          // console.log(this.types);
        
       
       }
  onNoClick(): void {
    this.dialogRef.close();
  }

}
@Component({
  selector: 'dialog-overview-example-dialog',
  templateUrl: 'modal_warnAdd.html',
})
export class  warnAddPDialog {

  constructor(
    public dialogRef: MatDialogRef<warnAddPDialog>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
@Component({
  selector: 'dialog-overview-example-dialog',
  templateUrl: 'modal_confirmAdd.html',
})
export class confirmAddPDialog {

  constructor(
    public dialogRef: MatDialogRef<confirmAddPDialog>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

}

