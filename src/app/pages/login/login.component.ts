import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserAccount } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  user: UserAccount;
  constructor(private router: Router, private fb: FormBuilder, private userService: UserService) {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      otp: [''],

    })
  }

  ngOnInit(): void {
  }

  login() {

  }

  onSubmit() {
    this.userService.doLogin(this.loginForm.value).subscribe((data: any) => {
      this.user = data;
      console.dir(this.user)
      this.router.navigateByUrl("/admin/dashboard");

    }, (error: any) => {

    })
  }

}
