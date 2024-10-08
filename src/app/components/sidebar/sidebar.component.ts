import { Component, OnInit } from "@angular/core";

declare interface RouteInfo {
  path: string;
  title: string;
  icon: string;
  class: string;
}
export const ROUTES: RouteInfo[] = [
  {
    path: "/admin/dashboard",
    title: "Dashboard",
    icon: "icon-chart-pie-36",
    class: ""
  },
  {
    path: "/admin/leads",
    title: "Leads",
   
    icon: "icon-atom",
    class: ""
  },
  {
    path: "/admin/properties",
    title: "Properties",
    icon: "icon-puzzle-10",
    class: ""
  },
  {
    path: "/admin/icons",
    title: "Icons",
    icon: "icon-atom",
    class: ""
  },
  {
    path: "/admin/maps",
    title: "Maps",
    icon: "icon-pin",
    class: "" },
  {
    path: "/admin/notifications",
    title: "Notifications",
    icon: "icon-bell-55",
    class: ""
  },

  {
    path: "/admin/user",
    title: "User Profile",
    icon: "icon-single-02",
    class: ""
  },
  {
    path: "/admin/tables",
    title: "Table List",
    icon: "icon-puzzle-10",
    class: ""
  },
  {
    path: "/admin/typography",
    title: "Typography",
    icon: "icon-align-center",
    class: ""
  },
  {
    path: "/admin/rtl",
    title: "RTL Support",
    icon: "icon-world",
    class: ""
  }
];

@Component({
  selector: "app-sidebar",
  templateUrl: "./sidebar.component.html",
  styleUrls: ["./sidebar.component.css"]
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor() {}

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
    if (window.innerWidth > 991) {
      return false;
    }
    return true;
  }
}
