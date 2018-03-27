import { Component, OnInit } from '@angular/core';
import { ViewChild} from '@angular/core';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import { ProductService } from '../product/product.service';
import { Product } from '../product/product.model';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable, Subject } from 'rxjs/Rx';
import { DataSource } from '@angular/cdk/collections';
import { Router, ActivatedRoute } from '@angular/router';
import { notificationService } from '../notification/notification.service';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit {
  dataSource1: MatTableDataSource<any>;
  Code:any;
  Bid:any;
  Amount1:any;
  Amount2:any;
  Amount3:any;

  
  

  constructor(private route: ActivatedRoute,
    private router: Router,
    private notificationService: notificationService, private _http: Http) { 
  }
  
  displayedColumns = ['id', 'name', 'noti1', 'noti2','noti3','button'];
  displayedColumns2 = ['id', 'name', 'notiExp1', 'notiExp2','notiExp3','button'];
  // dataSource: MatTableDataSource<UserData>;
  dataSource = new ProductDataSource(this.notificationService);
 
  public products: any[];
  
  ngOnInit() {
    

    this.notificationService.getAll().subscribe(data => {
      this.products = data;
      this.dataSource1 = new MatTableDataSource(this.products);
     
      // console.log(data);
    },
      error => console.log(error));
  }
  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    filterValue = filterValue.toUpperCase();
    filterValue = filterValue.toString();
    this.dataSource1.filter = filterValue;
    console.log("filterrrrrrrrrrrrrrrr");
    console.log(filterValue);
  }
  
  setting_amount(code,noti1,noti2,noti3){
    console.log("1 " + noti1);
    console.log("2 " + noti2);
    console.log("3 " + noti3);
    this.Code=code;
    this.Amount1=noti1;
    this.Amount2=noti2;
    this.Amount3=noti3;
    console.log("test"+ this.Amount2+ this.Amount3 + this.Amount1 + this.Code);
    if(noti1!=undefined ){
      let obj1 = {
        bid :1,
        code:this.Code,
        amount1:this.Amount1
      }
      this.notificationService.noti_amount1(obj1) .subscribe( 
        error => console.log(error),
       () => console.log("update complete"));
      
    }
    else {
      console.log("noti1มีค่ามากกกกกกกกกกกกกกกกกกก");
      let check = 1;
    }
  
    if(noti2!=undefined){
      let obj2 = {
        bid :1,
        code:this.Code,
        amount2:this.Amount2
      }
      this.notificationService. noti_amount2(obj2) .subscribe( 
        error => console.log(error),
       () => console.log("update complete"));
    }
    if(noti3!=undefined){
      let obj3 = {
        bid :1,
        code:this.Code,
        amount3:this.Amount3
      }
      this.notificationService. noti_amount3(obj3) .subscribe( 
        error => console.log(error),
       () => console.log("update complete"));
    }
   
  }
  setting_exp(code,exp1,exp2,exp3){
    console.log("1 " + exp1);
    console.log("2 " + exp2);
    console.log("3 " + exp3);
    this.Code=code;

    if(exp1!=null){
      let obj1 = {
        bid :1,
        code:this.Code,
        exp1:exp1,
      }
      this.notificationService. noti_exp1(obj1) .subscribe( 
        error => console.log(error),
       () => console.log("update complete"));
     
    }
    if(exp2!=null){
      let obj2 = {
        bid :1,
        code:this.Code,
        exp2:exp2,
      }
      this.notificationService. noti_exp2(obj2) .subscribe( 
        error => console.log(error),
       () => console.log("update complete"));
    }
    if(exp3!=null){
      let obj3 = {
        bid :1,
        code:this.Code,
        exp3:exp3,
      }
      this.notificationService. noti_exp3(obj3) .subscribe( 
        error => console.log(error),
       () => console.log("update complete"));
    }
   
  }
}




  export class ProductDataSource extends DataSource<any> {
    constructor(private notificationService: notificationService) {
      super();
    }
    connect(): Observable<Product[]> {
      return this.notificationService.getAll();
    }
    disconnect() { }
  }
  

