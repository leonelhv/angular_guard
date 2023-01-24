import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { regexEmail } from 'src/app/utils/constants';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private userService: UserService
  ) {}

  hide = true;

  formRegister = this.fb.group({
    email: ['', [Validators.required, Validators.pattern(regexEmail)]],
    password: ['', [Validators.required, Validators.minLength(8)]],
  });

  get form(): { [key: string]: AbstractControl } {
    return this.formRegister.controls;
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

  register() {
    this.userService
      .registerUser(this.formRegister.value)
      .then((res) => {
        this.router.navigate(['home']);
      })
      .catch((error) => console.log(error));
  }
}
