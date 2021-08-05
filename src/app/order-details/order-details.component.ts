import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.scss']
})
export class OrderDetailsComponent implements OnInit {

  formGroup: FormGroup; 
  typesOfShoes: string[] = [];
  selectable = true;
  removable = true;
  addOnBlur = true;
  // readonly separatorKeysCodes = [ENTER, COMMA] as const;
  fruits: Fruit[] = [];

   ELEMENT_DATA: PeriodicElement[] = [
    {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
    {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
    {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
    {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
    {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
    {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
    {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
    {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
    {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
    {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
  ];
  selected: any;
  displayedColumns: string[] = [];
  dataSource = new MatTableDataSource<PeriodicElement>();
  constructor(private formBuilder: FormBuilder) {
    this.formGroup = this.formBuilder.group({
      order: new FormControl('')
    });
   }

  ngOnInit(): void {
    this.displayedColumns = ['Order', 'Rel.Date', 'Req.Del.Date', 'CloseDate', 'DOMStatus', 'DOMHolds',
  'WMS','WMSStatus', 'WMSCancel', 'WMSExport', 'ESBLogs', 'ESBEx', 'CTMSDetail', 'DomDetail', 'WMSDetail', 'ESBDetail'];
    // this.typesOfShoes = ['Boots', 'Clogs', 'Loafers', 'Moccasins', 'Sneakers'];
    this.dataSource.data = this.ELEMENT_DATA;
  }

  remove(fruit: Fruit): void {
    const index = this.fruits.indexOf(fruit);

    if (index >= 0) {
      this.fruits.splice(index, 1);
    }
  }

  addTypes() {
    let formcontrol = this.formGroup.get('order');
    const type = formcontrol?.value;
    if(type) {
      this.fruits.push({name:type});
    }
  }

  // changeSelected(e:any) {
  //   console.log(e);
  //   this.selected = e.value;
  // }

  getstate(fruit: Fruit) {
    let formcontrol = this.formGroup.get('order');
    formcontrol?.setValue(fruit.name);
  }
 
}

export class Fruit {
  name!: string;
}

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}
