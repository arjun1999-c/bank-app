import { Component, OnInit } from '@angular/core';
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

  constructor(private dataService:DataService,private router:Router) { }//dependency injection

  ngOnInit(): void {
  }
  register() {
    var username=this.uname;
    var acno=this.acno;
    var password=this.pwd;
  
   const result= this.dataService.register(username,acno,password)
   if(result){
    alert("successfully registered")
    this.router.navigateByUrl("");

   }
   else{
    alert("user exist....pls login")

   }
  }

}
