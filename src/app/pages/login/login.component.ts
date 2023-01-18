import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  regexEmail =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  constructor(private fb: FormBuilder, private router: Router) {}

  formLogin = this.fb.group({
    email: [
      'test@test.com',
      [Validators.required, Validators.pattern(this.regexEmail)],
    ],
    password: ['123456', [Validators.required, Validators.minLength(6)]],
  });

  login() {
    if (
      this.form['email'].value === 'test@test.com' &&
      this.form['password'].value === '123456'
    ) {
      localStorage.setItem('isLogin', 'true');
      this.router.navigate(['/home']);
    }
  }

  get form(): { [key: string]: AbstractControl } {
    return this.formLogin.controls;
  }

  campoNoValido(campo: string) {
    return (
      this.formLogin.get(campo)?.invalid && this.formLogin.get(campo)?.touched
    );
  }
}
