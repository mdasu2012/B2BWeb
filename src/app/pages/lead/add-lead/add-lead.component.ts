import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormGroup, UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LeadService } from '../../../services/lead.service';
import { CommonModule } from "@angular/common";
import { BrowserModule } from '@angular/platform-browser';
@Component({
  selector: 'app-add-lead',
  templateUrl: './add-lead.component.html',
  styleUrls: ['./add-lead.component.scss']
})
export class AddLeadComponent implements OnInit {

  createLeadForm: UntypedFormGroup;
  constructor(private router: Router, private fb: UntypedFormBuilder, private leadService:LeadService) {
    this.createLeadForm = this.fb.group({
      firstName: ['', Validators.required],
      middleName: [''],
      lastName: ['', Validators.required],

      occupation: ['', Validators.required],

      mobile: ['', Validators.required],
      email: ['', [Validators.required,Validators.email]],

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
    console.log(  this.createLeadForm)
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

  get f(): { [key: string]: AbstractControl } {
    return this.createLeadForm.controls;
  }
  get g(): { [key: string]: AbstractControl } {
  let c= this.createLeadForm.controls.address as FormGroup
    return c.controls;
  }

}