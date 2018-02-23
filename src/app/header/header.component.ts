import { Component, OnInit } from '@angular/core';
import { HeaderService } from '../header/header.service';
import { Product } from '../product/product.model';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable, Subject } from 'rxjs/Rx';
import { DataSource } from '@angular/cdk/collections';
import { Router, ActivatedRoute } from '@angular/router';
import { interval } from 'rxjs/observable/interval';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {
  
  name : any;
  amount : any;
  interval:any;
  noti1 :any;
  noti2 :any;
  noti3 :any;
  date : Date;
  
  dateNoti1: Date;
  dateNoti2:Date;
  dateNoti3:Date;
 
  // temp_noti:any;
  push_noti = [];
  pop_noti = [];
  public products: any[];
  constructor( private route: ActivatedRoute,
    private router: Router,
    private HeaderService: HeaderService, private _http: Http,) {
     
  }

  ngOnInit() {
    this.date = new Date();
  this.date.setDate( this.date.getDate() + 3 );
  console.log("date" + this.date)
    this.notification();
    // this.interval = setInterval(()=>{
    //   this.notification();
    // },1000);


  }
      //notification
    notification(){
      // products.forEach( product => {
  //   if(iasdjfoai){
  //     this.xx.push(product);
  //   }
  // });

    
      this.HeaderService.getAll().subscribe(result => {
       
        console.log("header")
        console.log(result)
        this.products = result;
        for (let product of this.products){
          if(product.BranchProduct_Amount <= product.Notifications_Amount3){
            console.log("เตือนระดับ3");
            this.name = product.BranchProduct_Amount;
            this.amount = product.BranchProduct_Amount;
            this.noti3 = 1;
            this.push_noti.push(product);
          }
          else {
            if(product.BranchProduct_Amount <= product.Notifications_Amount2){
              console.log("เตือนระดับ2");
              this.noti2 = 1;
              this.push_noti.push(product);
            }
            else{
              if(product.BranchProduct_Amount <= product.Notifications_Amount1){
            
                console.log("เตือนระดับ1");
                this.noti1 = 1;
                this.push_noti.push(product);
                
              }
            } 
          }
          // this.pop_noti.pop(product);
          console.log("temp" + this.push_noti );

          //Notification_EXP
          this.date = new Date();
          console.log("product.BranchProduct_EXP"+ product.BranchProduct_EXP);
          console.log("product.Notification_EXP1"+ product.Notifications_Exp1);
          console.log("---" +  this.date.setDate( this.date.getDate() + 3 ) );
          this.dateNoti1.setDate(product.BranchProduct_EXP.getDate() - product.Notifications_Exp1);
          this.dateNoti2.setDate(product.BranchProduct_EXP.getDate() - product.Notifications_Exp2);
          this.dateNoti3.setDate(product.BranchProduct_EXP.getDate() - product.Notifications_Exp3);
          this.date = new Date();
          // this.date.setDate( this.date.getDate() + 3 );
          if(this.dateNoti1 =  this.date){
                console.log("noti_EXP_1");
          }
          if(this.dateNoti2 =  this.date){
            console.log("noti_EXP_1");
        }
       if(this.dateNoti3 =  this.date){
        console.log("noti_EXP_1");
  }
          




        }
      },
        error => console.log(error));
    
    }

}







