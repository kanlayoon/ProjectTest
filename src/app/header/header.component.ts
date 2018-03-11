import { Component, OnInit } from '@angular/core';
import { HeaderService } from '../header/header.service';
import { Product } from '../product/product.model';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable, Subject } from 'rxjs/Rx';
import { DataSource } from '@angular/cdk/collections';
import { Router, ActivatedRoute } from '@angular/router';
import { interval } from 'rxjs/observable/interval';
import * as moment from 'moment';
import { count } from 'rxjs/operators';
import { Inject} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

// @Component({
//   selector: 'dialog-overview-example-dialog',
//   templateUrl: 'dialog-overview-example-dialog.html',
// })

export class HeaderComponent implements OnInit {

  Number_count :any;
  notifications:any;
  name : any;
  amount : any;
  interval:any;
  noti1 :any;
  noti2 :any;
  noti3 :any;
  date : string;
  
  dateNoti1: string;
  dateNoti2:string;
  dateNoti3:string;
  moment :Date;
  // temp_noti:any;
  push_noti = [];
  push_status = [];
  pop_noti = [];
  public products: any[];
  constructor(public dialog: MatDialog, private route: ActivatedRoute,
    private router: Router,
    private HeaderService: HeaderService, private _http: Http,
    ) {
     
  }

  ngOnInit() {
 
    this.notification();
    // this.interval = setInterval(()=>{
    //   this.notification();
    // },1000);

  }
  
  openDialog() {
    this.dialog.open(DialogDataExampleDialog, {
      height: '400px',
    width: '400px',
      data: {
        push_noti:this.push_noti,
        push_status : this.push_status
      }
    });
  }
      //notification
    notification(){

      this.HeaderService.getAll().subscribe(result => {
       
        

        console.log("header");
        console.log(result);
        this.products = result;
        for (let product of this.products){
          if(product.BranchProduct_Amount <= product.Notifications_Amount3){
            console.log("เตือนระดับ3");
            this.name = product.BranchProduct_Amount;
            this.amount = product.BranchProduct_Amount;
            this.noti3 = 1;
            this.push_noti.push(product);
            this.push_status.push(3);
          }
          else {
            if(product.BranchProduct_Amount <= product.Notifications_Amount2){
              console.log("เตือนระดับ2");
              this.noti2 = 1;
              this.push_noti.push(product);
              this.push_status.push(2);
            }
            else{
              if(product.BranchProduct_Amount <= product.Notifications_Amount1){
            
                console.log("เตือนระดับ1");
                this.noti1 = 1;
                this.push_noti.push(product);
                this.push_status.push(1);
              }
            } 
          }
          // this.pop_noti.pop(product);
         

          //Notification_EXP
          // var date = new Date();
          var date = moment().format('YYYY-MM-DD');
          var dateNoti1 = moment(product.BranchProduct_EXP).subtract( product.Notifications_Exp1,'days').format('YYYY-MM-DD');
          var dateNoti2 = moment(product.BranchProduct_EXP).subtract( product.Notifications_Exp2,'days').format('YYYY-MM-DD');;  
          var dateNoti3 = moment(product.BranchProduct_EXP).subtract( product.Notifications_Exp3,'days').format('YYYY-MM-DD');;    
          
          this.date=date;
          this.dateNoti1 = dateNoti1;
          this.dateNoti2 = dateNoti2;
          this.dateNoti3 = dateNoti3;
          console.log("date"+ this.date);
          console.log("datenoti"+ this.dateNoti1);
          if(this.dateNoti1 ===  this.date){
            console.log("ใกล้หมดอายุ ระดับ1");   
            this.push_noti.push(product);
            this.push_status.push(4);
          }
          if(this.dateNoti2 ===  this.date){
            console.log("ใกล้หมดอายุ ระดับ2");
            this.push_noti.push(product);
            this.push_status.push(5);
          }
          if(this.dateNoti3 ===  this.date){
            console.log("ใกล้หมดอายุ ระดับ3");
            this.push_noti.push(product);
            this.push_status.push(6);
          }
          
        }
        this.Number_count = this.push_noti.length;
         if(this.Number_count>0){
            this.notifications = 1;
         }
        
        console.log("count" + this.Number_count);
        console.log(this.push_noti);
        console.log(this.push_status);
        
      },
        error => console.log(error));

    
    }

}

@Component({
  selector: 'dialog-data-example-dialog',
  templateUrl: 'notification_modal.html',
})
export class DialogDataExampleDialog {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}
}







