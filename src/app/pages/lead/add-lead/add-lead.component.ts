import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LeadService } from 'src/app/services/lead.service';

@Component({
  selector: 'app-add-lead',
  templateUrl: './add-lead.component.html',
  styleUrls: ['./add-lead.component.scss']
})
export class AddLeadComponent implements OnInit {

  createLeadForm: FormGroup;
  constructor(private router: Router, private fb: FormBuilder, private leadService:LeadService) {
    this.createLeadForm = this.fb.group({
      firstName: ['', Validators.required],
      middleName: [''],
      lastName: ['', Validators.required],

      occupation: ['', Validators.required],

      mobile: ['', Validators.required],
      email: ['', Validators.required],

      annualIncome: ['', Validators.required],
      industry: ['', Validators.required],

      leadSource: ['', Validators.required],
      leadStatus: ['', Validators.required],
      owner: [''],

      address: this.fb.group({
        houseNo: ['', Validators.required],
        village: ['', Validators.required],
        district: ['', Validators.required],
        state: ['', Validators.required],
        pincode: ['', Validators.required],
      })

    })
  }

  ngOnInit(): void {
  }

  createLead(){
    this.leadService.createLead(this.createLeadForm.value).subscribe((data: any) =>{

      this.router.navigateByUrl("/admin/leads");
    }, (error: any) =>{

    })
  }

  gotoBack(){
    this.router.navigateByUrl("/admin/leads");
  }
}