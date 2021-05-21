import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
depositform=this.fb.group(
  {
    acno:['',[Validators.required,Validators.pattern('[0-9]*')]],
      pwd:['',[Validators.required,Validators.pattern('[a-zA-Z0-9]*')]],
      amount:['',[Validators.required,Validators.pattern('[0-9]*')]]

  }
)
withdrawform=this.fb.group(
  {
    acno:['',[Validators.required,Validators.pattern('[0-9]*')]],
    pwd:['',[Validators.required,Validators.pattern('[a-zA-Z0-9]*')]],
    amount:['',[Validators.required,Validators.pattern('[0-9]*')]]
  }
)


  constructor(private dataService: DataService,private fb:FormBuilder) { }

  ngOnInit(): void {
  }
  Deposit() {
    if(this.depositform.valid){

      var acno = this.depositform.value.acno;
    var password = this.depositform.value.pwd;
    var amount = this.depositform.value.amount;

    const result = this.dataService.Deposit(acno, password, amount)

    if (result) {
      alert("The given amount " + amount + "has been credited... and Balance is:" + result);
    }

    }
    else{
      alert("invalid form")
    }

    
  }
  Withdraw() {
    if(this.withdrawform.valid){
      var acno = this.withdrawform.value.acno;
      var password = this.withdrawform.value.pwd;
      var amount = this.withdrawform.value.amount;
  
      const result = this.dataService.Withdraw(acno, password, amount)
  
      if (result) {
        alert("The given amount " + amount + "has been debited... and Balance is:" + result);
      }
    }
    else{
      alert("invalid form")
    }

    

  }

 

  
}
