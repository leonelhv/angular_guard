import { Component, OnDestroy } from '@angular/core';
import { AbstractControl, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { regexEmail } from 'src/app/utils/constants';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnDestroy {
  loginInvalid = false;
  hide = true;
  failLogin = false;
  timeoutId: any;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private userService: UserService
  ) {}

  formLogin = this.fb.group({
    email: ['', [Validators.required, Validators.pattern(regexEmail)]],
    password: ['', [Validators.required, Validators.minLength(8)]],
  });

  login() {
    this.userService
      .login(this.formLogin.value)
      .then((res) => {
        this.router.navigate(['home']);
      })
      .catch((error) => {
        this.failLogin = true;
        this.timeoutId = setTimeout(() => {
          this.failLogin = false;
        }, 3000);
      });
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
      return 'El password es mínimo de 8 caracteres';
    }
    return null;
  }
  ngOnDestroy(): void {
    if (this.timeoutId) {
      clearTimeout(this.timeoutId);
    }
  }
}
