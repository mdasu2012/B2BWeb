import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Lead } from 'src/app/models/lead.model';
import { Property } from 'src/app/models/property.model';
import { LeadService } from 'src/app/services/lead.service';
import { PropertyService } from 'src/app/services/property.service';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.scss']
})
export class PropertyListComponent implements OnInit {

  properties: Array<Property> = [];
  constructor(private router: Router, private propertyService: PropertyService) { }

  ngOnInit(): void {
    this.getAllProperties();
  }

  gotoNewLPropertyCreation() {
    this.router.navigateByUrl("/admin/add_property");
  }

  getAllProperties() {
    this.propertyService.getAllProperties().subscribe((data: any) => {
      this.properties = data;
      console.dir(data);
      console.dir(this.properties)
    }, (error: any) => {

    })
  }
}
