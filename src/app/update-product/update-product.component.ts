import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatFormFieldModule, MatError, MatFormField, MatPlaceholder, MatFormFieldControl } from '@angular/material/form-field';
import { Router, ActivatedRoute } from '@angular/router';
import { UpdateService } from '../update-product/update-product.service';
import { Http, Headers, RequestOptions, Response} from '@angular/http';


@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
  
})
export class UpdateProductComponent implements OnInit {
id :any;
idp: any;
name: any;
type: any;
des:any;
ins :any;
productTypes: any;


  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private UpdateService: UpdateService, private _http: Http) {
      this.route.params.subscribe(params => {
        this.id=params.id;
        console.log(params); 
      });
  }

  ngOnInit() {
     this.UpdateService.getAll().subscribe( data => this.productTypes = data, 
     error => console.log(error),
    //  console.log("eieiza: " + this.productTypes);
    () => console.log("Get all product complete"));
  }
  
save(): void {
 this.type =  this.productTypes.ProductType_Id;
  let update_string = this.idp + "/" + this.name +"/"+ this.ins +"/" +this.des +"/"+this.id + "/"+this.type;
  console.log(update_string);
  
    this.UpdateService.update(update_string).subscribe( data => this.id = data, 
     error => console.log(error),
    () => console.log("update complete"));
    console.log(this.type);
 }



}