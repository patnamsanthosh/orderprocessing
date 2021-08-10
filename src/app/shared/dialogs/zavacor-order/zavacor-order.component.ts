import {Component, Inject} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

export interface DialogData {
  animal: string;
  name: string;
}

@Component({
  selector: 'app-zavacor-order',
  templateUrl: './zavacor-order.component.html',
  styleUrls: ['./zavacor-order.component.scss']
})



export class ZavacorOrderComponent  {

  constructor(
    public dialogRef: MatDialogRef<ZavacorOrderComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
