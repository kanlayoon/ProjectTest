import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {MatFormFieldModule, MatError, MatFormField, MatPlaceholder, MatFormFieldControl} from '@angular/material/form-field';
import {NgbModal, NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import { Http, Headers, RequestOptions, Response} from '@angular/http';
import { Console } from '@angular/core/src/console';
import { Router, ActivatedRoute } from '@angular/router';
import { AddProductTypeService } from '../add-product/add-productType.service';
import {UpdateService} from '../update-product/update-product.service';
@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css'],
  
})

export class AddProductComponent implements OnInit {
  id :any;
  idp: any;
  name: any;
  types: any;
  des:any;
  ins :any;
  productTypes: any;
  addtype:any;
  typeproduct :any;
  date :any;
  amount : any;
  public products :any[];
  ProductCode :any;
  show :any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private AddProductTypeService: AddProductTypeService, private _http: Http,
    private updateService: UpdateService

  ) {
      
  }
  
  ngOnInit() {
    this.AddProductTypeService.getAllproduct().subscribe( data => this.products = data, 
      error => console.log(error),
     () => console.log("Get all product complete"));
     console.log("product: " + this.products);
     

     this.AddProductTypeService.getAllproduct().subscribe( data => this.products = data, 
      error => console.log(error),
     //  console.log("eieiza: " + this.productTypes);
     () => console.log("Get all product complete"));
    
     if(this.ProductCode!= undefined){
      return this.show = 1;
  }
  console.log("show"+this.show);
  console.log("show"+this.ProductCode);
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
Show(productC){
 console.log("code"+productC);
}
  save(): void {
    // console.log("this is line 44: "+this.typeproduct.ProductType_Id);
     //this.addtype 
     console.log(this.addtype);
      //let update_string = this.idp + "/" + this.name +"/"+ this.ins +"/" +this.des +"/"+this.id + "/"+this.types;
      let addProductType = this.addtype;
      
      console.log(addProductType);
        this.AddProductTypeService.addType(addProductType).subscribe( data => this.id = data, 
         error => console.log(error),
        () => console.log("update complete"));
        // console.log(this.types);
     }
     
  sp_insert_Product(): void {
      // console.log("this is line 44: "+this.typeproduct.ProductType_Id);
      this.types =  this.typeproduct.ProductType_Id;
       console.log(this.types);
        // let insert_string = this.idp + "/" + this.name +"/"+ this.ins +"/" +this.des +"/"+this.id + "/"+this.types;
        console.log("add dataaaaaaaaaaa");
        let insert_p = this.id; 
        let obj = {
          id: this.id,
          name: this.name,
          ins: this.ins,
          des: this.des,
          date :this.date,
          amount:this.amount,
          type: this.types,
          idb: 1
        }
        console.log(insert_p);
        console.log(obj);
          this.AddProductTypeService.sp_insert_Product(insert_p,obj).subscribe( data => this.id = data, 
           error => console.log(error),
          () => console.log("insert complete"));
          // console.log(this.types);
       }
  
 
}
