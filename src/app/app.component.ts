import { FlatTreeControl } from '@angular/cdk/tree';
import { Component } from '@angular/core';
import { MatTreeFlatDataSource, MatTreeFlattener } from '@angular/material/tree';
import { NavItem } from './shared/menu/side-menu/nav-item';

interface FoodNode {
  name: string;
  children?: FoodNode[];
}



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'orderprocessing';
  displayMenu: boolean = false;
  sideMenuOpen: boolean = true;
  contentMargin: number = 220;
  contentMarginMax: number = 220;
  contentMarginMin: number = 48;

  navItems: NavItem[] = [{
    displayName: 'Dashboard',
    iconName: 'home',
    route: 'home',
    children: []
  },
  {
    displayName: 'eManifest',
    iconName: 'opacity',
    route: 'home',
    children: [{
      displayName:'Indianapolis',
      iconName:'',
      children:[]
    },{
      displayName:'Mechelen',
      iconName:'',
      children:[]
    }]
  },{
    displayName: 'Support Tools',
    iconName: 'build',
    route: 'home',
    children: [{
      displayName:'Order Status',
      iconName:'',
      children:[]
    },{
      displayName:'Order Delay',
      iconName:'',
      children:[]
    }]
  },{
    displayName: 'Out Logistic Docs',
    iconName: 'home',
    route: 'home',
    children: []
  },]
  constructor() {

  }

  ngOninit() {
    this.displayMenu = true;
  }

  updateSideMenu() {
    this.sideMenuOpen = !this.sideMenuOpen;
    if (this.sideMenuOpen) {
      this.contentMargin = this.contentMarginMax;
    } else {
      this.contentMargin = this.contentMarginMin;
    }
  }

  expandMenu() {
    if (!this.sideMenuOpen) {
      this.updateSideMenu()
    }
  }

}
