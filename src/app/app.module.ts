import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgSemanticModule } from 'ng-semantic';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule,} from '@angular/forms';
import {MomentModule} from 'angular2-moment/moment.module';
import { HttpModule } from '@angular/http';
// import {HttpClientModule} from '@angular/common/http';
import { APP_BASE_HREF } from '@angular/common';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { Inject} from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material';
import {MatButtonModule, MatCheckboxModule ,MatToolbarModule,MatTab, MatTabsModule, MatIconModule,
       MatMenuModule,MatCardModule,MatGridListModule
      ,MatOptionModule,MatSelectModule,MatAutocompleteModule,MatInputModule,MatTableModule,
      MatPaginatorModule,MatDatepickerModule,MatNativeDateModule,MatSort,MatSortModule,MatRadioModule,MatChipsModule
      ,MatDialogModule,
    } from '@angular/material';

// import { MatFormFieldModule,MatFormField} from '@angular/material/form-field';

import { AppComponent } from './app.component';
import { AppRoutingModule }     from './app-routing.module';
import { LoginComponent }     from './login/login.component';
import { HeaderComponent,DialogDataExampleDialog } from './header/header.component';

import { DashboardHeadOfficeComponent } from './dashboard-head-office/dashboard-head-office.component';
import { ProductComponent,updateProductDialog ,confirm_updateDialog,addProductDialog,confirmAddPDialog,warnAddPDialog} from './product/product.component';
import { AddProductComponent } from './add-product/add-product.component';
import { SupplyComponent,check_branch_supplyDialog ,check_amount_supplyDialog,modal_confirm_supplyDialog} from './supply/supply.component';
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
import { TypeProductComponent,ModalTypeProductDialog ,ModalTypeProductDelDialog} from './TypeProduct/TypeProduct.component';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import {enableProdMode} from '@angular/core';
import { AlertComponent } from './login/_directives/Alert.component';
import { AuthGuard } from './login/_guards/index';
import { JwtInterceptor } from './login/_helpers/jwt.interceptor';
import { fakeBackendProvider } from './login/_helpers/fake-backend';
import { NumberOnlyDirective } from './number.directive';
import { ChartsModule } from 'ng2-charts';

enableProdMode();

// Service
import { ApiService } from './login/shared/api/api.service';
import { ProxyConfigService } from './login/shared/helpers/proxy.config.service';
import { ProductService } from './product/product.service';
import { SharedAuthService } from './login/shared/helpers/shared-auth.service';
import { TestComponent } from './test/test.component'
import { TestApiService } from './services/testapi_services';
import { ApiAuthService } from './login/shared/api/api-auth.service';
import { AuthService } from './login/shared/api/auth.service'
import { UserService} from './login/_services/index';
import { ApiUrl } from './services/apiUrl.service';
import { SupplyService } from './supply/supply.service'; 
import {UpdateService} from './update-product/update-product.service'
import { NgModel } from '@angular/forms/src/directives/ng_model';
import {AddProductTypeService} from './add-product/add-productType.service'
import { RequisitionService } from './requisition/Requisition.service';
import { RequestService } from './request/request.service';
import { UsingProductBService } from './usingproduct-branch/usingproductB.service';
import { notificationService } from './notification/notification.service';
import { ReservationService } from './reservation/reservation.service';
import { HeaderService } from './header/header.service';
import { AuthenticationService } from './login/_services/index';
import { AlertService  } from './login/_services/index';
import { typeProductService  } from './TypeProduct/typeProduct.service';
import { AppConfig } from './app.config';

@NgModule({
  declarations: [ AppComponent, 
                  LoginComponent, HeaderComponent, DashboardHeadOfficeComponent, ProductComponent, AddProductComponent, SupplyComponent, UpdateProductComponent, RequisitionComponent, NotificationComponent, ReportComponent, UsingproductComponent, DashboardBranchComponent, ProductBranchComponent, RequestComponent, UsingproductBranchComponent, ReservationComponent, CheckCourseComponent, HeaderBranchComponent, NotificationBranchComponent, ReportBranchComponent, TestComponent,
                  DialogDataExampleDialog,AlertComponent,TypeProductComponent,ModalTypeProductDialog,ModalTypeProductDelDialog,updateProductDialog
                  ,NumberOnlyDirective,check_branch_supplyDialog,check_amount_supplyDialog,modal_confirm_supplyDialog,confirm_updateDialog,addProductDialog,
                  confirmAddPDialog,warnAddPDialog,AlertComponent
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
            MatChipsModule,
            MomentModule,
            MatDialogModule,
            HttpClientModule,
            ChartsModule,
            
        
  ],
  
  bootstrap: [AppComponent,],
  providers: [ ProxyConfigService,
                ApiService,
                ProductService,
                SharedAuthService,
                TestApiService,
                ApiAuthService,
                // UserService,
                ProductService,
                ApiUrl,
                SupplyService,
               UpdateService,
               AddProductTypeService,
               RequisitionService,
               RequestService,
               UsingProductBService,
               notificationService,
               ReservationService,
               HeaderService,
               AuthGuard,
               AlertService,
               AuthenticationService,
               UserService,
               typeProductService,
               AppConfig,
               AuthService,
               
        {
            provide: HTTP_INTERCEPTORS,
            useClass: JwtInterceptor,
            multi: true
        },
       

        // provider used to create fake backend
        fakeBackendProvider,
  ],
entryComponents:[DialogDataExampleDialog,ModalTypeProductDialog,ModalTypeProductDelDialog,updateProductDialog,check_branch_supplyDialog
,check_amount_supplyDialog,modal_confirm_supplyDialog,confirm_updateDialog,addProductDialog,confirmAddPDialog,warnAddPDialog]



})
export class AppModule { }






