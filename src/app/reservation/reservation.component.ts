import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatFormFieldModule, MatError, MatFormField, MatPlaceholder, MatFormFieldControl } from '@angular/material/form-field';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { ReservationService } from '../reservation/reservation.service';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable, Subject } from 'rxjs/Rx';
import { DataSource } from '@angular/cdk/collections';
import { Router, ActivatedRoute } from '@angular/router';
import { reservation } from './reservation.model';
export class State {
  constructor(public name: string, public population: string, public flag: string) { }
}

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent implements OnInit {
  reservation : any[];
  constructor( private route: ActivatedRoute,
    private router: Router,
    private ReservationService: ReservationService, private _http: Http) {

  }
  ngOnInit() {
    this.ReservationService.get_reservation().subscribe(data => {
      this.reservation = data;
      console.log(data)
      
    },
      error => console.log(error));
  }

  displayedColumns = ['courseName', 'date'];
  // dataSource: MatTableDataSource<UserData>;
  dataSource = new ProductDataSource(this.ReservationService);



  
 

}
export class ProductDataSource extends DataSource<any> {
  constructor(private ReservationService: ReservationService) {
    super();
  }
  connect(): Observable<reservation[]> {
    return this.ReservationService.get_reservation();
  }
  disconnect() { }
}







