import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-delayed-order-transmission',
  templateUrl: './delayed-order-transmission.component.html',
  styleUrls: ['./delayed-order-transmission.component.scss']
})
export class DelayedOrderTransmissionComponent implements OnInit {

  constructor() { }
  
  typesOfShoes: string[] = ['Boots', 'Clogs', 'Loafers', 'Moccasins', 'Sneakers'];
  ngOnInit(): void {
   
  }

}
