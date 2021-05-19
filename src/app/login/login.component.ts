import { registerLocaleData } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  aim = "Your Perfect Banking Partner";
  acno = "account number pls";
  pwd = "";
  amount="";

  constructor(private router: Router,private dataService:DataService) { }

  ngOnInit(): void {
  }
  // accnoChange(event: any) {
  //   this.accno = event.target.value;
  //   console.log(this.accno);

  // }
  // pwdChange(event: any) {
  //   this.pwd = event.target.value;
  //   console.log(this.pwd);
  // }

  login() {
    // alert("login clicked")
    var accno = this.acno;
    var pwd = this.pwd;
    let users = this.dataService.accountDetails;
    if (accno in users) {
      if (pwd == users[accno]["password"]) {
        alert("login succesfull");
        this.router.navigateByUrl("dashboard");
      }

      else {
        alert("incorrect password");
      }
    }
    else {
      alert("invalid account no");
    }

  }
  register(){
    this.router.navigateByUrl("register");
  }
}





