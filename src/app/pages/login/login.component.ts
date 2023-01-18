import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  regexEmail =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  constructor(private fb: FormBuilder) {}

  formLogin = this.fb.group({
    email: ['test@test.com', Validators.pattern(this.regexEmail)],
    password: ['123456', Validators.minLength(6)],
  });

  login() {}

  get form(): { [key: string]: AbstractControl } {
    return this.formLogin.controls;
  }

  campoNoValido(campo: string) {
    return (
      this.formLogin.get(campo)?.invalid && this.formLogin.get(campo)?.touched
    );
  }
}
