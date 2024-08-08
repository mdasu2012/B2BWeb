import { Component } from '@angular/core';
import { UntypedFormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-otp',
  templateUrl: './otp.component.html',
  styleUrl: './otp.component.scss'
})
export class OtpComponent  {

  constructor(private router: Router, private fb: UntypedFormBuilder, private userService: UserService) {

  }
  onOtpChange(value:any){
    console.log(value)
    this.userService.checkOtp(value).subscribe(res=>{
      this.router.navigateByUrl("/admin/dashboard");
    },error => {

    })
    
  }

  otpSubmit(){
    this.router.navigateByUrl("/admin/dashboard");
  }
}
