import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input() displayMenu:boolean = true;
  @Output() menuStateChange: EventEmitter<any> = new EventEmitter<any>()
  constructor() { }

  ngOnInit(): void {
  }

  changeMenuState(){
    this.menuStateChange.emit();
  }

}
