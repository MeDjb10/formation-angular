import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, RequiredValidator, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit{

  constructor(private fb:FormBuilder){}
  ngOnInit(): void {
    this.signupForm=this.fb.group({
      firstName:["" , [Validators.minLength(3), Validators.maxLength(10) , Validators.required] ],
      lastName:["" , [Validators.minLength(4), Validators.maxLength(7) , Validators.required]],
      email:["" , [Validators.required, Validators.email]],
      password:["" , [Validators.required , Validators.minLength (8) , Validators.maxLength(25)]],
    })
  }

  signupForm!:FormGroup
  signup(){
    console.log(this.signupForm.value)
    let T = JSON.parse(localStorage.getItem('users') || '[]');
      this.signupForm.value.id = T.length === 0 ? 0 : T[T.length - 1].id + 1;
      T.push(this.signupForm.value);
      localStorage.setItem('users', JSON.stringify(T));
  }
}
