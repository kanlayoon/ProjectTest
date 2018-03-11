import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { AppComponent }      from './app.component';
import { LoginComponent }      from './login/login.component';
import { HeaderComponent }      from './header/header.component';
import { DashboardHeadOfficeComponent }      from './dashboard-head-office/dashboard-head-office.component';
import { ProductComponent }      from './product/product.component';
import { AddProductComponent }      from './add-product/add-product.component';
import { UpdateProductComponent }      from './update-product/update-product.component';
import { SupplyComponent }      from './supply/supply.component';
import { RequisitionComponent }      from './requisition/requisition.component';
import { NotificationComponent }      from './notification/notification.component';
import { NotificationBranchComponent }      from './notification-branch/notification-branch.component';
import { ReportComponent }      from './report/report.component';
import { ReportBranchComponent }      from './report-branch/report-branch.component';
import { UsingproductComponent }      from './usingproduct/usingproduct.component';
import { DashboardBranchComponent }      from './dashboard-branch/dashboard-branch.component';
import { ProductBranchComponent }      from './product-branch/product-branch.component';
import { RequestComponent }      from './request/request.component';
import { ReservationComponent }      from './reservation/reservation.component';
import { UsingproductBranchComponent }      from './usingproduct-branch/usingproduct-branch.component';
import { CheckCourseComponent }      from './check-course/check-course.component';
import { HeaderBranchComponent }      from './header-branch/header-branch.component';
import { TypeProductComponent }      from './TypeProduct/TypeProduct.component';
//service
import { ModuleWithProviders } from '@angular/core';

const routes: Routes = [
  
    { path: 'app', component: AppComponent },
    { path: 'login', component: LoginComponent },
    { path: 'header', component: HeaderComponent },
    { path: 'dashboard-head-office', component: DashboardHeadOfficeComponent },
    { path: 'product', component: ProductComponent},
    { path: 'add-product', component: AddProductComponent},
    { path: 'update-product', component: UpdateProductComponent},
    { path: 'supply', component: SupplyComponent},
    { path: 'requisition', component: RequisitionComponent},
    { path: 'notification', component: NotificationComponent},
    { path: 'notification-branch', component: NotificationBranchComponent},
    { path: 'report', component: ReportComponent},
    { path: 'report-branch', component: ReportBranchComponent},
    { path: 'using-product', component: UsingproductComponent},
    { path: 'dashboard-branch', component: DashboardBranchComponent},
    { path: 'product-branch', component: ProductBranchComponent},
    { path: 'request', component: RequestComponent},
    { path: 'reservation', component: ReservationComponent},
    { path: 'using-product-branch', component: UsingproductBranchComponent},
    { path: 'check-course', component: CheckCourseComponent},
    { path: 'header-branch', component: HeaderBranchComponent},
    { path: 'update-product/:id', component: UpdateProductComponent } ,
    { path: 'type-product', component: TypeProductComponent},
     
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
export const routings: ModuleWithProviders = RouterModule.forRoot(routes);