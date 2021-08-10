import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { ZavacorOrderComponent } from '../shared/dialogs/zavacor-order/zavacor-order.component';
import { OmniStatusDetailsComponent } from '../shared/dialogs/omni-status-details/omni-status-details.component';
import { ExactaStatusComponent } from '../shared/dialogs/exacta-status/exacta-status.component';
import { EbsStatusComponent } from '../shared/dialogs/ebs-status/ebs-status.component';

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
  animal: string='';
  name: string='';

  ELEMENT_DATA: OrderDetail[] = [{
    CloseDate: new Date(), DOMHolds: 4, DOMStatus: 'A', ESBEx: null, ESBLogs: null, Order: 'T-12345', Rel_Date: new Date(),
    Req_Del_Date: new Date(), WMS: null, WMSCancel: '', WMSExport: 3, WMSStatus: 'A'
  }];
  selected: any;
  displayedColumns: string[] = [];
  dataSource = new MatTableDataSource<OrderDetail>();
  constructor(private formBuilder: FormBuilder, public dialog: MatDialog) {
    this.formGroup = this.formBuilder.group({
      order: new FormControl('')
    });
  }

  ngOnInit(): void {
    this.displayedColumns = ['Order', 'Rel.Date', 'Req.Del.Date', 'CloseDate', 'DOMStatus', 'DOMHolds',
      'WMS', 'WMSStatus', 'WMSCancel', 'WMSExport', 'ESBLogs', 'ESBEx','select'];
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
    if (type) {
      this.fruits.push({ name: type });
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

  openDialog(): void {
    const dialogRef = this.dialog.open(ZavacorOrderComponent, {
      width: '750px',
      data: {name: this.name, animal: this.animal}
    });

    dialogRef.afterClosed().subscribe(result => {
      
      this.animal = result;
    });
  }

  openOmniDialog(): void {
    const dialogRef = this.dialog.open(OmniStatusDetailsComponent, {
      width: '750px'
    });

    dialogRef.afterClosed().subscribe(result => {
      
      this.animal = result;
    });
  }

  openExactaDialog(): void {
    const dialogRef = this.dialog.open(ExactaStatusComponent, {
      width: '750px'
    });

    dialogRef.afterClosed().subscribe(result => {
      
      this.animal = result;
    });
  }

  openESBStatusDialog(): void {
    const dialogRef = this.dialog.open(EbsStatusComponent, {
      width: '750px'
    });

    dialogRef.afterClosed().subscribe(result => {
      
      this.animal = result;
    });
  }

}

export class Fruit {
  name!: string;
}

export interface OrderDetail {
  Order: string;
  Rel_Date: Date;
  Req_Del_Date: Date;
  CloseDate: Date;
  DOMStatus: string;
  DOMHolds: Number;
  WMS: any;
  WMSStatus: string;
  WMSCancel: string;
  WMSExport: any;
  ESBLogs: any;
  ESBEx: any;
}
