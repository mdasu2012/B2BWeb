import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Lead } from '../../../models/lead.model';
import { LeadService } from '../../../services/lead.service';

@Component({
  selector: 'app-lead-list',
  templateUrl: './lead-list.component.html',
  styleUrls: ['./lead-list.component.scss']
})
export class LeadListComponent implements OnInit {
  leadsList: Array<Lead> = [];  
  constructor(private router: Router, private leadService: LeadService) { }
  leadsList1 = [
    {id:1,firstName:'adas',lastName:'sdsdf',industry:'sdf',address:{
      state:'AP'},mobile:'9283476926348',email:'sdf@getMaxListeners.com',
      leadStatus:'Y',createdDate:new Date(),owner:'Satish'
    },
    {id:3,firstName:'adas',lastName:'sdsdf',industry:'sdf',address:{
      state:'AP'},mobile:'9283476926348',email:'sdf@getMaxListeners.com',
      leadStatus:'Y',createdDate:new Date(),owner:'Satish'
    },
    {id:2,firstName:'adas',lastName:'sdsdf',industry:'sdf',address:{
      state:'AP'},mobile:'9283476926348',email:'sdf@getMaxListeners.com',
      leadStatus:'Y',createdDate:new Date(),owner:'Satish'
    },
  ]
  ngOnInit(): void {
    this.getAllLeads();
  }

  gotoNewLoadCreation() {
    this.router.navigateByUrl("/admin/add_lead");
  }

  getAllLeads() {
    this.leadService.getAllLeads().subscribe((data: any) => {
      this.leadsList = data;
      console.dir(data);
      console.dir(this.leadsList)
    }, (error: any) => {

    })
  }
  edit(data){  
    console.log(data)
    this.router.navigate(["/admin/edit_lead/",data.id,'edit']);
  }
  view(data){  
    console.log(data)
    this.router.navigate(["/admin/edit_lead/",data.id,'view']);
  }
}
