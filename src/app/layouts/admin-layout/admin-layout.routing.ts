import { Routes } from "@angular/router";

import { DashboardComponent } from "../../pages/dashboard/dashboard.component";
import { IconsComponent } from "../../pages/icons/icons.component";
import { MapComponent } from "../../pages/map/map.component";
import { NotificationsComponent } from "../../pages/notifications/notifications.component";
import { UserComponent } from "../../pages/user/user.component";
import { TablesComponent } from "../../pages/tables/tables.component";
import { TypographyComponent } from "../../pages/typography/typography.component";
import { LeadListComponent } from "src/app/pages/lead/lead-list/lead-list.component";
import { AddLeadComponent } from "src/app/pages/lead/add-lead/add-lead.component";
import { EditLeadComponent } from "src/app/pages/lead/edit-lead/edit-lead.component";
import { PropertyListComponent } from "src/app/pages/property/property-list/property-list.component";
import { EditPropertyComponent } from "src/app/pages/property/edit-property/edit-property.component";
import { AddPropertyComponent } from "src/app/pages/property/add-property/add-property.component";
import { OtpComponent } from "src/app/pages/otp/otp.component";
// import { RtlComponent } from "../../pages/rtl/rtl.component";

export const AdminLayoutRoutes: Routes = [
  { path: "otp", component: OtpComponent },
  { path: "dashboard", component: DashboardComponent },
  { path: "leads", component: LeadListComponent },
  { path: "add_lead", component: AddLeadComponent },
  { path: "edit_lead/:id/:type", component: EditLeadComponent },

  { path: "properties", component: PropertyListComponent },
  { path: "add_property", component: AddPropertyComponent },
  { path: "edit_property", component: EditPropertyComponent },

  { path: "icons", component: IconsComponent },
  { path: "maps", component: MapComponent },
  { path: "notifications", component: NotificationsComponent },
  { path: "user", component: UserComponent },
  { path: "tables", component: TablesComponent },
  { path: "typography", component: TypographyComponent },
  // { path: "rtl", component: RtlComponent }
];
