import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgSemanticModule } from 'ng-semantic';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule,} from '@angular/forms';
import { HttpModule } from '@angular/http';
// import {HttpClientModule} from '@angular/common/http';
import { APP_BASE_HREF } from '@angular/common';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import {MatButtonModule, MatCheckboxModule ,MatToolbarModule,MatTab, MatTabsModule, MatIconModule,
       MatMenuModule,MatCardModule,MatGridListModule
      ,MatOptionModule,MatSelectModule,MatAutocompleteModule,MatInputModule,MatTableModule,
      MatPaginatorModule,MatDatepickerModule,MatNativeDateModule,MatSort,MatSortModule,MatRadioModule,
    
    } from '@angular/material';

// import { MatFormFieldModule,MatFormField} from '@angular/material/form-field';

import { AppComponent } from './app.component';
import { AppRoutingModule }     from './app-routing.module';
import { LoginComponent }     from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { DashboardHeadOfficeComponent } from './dashboard-head-office/dashboard-head-office.component';
import { ProductComponent } from './product/product.component';
import { AddProductComponent } from './add-product/add-product.component';
import { SupplyComponent } from './supply/supply.component';
import { UpdateProductComponent } from './update-product/update-product.component';
import { RequisitionComponent } from './requisition/requisition.component';
import { NotificationComponent } from './notification/notification.component';
import { ReportComponent } from './report/report.component';
import { UsingproductComponent } from './usingproduct/usingproduct.component';
import { DashboardBranchComponent } from './dashboard-branch/dashboard-branch.component';
import { ProductBranchComponent } from './product-branch/product-branch.component';
import { RequestComponent } from './request/request.component';
import { UsingproductBranchComponent } from './usingproduct-branch/usingproduct-branch.component';
import { ReservationComponent } from './reservation/reservation.component';
import { CheckCourseComponent } from './check-course/check-course.component';
import { HeaderBranchComponent } from './header-branch/header-branch.component';
import { NotificationBranchComponent } from './notification-branch/notification-branch.component';
import { ReportBranchComponent } from './report-branch/report-branch.component';

import {enableProdMode} from '@angular/core';
enableProdMode();

// Service
import { ApiService } from './services/api.service';
import { ProxyConfigService } from './services/proxy.config.service';
import { ProductService } from './product/product.service';
import { SharedAuthService } from './services/shared-auth.service';
import { TestComponent } from './test/test.component'
import { TestApiService } from './services/testapi_services';
import { ApiAuthService } from './services/api-auth.service'
import { UserService} from './Services/user.service'
import { ApiUrl } from './services/apiUrl.service';
import { SupplyService } from './supply/supply.service';
import {UpdateService} from './update-product/update-product.service'
import { NgModel } from '@angular/forms/src/directives/ng_model';
import {AddProductTypeService} from './add-product/add-productType.service'



@NgModule({
  declarations: [ AppComponent, 
                  LoginComponent, HeaderComponent, DashboardHeadOfficeComponent, ProductComponent, AddProductComponent, SupplyComponent, UpdateProductComponent, RequisitionComponent, NotificationComponent, ReportComponent, UsingproductComponent, DashboardBranchComponent, ProductBranchComponent, RequestComponent, UsingproductBranchComponent, ReservationComponent, CheckCourseComponent, HeaderBranchComponent, NotificationBranchComponent, ReportBranchComponent, TestComponent
                  
                ],
  imports: [  BrowserModule, 
              NgSemanticModule,
              BrowserAnimationsModule,
              MatButtonModule, 
              MatCheckboxModule,
             AppRoutingModule,
             MatToolbarModule,
             MatTabsModule,
             MatIconModule,
             MatMenuModule,
             MatCardModule,
             MatGridListModule,
            //  MatFormFieldModule,
             MatOptionModule,
             MatSelectModule,
             MatAutocompleteModule,
             FormsModule,
             ReactiveFormsModule,
             MatInputModule,
             MatTableModule,
             MatPaginatorModule,
             MatDatepickerModule,
            MatNativeDateModule,
            MatSortModule,
            HttpModule,
            MatRadioModule,
            
           
  ],
  
  bootstrap: [AppComponent,],
  providers: [ ProxyConfigService,
                ApiService,
                ProductService,
                SharedAuthService,
                TestApiService,
                ApiAuthService,
                UserService,
                ProductService,
                ApiUrl,
                SupplyService,
               UpdateService,
               AddProductTypeService,
   
  ],


})
export class AppModule { }






