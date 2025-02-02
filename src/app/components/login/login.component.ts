import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm:FormGroup;

  constructor(private fb:FormBuilder) {
    this.loginForm = this.fb.group({
      email:['',[Validators.required,Validators.email]],
      password:['',Validators.required]
   });
   
  }


  ngOnInit(): void {
    console.log("email",this.loginForm.get('email')?.value);
    this.emailChanges();
    
  }
  emailChanges(){
  this.loginForm.get('email')?.valueChanges.subscribe((value)=>{
    console.log("email",value);
    
  })
  }

}
