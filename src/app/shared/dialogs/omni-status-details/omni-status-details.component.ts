import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-omni-status-details',
  templateUrl: './omni-status-details.component.html',
  styleUrls: ['./omni-status-details.component.scss']
})
export class OmniStatusDetailsComponent implements OnInit {

  constructor() { }
  displayedColumns = ['HoldType', 'ResolveReason', 'CreateDate'];
  data:OmniModel[] =[];
  dataSource = new MatTableDataSource<OmniModel>();

  ngOnInit(): void {
    this.data = [{ CreateDate: '08/09/2021', HoldType: 'ABC', ResolveReason: 'Test' },
    { CreateDate: '08/10/2021', HoldType: 'XYC', ResolveReason: 'Test' },
    { CreateDate: '08/09/2021', HoldType: 'KFC', ResolveReason: 'Test' }];

    this.dataSource.data = this.data;
  }

}

export class OmniModel {
  HoldType!:string;
  ResolveReason!:string;
  CreateDate!:string;
}
