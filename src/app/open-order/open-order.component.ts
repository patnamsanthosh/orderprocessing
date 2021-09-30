import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-open-order',
  templateUrl: './open-order.component.html',
  styleUrls: ['./open-order.component.scss']
})
export class OpenOrderComponent implements OnInit {

  exceptions:string[] = ["No Omni Order", "Omni Hold", "Omni Back", "Omni Part.Back", "No FC Order"];
  fulfillmentZCErr:string[] = ["Save Error", "No Omni Status","No Omni Event"]
  constructor() { }

  ngOnInit(): void {
  }

}
