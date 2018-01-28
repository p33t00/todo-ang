import { Component, OnInit } from '@angular/core';
import {
  NgForm,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';

import { AuthService } from '../auth.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  authForm: FormGroup;
  message: string;

  constructor(
    public fb: FormBuilder,
    private authService: AuthService,
    public router: Router
  ) {
    this.authForm = fb.group({
      email:  ['', Validators.required],
      password:   ['', Validators.required],
      remember:   ['']
    });
  }

  onSubmit(form: NgForm) {
    const _this = this;
    this.authService.signin(form).then(
// do something if can't login
      tokenData => {console.log(tokenData); tokenData.status === 200 ? _this.router.navigate(['admin']) : '';},
// get some more verbous info on error and output it to user
      err => {if (err.status === 401){_this.message = 'Invalid Credentials'; }}
    );
  }
  ngOnInit() {}
}
