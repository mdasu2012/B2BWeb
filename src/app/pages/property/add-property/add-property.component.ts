import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PropertyService } from 'src/app/services/property.service';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';

@Component({
  selector: 'app-add-property',
  templateUrl: './add-property.component.html',
  styleUrls: ['./add-property.component.scss']
})
export class AddPropertyComponent implements OnInit {

  createPropertyForm: FormGroup;
  bsConfiguration: Partial<BsDatepickerConfig>;
  constructor(private router: Router, private fb: FormBuilder, private propertyService:PropertyService) {
    this.createPropertyForm = this.fb.group({
      propertyName: ['', Validators.required],
      companyName: ['', Validators.required],
      reraNumber: ['', Validators.required],

      guidelineValue: ['', Validators.required],

      propertyType: ['', Validators.required],
      totalPlots: ['', Validators.required],

      poc: ['', Validators.required],
      mobile: ['', Validators.required],

      amenities: ['', Validators.required],
      startDate: ['', Validators.required],

      extensionDate: ['', Validators.required],
      propertyDescription: [''],
      status: ['', Validators.required],
      propertyMap: [''],

      address: this.fb.group({
        directions: ['', Validators.required],
        village: ['', Validators.required],
        district: ['', Validators.required],
        state: ['', Validators.required],
      })

    });
    this.bsConfiguration = {
      dateInputFormat: 'YYYY-MM-DD',
      containerClass: 'theme-red',
      isAnimated: true,
    };
  }

  ngOnInit(): void {
  }

  createProperty(){
    this.propertyService.createProperty(this.createPropertyForm.value).subscribe((data: any) =>{

      this.router.navigateByUrl("/admin/properties");
    }, (error: any) =>{

    })
  }

  gotoBack(){
    this.router.navigateByUrl('/admin/properties');
  }
}