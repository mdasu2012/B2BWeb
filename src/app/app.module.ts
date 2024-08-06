import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { RouterModule } from "@angular/router";
import { ToastrModule } from 'ngx-toastr';

import { AppComponent } from "./app.component";
import { AdminLayoutComponent } from "./layouts/admin-layout/admin-layout.component";
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';

import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

import { AppRoutingModule } from "./app-routing.module";
import { ComponentsModule } from "./components/components.module";
import { LoginComponent } from './pages/login/login.component';
import { LeadListComponent } from './pages/lead/lead-list/lead-list.component';
import { AddLeadComponent } from './pages/lead/add-lead/add-lead.component';
import { EditLeadComponent } from './pages/lead/edit-lead/edit-lead.component';
import { PropertyListComponent } from './pages/property/property-list/property-list.component';
import { AddPropertyComponent } from './pages/property/add-property/add-property.component';
import { EditPropertyComponent } from './pages/property/edit-property/edit-property.component';
import { BsDatepickerModule } from "ngx-bootstrap/datepicker";

@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ComponentsModule,
    NgbModule,
    RouterModule,
    AppRoutingModule,
    ToastrModule.forRoot(),
    BsDatepickerModule.forRoot(),
  ],
  declarations: [AppComponent, AdminLayoutComponent, AuthLayoutComponent, LoginComponent, LeadListComponent, AddLeadComponent, EditLeadComponent, PropertyListComponent, AddPropertyComponent, EditPropertyComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
