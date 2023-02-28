import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { PagesBlankComponent } from './pages/pages-blank/pages-blank.component';
import { PagesError404Component } from './pages/pages-error404/pages-error404.component';
import { PagesFaqComponent } from './pages/pages-faq/pages-faq.component';
import { PagesLoginComponent } from './pages/pages-login/pages-login.component';
import { PagesRegisterComponent } from './pages/pages-register/pages-register.component';
import { UsersProfileComponent } from './pages/users-profile/users-profile.component';
import { FarmComponent } from '../business-components/farm/farm.component';
import { EmployeeComponent } from '../business-components/employee/employee.component';
import { FarmInventoryComponent } from '../business-components/farm-inventory/farm-inventory.component';
import { InventoryComponent } from '../business-components/inventory/inventory.component';
import { PaymentsComponent } from '../business-components/payments/payments.component';
import { PlantInventoryComponent } from '../business-components/plant-inventory/plant-inventory.component';
import { SalaryLogComponent } from '../business-components/salary-log/salary-log.component';
import { StorageComponent } from '../business-components/storage/storage.component';
import { TransactionLogComponent } from '../business-components/transaction-log/transaction-log.component';
import { ReportWeeklyComponent } from '../business-components/report-weekly/report-weekly.component';
import { ReportMonthlyComponent } from '../business-components/report-monthly/report-monthly.component';
import { ScheduleAssignComponent } from '../business-components/schedule-assign/schedule-assign.component';
import { ScheduleDisplayComponent } from '../business-components/schedule-display/schedule-display.component';

const routes: Routes = [
  { path: '', redirectTo:"pages-login", pathMatch:'full' },
  { path: 'pages-login', component: PagesLoginComponent },
  { path: 'dashboard', component: DashboardComponent,},
  { path: 'pages-blank', component: PagesBlankComponent },
  { path: 'pages-error404', component: PagesError404Component },
  { path: 'pages-faq', component: PagesFaqComponent },
  { path: 'pages-register', component: PagesRegisterComponent },
  { path: 'user-profile', component: UsersProfileComponent },
  { path:'farm',component:FarmComponent},
  { path:'employee',component:EmployeeComponent},
  { path:'farm_inventory',component:FarmInventoryComponent},
  { path:'inventory',component:InventoryComponent},
  { path:'payment',component:PaymentsComponent},
  { path:'plant_inventory',component:PlantInventoryComponent},
  { path:'salary',component:SalaryLogComponent},
  { path:'storage',component:StorageComponent},
  { path:'transaction_log',component:TransactionLogComponent},
  { path:'report_weekly',component:ReportWeeklyComponent},
  { path:'report_monthly',component:ReportMonthlyComponent},
  { path:'schedule_assign',component:ScheduleAssignComponent},
  { path:'schedule_display',component:ScheduleDisplayComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
