import { JitCompiler } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { LoginComponent } from '../login/login.component';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  // login(_acno: any, _password: any) {
  //   throw new Error('Method not implemented.');
  currentuser="";
    
  accountDetails:any = {
    1000: { acno: 1000, username: "userone", password: "1000", balance: 50000 },
    1001: { acno: 1001, username: "usertwo", password: "usertwo", balance: 5000 },
    1002: { acno: 1002, username: "userthree", password: "userthree", balance: 10000 },
    1003: { acno: 1003, username: "userfour", password: "userfour", balance: 6000 }
  }

  constructor() { 
    this.getdetails();
  }


  savedetails(){
    localStorage.setItem("accountDetails",JSON.stringify(this.accountDetails));
    if(this.currentuser){

      localStorage.setItem("currentUser",JSON.stringify(this.currentuser));
    }
    
  }
  getdetails(){

    if(localStorage.getItem("accountDetails"))
    {

      this.accountDetails= JSON.parse(localStorage.getItem("accountDetails") || '') ;
    }
 

  if(localStorage.getItem("currentuser")){

    this.currentuser= JSON.parse(localStorage.getItem("currentuser") || '') ;
  }
  }



register(username:any,acno:any,password:any){
  let users=this.accountDetails;
    if(acno in users){
      return false;
     
    }
    else{
      users[acno]={
        acno,
        username,
        password,
        balance:0
      }
      this.savedetails();
      return true;
     

    }

}
login(acno: any, password: any){
  let users = this.accountDetails;
  if(acno in users){
    if(password==users[acno]["password"]){
this.currentuser=users[acno]["username"]
this.savedetails();
      return true;

    }
    else{
      alert("invalid password");
      return false;
    }
  }
  else{
    alert("invalid account number");
    return false;
  }

}


Deposit(acno:any,password:any,amn:any){

  var amount = parseInt(amn);
  let users = this.accountDetails;
  if(acno in users){
    if(password==users[acno]["password"]){
      users[acno]["balance"]+=amount;
      this.savedetails();
      return users[acno]["balance"];
    }
    else{
      alert("incorrect password");
      return false;
    }
  }
    else{
      alert("invalid Account");
      return false;
    }
  } 
   Withdraw(acno:any,password:any,amn:any){

    var amount = parseInt(amn);
    let users = this.accountDetails;
    if(acno in users){
      if(password==users[acno]["password"]){
        if(users[acno]["balance"]> amount){
          users[acno]["balance"]-=amount;
          return users[acno]["balance"];
        }
        else{
          alert("insufficient balance");
          return false;
        }
        
      }
      else{
        alert("incorrect password");
        return false;
      }
    }
      else{
        alert("invalid Account");
        return false;
      }
    }

}




