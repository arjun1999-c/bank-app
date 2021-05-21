import { registerLocaleData } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  aim = "Your Perfect Banking Partner";
  loginform = this.fb.group(
    {
      acno:['',[Validators.required,Validators.pattern('[0-9]*')]],
      pwd:['',[Validators.required,Validators.pattern('[a-zA-Z0-9]*')]]
    }
  )
  

    

  constructor(private router: Router,private dataService:DataService,private fb:FormBuilder) { }

  ngOnInit(): void {
  }

  login(){
    
    if(this.loginform.valid){

    var acno=this.loginform.value.acno;
    var password=this.loginform.value.pwd;

const result= this.dataService.login(acno,password)
   if (result){

    alert("successfully login");
    this.router.navigateByUrl("dashboard");
  }
}
 else{
    alert("invalid form")
 }
}
         register(){
           this.router.navigateByUrl("register");
         }
  }
