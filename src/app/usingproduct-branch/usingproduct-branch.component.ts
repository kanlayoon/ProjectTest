import { Component, OnInit } from '@angular/core';
import { ViewChild} from '@angular/core';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import { UsingProductBService } from '../usingproduct-branch/usingproductB.service';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable, Subject } from 'rxjs/Rx';
import { DataSource } from '@angular/cdk/collections';
import { Router, ActivatedRoute } from '@angular/router';
// import { course } from './usingproduct-branch.model';
import { Product } from '../product/product.model';
import { CourseProduct } from './courseproduct.model';
@Component({
  selector: 'app-usingproduct-branch',
  templateUrl: './usingproduct-branch.component.html',
  styleUrls: ['./usingproduct-branch.component.css']
})
export class UsingproductBranchComponent implements OnInit {
  dataSource1: MatTableDataSource<any>;
  Code:any;
  Amount:any;
  Date :any;
  use :any[];
  CourseSel:any;
 public course: any;
 public courseSelected: any;
 public product:any[];
 public CourseProduct :any[];
 showTable : any;
 public id_c:any;
 dataSource:any;
 useKey :any;
 courseproduct :any;
 key :any;
 

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private UsingProductBService: UsingProductBService, private _http: Http) { }


  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
 
  ngOnInit() {
       //get key
       this.UsingProductBService.getKey().subscribe(data => {
        this.useKey = data; 
        this.key = this.useKey[0].useKey
      }, error => console.log(error), () => console.log("get key complete"));

    this.UsingProductBService.get_course().subscribe(data => {
      this.course = data;
      console.log(data);
   
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
  displayedColumns = ['Product_Code', 'Product_Name', 'amount'];
  showProduct(id){
    // console.log("ggggggggggggggggggggggggg");
    this.id_c=this.courseSelected.Course_Id;
    // console.log("courseSelected"+this.courseSelected.Course_Id);
    // console.log("id"+this.courseSelected.Course_Id);
    this.UsingProductBService.getCourseProduct(id).subscribe(data => {
      this.CourseProduct = data;
      // console.log(data);
      // console.log("id_c :"+this.id_c);
      this.showTable =1; 
      
  this.dataSource = new ProductDataSource(this.UsingProductBService,this.id_c);
  this.dataSource1 = new MatTableDataSource(this.CourseProduct);
    },
      error => console.log(error));    
  }
  
  useProduct(){
    let test: any;
    let i = 0;
    var inputAmount;
    var GetCode;
    var GetName;
    for( i = 0; i < this.dataSource1.data.length; i++ ){
      inputAmount = (<HTMLInputElement>document.getElementById('inputAmount' + i)).value;
      GetCode = this.dataSource1.data[i].Product_Code;
      console.log(inputAmount + ' //i: ' + this.dataSource1.data.length);
      console.log( this.dataSource1.data[i].Product_Code);
    
    // console.log("key" + this.useKey[0].useKey);
      let obj = {
        key : this.key+1,
        code: GetCode,
        amount: inputAmount,
        course: this.courseSelected.Course_Id,
        date :this.Date = new Date(),
        bid: 3
      }
        console.log("key" + this.key);
        console.log("code" + GetCode );
        console.log("amount" + inputAmount);
        console.log("course" + this.courseSelected.Course_Id);
        console.log("date" + this.Date);
        this.UsingProductBService.useProduct(obj).subscribe(data => {
          this.use = data;  
        }, error => console.log(error), () => console.log("insert complete"));
    }
   }
}
export class ProductDataSource extends DataSource<any> {
  courseSelected:any;
  public id_c :any;
  // public CourseProduct :any[];
  constructor(private UsingProductBService: UsingProductBService,private id) {
    super();
    // console.log("iddddddddddddd"+ id);
  }
 
  // showProduct(id){
  //   console.log("ggggggggggggggggggggggggg");
  //   this.id_c=id;
  //   // console.log(this.courseSelected.Course_Id);
  //   this.UsingProductBService.getCourseProduct(id).subscribe(data => {
  //     this.courseproduct = data;
  //     console.log(data);
     
  //   },
  //     error => console.log(error));    
  // }
  connect(): Observable<CourseProduct[]> {
    // console.log(this.id);
    return this.UsingProductBService.getCourseProduct(this.id);
  }
  disconnect() { }
}


