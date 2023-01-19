import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { regexEmail } from 'src/app/utils/constants';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  loginInvalid = false;
  hide = true;

  constructor(private fb: FormBuilder, private router: Router) {}

  formLogin = this.fb.group({
    email: [
      'test@test.com',
      [Validators.required, Validators.pattern(regexEmail)],
    ],
    password: ['123456', [Validators.required, Validators.minLength(6)]],
  });

  login() {
    this.formLogin.markAsTouched();
    if (
      this.form['email'].value === 'test@test.com' &&
      this.form['password'].value === '123456'
    ) {
      localStorage.setItem('isLogin', 'true');
      this.router.navigate(['/home']);
    } else {
      this.loginInvalid = true;
    }
  }

  get form(): { [key: string]: AbstractControl } {
    return this.formLogin.controls;
  }

  getErrorMessage(control: string) {
    if (this.form[control].hasError('required')) {
      return `El ${control} es requerido`;
    }
    if (control == 'email' && this.form[control].hasError('pattern')) {
      return 'No es un email válido';
    }
    if (control == 'password' && this.form[control].hasError('minlength')) {
      return 'El password es mínimo de 6 caracteres';
    }
    return null;
  }
}
