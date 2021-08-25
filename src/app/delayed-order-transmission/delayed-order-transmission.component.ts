import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { DelayReasonComponent } from '../shared/dialogs/delay-reason/delay-reason.component';

@Component({
  selector: 'app-delayed-order-transmission',
  templateUrl: './delayed-order-transmission.component.html',
  styleUrls: ['./delayed-order-transmission.component.scss']
})
export class DelayedOrderTransmissionComponent implements OnInit {
  sits = new FormControl();
  sitsData: string[] = [];
  displayedColumns: string[] = [];
  dataSource = new MatTableDataSource<OrderDelay>();
  constructor(public dialog: MatDialog) { }


  ngOnInit(): void {
    this.displayedColumns = ['select', 'order', 'relDate', 'reqDelDate', 'closeDate', 'domStatus', 
    'domHolds', 'wms', 'wmsStatus', 'wmsCancel', 'wmsExport', 'ebsLogs', 'ebsEx', 'stopReason', 'action']
    this.sitsData = ['SHA', 'JPN', 'US', 'EU', 'SIN'];
    this.dataSource.data = [{closeDate:'08/08/2021', domHolds:'1',domStatus:'A', esbEx:'1',
  esbLogs:'1',order:'12345', relDate:'08/08/2021', reqDalDate:'08/08/2021', stopReason:'Test', wms:'1', wmsCancel:'1', wmsExport:'NO', wmsStatus:'a'}
]
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DelayReasonComponent, {
      width: '750px'
    });

    dialogRef.afterClosed().subscribe(result => {
      
    });
  }

}


export class OrderDelay {
  order!: string;
  relDate!: string;
  reqDalDate!: string;
  closeDate!: string;
  domStatus!: string;
  domHolds!: string;
  wms!: string;
  wmsStatus!: string;
  wmsCancel!: string;
  wmsExport!: string;
  esbLogs!: string;
  esbEx!: string;
  stopReason!: string;


}
