import { Component } from '@angular/core';
import {
  AbstractControl,
  FormArray,
  FormBuilder,
  FormControl,
  Validators,
} from '@angular/forms';
import { CanDeactivate } from '@angular/router';
import { regexEmail, regexPhone } from 'src/app/utils/constants';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css'],
})
export class FormularioComponent implements CanDeactivate<any> {
  constructor(private fb: FormBuilder) {}

  hobbies: Array<any> = [
    { name: 'Reading', value: 'reading' },
    { name: 'Traveling', value: 'traveling' },
    { name: 'Gaming', value: 'gaming' },
  ];
  education: Array<any> = [
    { name: 'High School', value: 'high_school' },
    { name: 'College', value: 'college' },
    { name: 'Grad School', value: 'grad_school' },
  ];

  onCheckboxChange(e: any, groupCheckbox: string) {
    const checkArray: FormArray = this.contactForm.get(
      groupCheckbox
    ) as FormArray;
    if (e.target.checked) {
      checkArray.push(new FormControl(e.target.value));
    } else {
      let i: number = 0;
      checkArray.controls.forEach((item: AbstractControl) => {
        if (item.value == e.target.value) {
          checkArray.removeAt(i);
          return;
        }
        i++;
      });
    }
  }

  contactForm = this.fb.group({
    name: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.pattern(regexEmail)]],
    phone: ['', [Validators.required, Validators.pattern(regexPhone)]],
    message: ['', [Validators.required]],
    age: ['', [Validators.required]],
    gender: ['', [Validators.required]],
    hobbies: this.fb.array([], [Validators.required]),
    country: ['', [Validators.required]],
    education: this.fb.array([], [Validators.required]),
    occupation: ['', [Validators.required]],
  });

  get form(): { [key: string]: AbstractControl } {
    return this.contactForm.controls;
  }

  campoNoValido(campo: string) {
    return (
      this.contactForm.get(campo)?.invalid &&
      this.contactForm.get(campo)?.touched
    );
  }
  enviarDatos() {
    console.log(this.contactForm);
  }

  canDeactivate(): boolean | Promise<boolean> {
    if (this.contactForm.dirty) {
      return Swal.fire({
        title: 'Estas seguro?',
        text: 'Tienes cambios sin guardar en el formulario',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Si, salir',
        cancelButtonText: 'No, quedarse',
      }).then((result) => {
        if (result.value) {
          return true;
        } else {
          return false;
        }
      });
    }
    return true;
  }
}
