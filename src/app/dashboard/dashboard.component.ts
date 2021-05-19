import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  dAccno = "";
  dPwd = "";
  amn = "";

  wAccno = "";
  wPwd = "";
  wamn = "";

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
  }
  Deposit() {
    // alert("Amount Credited");

    var acno = this.dAccno;
    var password = this.dPwd;
    var amount = this.amn;

    const result = this.dataService.Deposit(acno, password, amount)

    if (result) {
      alert("The given amount " + amount + "has been credited... and Balance is:" + result);
    }

  }
  Withdraw() {
    // alert("Amount Credited");

    var acno = this.wAccno;
    var password = this.wPwd;
    var amount = this.wamn;

    const result = this.dataService.Withdraw(acno, password, amount)

    if (result) {
      alert("The given amount " + amount + "has been credited... and Balance is:" + result);
    }

  }

 

  
}
