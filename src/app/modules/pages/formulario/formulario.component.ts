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
    dni: [[], [Validators.required, Validators.minLength(8)]],
    country: ['', [Validators.required]],
    education: ['', [Validators.required]],
    occupation: ['', [Validators.required]],
  });

  get form(): { [key: string]: AbstractControl } {
    return this.contactForm.controls;
  }

  enviarDatos() {
    this.contactForm.reset();
  }

  canDeactivate(): boolean | Promise<boolean> {
    let invalidControls = 0;
    for (const control in this.contactForm.controls) {
      if (this.form[control].invalid) {
        invalidControls++;
      }
    }

    if (this.contactForm.dirty) {
      return Swal.fire({
        title: 'Estas seguro?',
        text:
          invalidControls > 0
            ? `Tienes ${invalidControls} campos en el formulario sin rellenar`
            : 'Estas seguro de salir sin guardar tu Formulario',
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
