import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Lead } from '../../../models/lead.model';
import { Property }  from '../../../models/property.model'
import { LeadService } from '../../../services/lead.service';
import { PropertyService } from '../../../services/property.service';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.scss']
})
export class PropertyListComponent implements OnInit {  
  properties: Array<Property> = [{propertyName:'adas',companyName:'sdsdf',status:'sdf',address:{
    state:'AP'},mobile:'9283476926348',extensionDate:new Date(),
    startDate:new Date()
  },
  {propertyName:'adas',companyName:'sdsdf',status:'sdf',address:{
    state:'AP'},mobile:'9283476926348',extensionDate:new Date(),
    startDate:new Date()
  },
  {propertyName:'adas',companyName:'sdsdf',status:'sdf',address:{
    state:'AP'},mobile:'9283476926348',extensionDate:new Date(),
   startDate:new Date()
  }];
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
  edit(data){  
    this.router.navigateByUrl("/admin/edit_property");
  }
}
