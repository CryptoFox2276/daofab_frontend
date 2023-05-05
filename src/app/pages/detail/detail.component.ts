import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ChildService } from 'src/app/services/child.service';
import { ParentsService } from 'src/app/services/parents.service';
import { IChild, IParent, ITableData } from '../home/home.component';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  tableData: ITableData[] = [];
  _dataSource:any;
  length:number = 0;
  displayedColumns = ['id', 'sender', "receiver", "totalAmount", "totalPaidAmount"];
  loading:boolean = false;

  @ViewChild(MatPaginator)  paginator: MatPaginator | undefined;
  @ViewChild(MatSort) sort: MatSort = new MatSort;

  constructor(
    private route: Router,
    private router: ActivatedRoute,
    private parentService: ParentsService,
    private childService: ChildService
  ) {}

  ngOnInit(): void {
    this.loading = true;
    this.router.queryParams.subscribe(query => {
      if(Object.keys(query).length == 0) return;
      this.parentService.getById(query['id'], (res:IParent) => {
        let parent:IParent = res;
        this.childService.getChildsByParentId(query['id'], (res:IChild[]) => {
          this.loading = false;
          let index = 0;
          res?.forEach(item => {
            index ++;
            this.tableData.push({
              id: index,
              _id: item.id,
              sender: parent.sender,
              receiver: parent.receiver,
              totalAmount: parent.totalAmount,
              totalPaidAmount: item.paidAmount
            });
          })
          this._dataSource = new MatTableDataSource(this.tableData);
          this.length = this.tableData.length;
          this._dataSource.paginator = this.paginator;
          this._dataSource.sort = this.sort;
        })
      })
    })
  }

  get dataSource():any {
    if(this.loading || this.tableData.length == 0) return [];
    return this._dataSource;
  }
}
