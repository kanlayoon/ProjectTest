import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {
X :any;
  constructor() { }

  ngOnInit() {
    console.log("X" + this.X);
  }
  reports = [
    {value: '1', viewValue: 'รายงานการสั่งจ่าย'},
    {value: '2', viewValue: 'รายงานคำขอเบิกสินค้า'},
    {value: '3', viewValue: 'รายงานการใช้สินค้า'},
    {value: '4', viewValue: 'ข้อมูลการจองคอร์ส'}
    
  ];

  // Pie
  public pieChartLabels:string[] = ['Download Sales', 'In-Store Sales', 'Mail Sales'];
  public pieChartData:number[] = [300, 300, 100];
  public pieChartType:string = 'pie';
 
  // events
  public chartClicked(e:any):void {
    console.log(e);
  }
 
  public chartHovered(e:any):void {
    console.log(e);
  }
}

