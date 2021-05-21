import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  uname = "";
  acno = "";
  pwd = "";

  registerform = this.fb.group(
    {
      uname:['',[Validators.required,Validators.pattern('[a-zA-Z]*')]],
      acno:['',[Validators.required,Validators.pattern('[0-9]*')]],
      pwd:['',[Validators.required,Validators.pattern('[a-zA-Z0-9]*')]]

    }
  )

  constructor(private dataService:DataService,private router:Router,private fb:FormBuilder) { }//dependency injection

  ngOnInit(): void {
  }
  register() {
    console.log(this.registerform.get('uname')?.errors);
    if(this.registerform.get('uname')?.errors){
      alert("username is required");
    }

   console.log(this.registerform.get('acno')?.errors);
      if(this.registerform.get('acno')?.errors){
        alert("account number is required");
      }
      console.log(this.registerform.get('pwd')?.errors);
    if(this.registerform.get('pwd')?.errors){
      alert("password  required");
    }


    
    
    if(this.registerform.valid){
      var username=this.registerform.value.uname;
    var acno=this.registerform.value.acno;
    var password=this.registerform.value.pwd;

    //console.log(username,acno,password);
  
   const result= this.dataService.register(username,acno,password)
   if(result){
    alert("successfully registered")
    this.router.navigateByUrl("");

   }
   else{
    alert("user exist....pls login")
  

   }
      
    }
    else{
     // alert("form invalid")
    }
     
     

    
  }

}
