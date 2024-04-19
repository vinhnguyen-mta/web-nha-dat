import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  myForm!: FormGroup;
  constructor(private formBuilder: FormBuilder) {}

  listLogin = [
  ];

  ngOnInit() {
    this.myForm = this.formBuilder.group({
      list: this.formBuilder.group({
        list: new FormArray([]),
      }),
    });

    setTimeout(() => {}, 1000);
  }

  onSubmit() {
    console.log(this.myForm?.value);
  }
}
