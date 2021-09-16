import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-menu-management',
  templateUrl: './menu-management.component.html',
  styleUrls: ['./menu-management.component.scss']
})
export class MenuManagementComponent implements OnInit {

  displayedColumns: string[] = [];
  dataSource = new MatTableDataSource<MenuManagement>();
  menuManagement: MenuManagement[] = [];
  constructor() { }

  ngOnInit(): void {
    this.displayedColumns = ['menu', 'url','level', 'parent', 'action']

     this.menuManagement = [{
      menu:'Dashboard', level:1,
      parent:'',url:'/dashboard'
    },
    {
      menu:'eManifest', level:1,
      parent:'',url:'/emanifest'
    },
    {
      menu:'Support UI', level:1,
      parent:'',url:'/supportui'
    },
    {
      menu:'Menu Management', level:1,
      parent:'',url:'/menumanagement'
    }];

    this.dataSource.data = this.menuManagement;
  }

  addNewMenu() {
    let newMenu:MenuManagement = {
    _isNew:true,
    level:0,
    menu:'',
    parent:'',
    url:''
    }

    this.menuManagement.push(newMenu);
    this.dataSource.data = this.menuManagement;
    
  }

}

export class MenuManagement {
  menu!:string;
  url!:string;
  level!:number;
  parent!:string;
  _isNew?:boolean;
}
