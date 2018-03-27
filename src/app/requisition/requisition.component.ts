import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatFormFieldModule, MatError, MatFormField, MatPlaceholder, MatFormFieldControl } from '@angular/material/form-field';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { RequisitionService } from '../requisition/Requisition.service';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable, Subject } from 'rxjs/Rx';
import { DataSource } from '@angular/cdk/collections';
import { Router, ActivatedRoute } from '@angular/router';
import { Reqproduct } from './requisition.model';
import { reqCheck } from './requisition.model';
import { ProductService } from '../product/product.service';

export class State {
  constructor(public name: string, public population: string, public flag: string,
    private route: ActivatedRoute,
    private router: Router, private RequisitionService: RequisitionService, private _http: Http,
    
  ) { }
}
@Component({
  selector: 'app-requisition',
  templateUrl: './requisition.component.html',
  styleUrls: ['./requisition.component.css']
})

export class RequisitionComponent implements OnInit {

  dataSource1: MatTableDataSource<{}>;
  constructor(private RequisitionService: RequisitionService, private _http: Http) { }
  Reqproducts: any;
  reqCheck: any;
  reqAmount:any;
  code: any;
  pCode: any;
  pName: any;
  branchs : any;
  products : any;
  amount :any;
  date : any;
  supplyAmount :any;
  selectbranch :any;
  branch :any;
  product : any;
  ngOnInit() {
    this.RequisitionService.getBranch().subscribe(data => this.branchs = data,
      error => console.log(error),
      () => console.log("Get all product complete"));

    this.RequisitionService.get_AllReq().subscribe(data => {
      this.Reqproducts = data;
      this.dataSource1 = new MatTableDataSource(this.Reqproducts);
      console.log(data);
      console.log("get all req complitse")
    }, error => console.log(error));
    
  }
  
  supplyReq(Pcode,amount,Branch_Id): void{
    console.log("Fsupply");
  console.log("amount"+ amount);
    this.branch =  Branch_Id;
    this.code =  Pcode;
    this.amount =  amount;
    let obj = {
      bid : this.branch,
      code : this.code, 
      hid : 1,
      amount : this.amount,
      date : this.date = new Date()

    };
    console.log("supplyReq " + obj.bid + obj.code + obj.amount + obj.date + obj.hid ); 
    
    this.RequisitionService.supplyReq(obj).subscribe(data => {
      this.supplyAmount = data;  
    }, error => console.log(error));
  }
  check(Pcode, Pname): void {
    console.log("Fcheck");
    let Code = this.code;
    this.pCode = Pcode;
    this.pName = Pname;
    
   
    this.RequisitionService.check(Pcode).subscribe(data => {
      this.reqCheck = data;
      error => console.log(error);
      // console.log(this.reqCheck);
      // console.log("pcode" + Pcode)
    });
    let branch = {
      bid : 1,
      code:Pcode
      
    };
    this.RequisitionService.get_amount(branch).subscribe(data => {
      this.reqAmount = data;
      // console.log( "getAmount" + this.reqAmount)
    },error => console.log(error));

  }
  myControl: FormControl = new FormControl();
  foods = [
    { value: 'steak-0', viewValue: 'Steak' },
    { value: 'pizza-1', viewValue: 'Pizza' },
    { value: 'tacos-2', viewValue: 'Tacos' }
  ];


  displayedColumns = ['ProductReq_Date', 'branch', 'Product_Code', 'Product_Name','req_Amount', 'check', 'amount', 'note', 'button'];
  displayedColumns2 = ['branch', 'amount', 'date'];
  dataSource = new requisitionDataSource(this.RequisitionService);
  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    filterValue = filterValue.toUpperCase();
    filterValue = filterValue.toString();
    this.dataSource1.filter = filterValue;
    console.log("filterrrrrrrrrrrrrrrr");
    console.log(filterValue);
  }
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
}

//////////////////////////////////////////////////////
export class requisitionDataSource extends DataSource<any> {
  products:any;
  constructor(private RequisitionService: RequisitionService) {
    super();
  }
  connect(): Observable<Reqproduct[]> {
    return this.RequisitionService.get_AllReq();
  }
  disconnect() { }
}
