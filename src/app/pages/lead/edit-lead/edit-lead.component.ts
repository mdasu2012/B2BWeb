import { Component, Input, input, OnInit } from '@angular/core';
import { AbstractControl, FormGroup, UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { LeadService } from '../../../services/lead.service';
@Component({
  selector: 'app-edit-lead',
  templateUrl: './edit-lead.component.html',
  styleUrls: ['./edit-lead.component.scss']
})
export class EditLeadComponent implements OnInit { 
  editLeadForm: UntypedFormGroup;
  selectedId:any;
  leadsList:any;
  // leadsList:any = 
  //   {firstName:'adas',lastName:'sdsdf',industry:'sdf',address:{
  //     state:'AP'},mobile:'92834769',email:'sdf@getMaxListeners.com',
  //     leadStatus:'COLD',createdDate:new Date(),owner:'Satish',
  //     leadSource:"COMPANY_LEAD"
  //   }
  
  constructor(private router: Router,private activateRouter:ActivatedRoute, private fb: UntypedFormBuilder, private leadService:LeadService) { 
   this.selectedId = this.activateRouter.snapshot.paramMap.get('id')
    console.log(this.selectedId)
  }

  ngOnInit(): void {
    console.log(this.leadsList)
    console.log(this.leadsList?.firstName)
    this.editLeadForm = this.fb.group({
      firstName: [this.leadsList?.firstName, Validators.required],
      middleName: [this.leadsList?.middleName],
      lastName: [this.leadsList?.lastName, Validators.required],

      occupation: [this.leadsList?.occupation, Validators.required],

      mobile: [this.leadsList?.mobile, Validators.required],
        email: [this.leadsList?.email, [Validators.required,Validators.email]],

      annualIncome: [this.leadsList?.annualIncome, Validators.required],
      industry: [this.leadsList?.industry, Validators.required],

      leadSource: [this.leadsList?.leadSource, Validators.required],
      leadStatus: [this.leadsList?.leadStatus, Validators.required],
      owner: [this.leadsList?.owner],

      address: this.fb.group({
        houseNo: [this.leadsList?.address?.houseNo, Validators.required],
        village: [this.leadsList?.address?.village, Validators.required],
        district: [this.leadsList?.address?.district, Validators.required],
        state: [this.leadsList?.address?.state, Validators.required],
        pincode: [this.leadsList?.address?.pincode, Validators.required],
      })

    });
    this.editLeadForm.markAllAsTouched();
    this.editLeadForm.updateValueAndValidity();
  }

 updateLead(){
  console.log(this.editLeadForm)
 }
 getLeadById() {
  this.leadService.getLeadId(this.selectedId).subscribe((data: any) => {
    this.leadsList = data;
    console.dir(data);
    console.dir(this.leadsList)
  }, (error: any) => {

  })
}
  gotoBack(){
    this.router.navigateByUrl("/admin/leads");
  }
  get f(): { [key: string]: AbstractControl } {
    return this.editLeadForm.controls;
  }
  get g(): { [key: string]: AbstractControl } {
  let c= this.editLeadForm.controls.address as FormGroup
    return c.controls;
  }
}