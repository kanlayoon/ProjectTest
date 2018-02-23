import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  foods = [
    {value: 'steak-0', viewValue: 'รายงานการสั่งจ่าย'},
    {value: 'pizza-1', viewValue: 'รายงานคำขอเบิกสินค้า'},
    {value: 'tacos-2', viewValue: 'รายงานการใช้สินค้า'},
    {value: 'tacos-2', viewValue: 'ข้อมูลการจองคอร์ส'}
    
  ];
}
