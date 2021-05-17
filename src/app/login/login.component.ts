import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  aim = "Your Perfect Banking Partner";
  acno = "account number pls";
  pwd = "";
  accountDetails = {
    1000: { acno: 1000, username: "userone", password: "1000", balance: 50000 },
    1001: { acno: 1001, username: "usertwo", password: "usertwo", balance: 5000 },
    1002: { acno: 1002, username: "userthree", password: "userthree", balance: 10000 },
    1003: { acno: 1003, username: "userfour", password: "userfour", balance: 6000 }
  }

  constructor() { }

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
    var pwd=this.pwd;
    let users=this.accountDetails;
    if (accno in users) {
        if(pwd==users[accno]["password"]){
          alert("login succesfull");
        }
    
  else{
      alert("incorrect password");
  }
}
else{
  alert("invalid account no");
}

}
}
