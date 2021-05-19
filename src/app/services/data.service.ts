import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  accountDetails = {
    1000: { acno: 1000, username: "userone", password: "1000", balance: 50000 },
    1001: { acno: 1001, username: "usertwo", password: "usertwo", balance: 5000 },
    1002: { acno: 1002, username: "userthree", password: "userthree", balance: 10000 },
    1003: { acno: 1003, username: "userfour", password: "userfour", balance: 6000 }
  }

  constructor() { }
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
      return true;
     

    }

}

Deposit(acno:any,password:any,amn:any){

  var amount = parseInt(amn);
  let users = this.accountDetails;
  if(acno in users){
    if(password==users[acno]["password"]){
      users[acno]["balance"]+=amount;
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




