import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layouts/header/header.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { SidebarComponent } from './layouts/sidebar/sidebar.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { UsersProfileComponent } from './pages/users-profile/users-profile.component';
import { PagesFaqComponent } from './pages/pages-faq/pages-faq.component';
import { PagesRegisterComponent } from './pages/pages-register/pages-register.component';
import { PagesLoginComponent } from './pages/pages-login/pages-login.component';
import { PagesError404Component } from './pages/pages-error404/pages-error404.component';
import { PagesBlankComponent } from './pages/pages-blank/pages-blank.component';
import { EmployeeComponent } from '../business-components/employee/employee.component';
import { FarmComponent } from '../business-components/farm/farm.component';
import { InventoryComponent } from '../business-components/inventory/inventory.component';
import { PlantInventoryComponent } from '../business-components/plant-inventory/plant-inventory.component';
import { FarmInventoryComponent } from '../business-components/farm-inventory/farm-inventory.component';
import { StorageComponent } from '../business-components/storage/storage.component';
import { TransactionLogComponent } from '../business-components/transaction-log/transaction-log.component';
import { PaymentsComponent } from '../business-components/payments/payments.component';
import { SalaryLogComponent } from '../business-components/salary-log/salary-log.component';
import { ReportWeeklyComponent } from '../business-components/report-weekly/report-weekly.component';
import { ReportMonthlyComponent } from '../business-components/report-monthly/report-monthly.component';
import { ScheduleDisplayComponent } from '../business-components/schedule-display/schedule-display.component';
import { ScheduleAssignComponent } from '../business-components/schedule-assign/schedule-assign.component';
import { PlantManagementComponent } from '../business-components/plant-management/plant-management.component';
import { FarmManagementComponent } from '../business-components/farm-management/farm-management.component';
import { EmployeeManagementComponent } from '../business-components/employee-management/employee-management.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    DashboardComponent,
    UsersProfileComponent,
    PagesFaqComponent,
    PagesRegisterComponent,
    PagesLoginComponent,
    PagesError404Component,
    PagesBlankComponent,
    EmployeeComponent,
    FarmComponent,
    InventoryComponent,
    PlantInventoryComponent,
    FarmInventoryComponent,
    StorageComponent,
    TransactionLogComponent,
    PaymentsComponent,
    SalaryLogComponent,
    ReportWeeklyComponent,
    ReportMonthlyComponent,
    ScheduleDisplayComponent,
    ScheduleAssignComponent,
    PlantManagementComponent,
    FarmManagementComponent,
    EmployeeManagementComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
