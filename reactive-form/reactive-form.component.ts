import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { passwordValidators } from '../Validators/customvalidators';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss']
})
export class ReactiveFormComponent implements OnInit {
  
  personal!:FormGroup

  constructor(private fb:FormBuilder) { }
  
  ngOnInit(): void {
    this.personal=this.fb.group({
    "fullname":["",[Validators.required]],
    "email":[""],
    "password":["",[Validators.required]],
    "confirmpassword":["",[Validators.required,passwordValidators]],
  "address":this.fb.group({
    "fulladdress":[''],
    "city":[''],
    "state":[''],
    "country":[""]
  })  
  })
  }
  onsubmit(){

  }
}
