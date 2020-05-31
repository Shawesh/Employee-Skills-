import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FormsModule }   from '@angular/forms';
import { HttpClientModule }    from '@angular/common/http';

import { AppRoutingModule }     from './app-routing/app-routing.module';

import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
// ng
import {ButtonModule} from 'primeng/button';
import {DataViewModule} from 'primeng/dataview';
import {InputTextModule} from 'primeng/inputtext';
import {DropdownModule} from 'primeng/dropdown';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import {DialogModule} from 'primeng/dialog';
import {VirtualScrollerModule} from 'primeng/virtualscroller';
import {TableModule} from 'primeng/table';
import {MenubarModule} from 'primeng/menubar';
import {CalendarModule} from 'primeng/calendar';
import {RatingModule} from 'primeng/rating';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    EmployeeDetailsComponent,
    AddEmployeeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    ButtonModule,
    DataViewModule,
    InputTextModule,
    DropdownModule,
    ConfirmDialogModule,
    DialogModule,
    BrowserAnimationsModule,
    VirtualScrollerModule,
    TableModule,
    MenubarModule,
    CalendarModule,
    RatingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
