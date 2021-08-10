import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-ebs-status',
  templateUrl: './ebs-status.component.html',
  styleUrls: ['./ebs-status.component.scss']
})
export class EbsStatusComponent implements OnInit {

  displayedColumns = ['Transaction', 'Domain', 'Type', 'Status','AppId', 'Component', 'TimeStamp', 'LogMessage', 'TransBefore', 'TransAfter'];
  displayedColumns1 = ['TransactionId', 'Domain', 'Type', 'Status', 'AppId', 'Component', 'TimeStamp','TransactionDate'];
  data: EBSLog_model[] = [
    {
      AppId: 'ABC', Component: 'abc',
      Domain: 'Test',
      LogMessage: 'Test message',
      Status: 'A',
      TimeStamp: '06:00',
      TransAfter: '22',
      TransBefore: '33',
      Transaction: 'abc',
      Type: 'P'
    },{
      AppId: 'ABC', Component: 'abc',
      Domain: 'Test',
      LogMessage: 'Test message',
      Status: 'A',
      TimeStamp: '06:00',
      TransAfter: '22',
      TransBefore: '33',
      Transaction: 'abc',
      Type: 'P'
    }];

  data1: EBS_Exception_model[] = [
    {
      AppId: 'ABC', Component: 'abc',
      Domain: 'Test',
      Status: 'A',
      TimeStamp: '06:00',
      TransactionId: 'abc',
      Type: 'P', TransactionDate: '10/08/2021'
    },{
      AppId: 'ABC', Component: 'abc',
      Domain: 'Test',
      Status: 'A',
      TimeStamp: '06:00',
      TransactionId: 'abc',
      Type: 'P', TransactionDate: '10/08/2021'
    }];
  dataSource = new MatTableDataSource<EBSLog_model>();
  dataSource1 = new MatTableDataSource<EBS_Exception_model>();
  constructor() { }

  ngOnInit(): void {
    this.dataSource.data = this.data;
    this.dataSource1.data = this.data1;
  }

}

export class EBSLog_model {
  Transaction!:string;
  Domain!:string;
  Type!:string;
  Status!:string;
  AppId!:string;
  Component!:string;
  TimeStamp!:string;
  LogMessage!:string;
  TransBefore!:string;
  TransAfter!:string;
}

export class EBS_Exception_model {
  TransactionId!:string;
  Domain!:string;
  Type!:string;
  Status!:string;
  AppId!:string;
  Component!:string;
  TimeStamp!:string;
  TransactionDate!:string;
}
