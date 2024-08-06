import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Lead } from 'src/app/models/lead.model';
import { LeadService } from 'src/app/services/lead.service';

@Component({
  selector: 'app-lead-list',
  templateUrl: './lead-list.component.html',
  styleUrls: ['./lead-list.component.scss']
})
export class LeadListComponent implements OnInit {
  leadsList: Array<Lead> = [];
  constructor(private router: Router, private leadService: LeadService) { }

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
}
