import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ChildService } from 'src/app/services/child.service';
import { ParentsService } from 'src/app/services/parents.service';
import { Router } from '@angular/router';

export interface IParent {
  id: number,
  sender: string,
  receiver: string,
  totalAmount: number
}

export interface IChild {
  id: number,
  parentId: number,
  paidAmount: number
}

export interface ITableData {
  id: number,
  _id: number,
  sender: string,
  receiver: string,
  totalAmount: number,
  totalPaidAmount: number,
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  parents:IParent[] = [];
  childs:any;
  tableData: ITableData[] = [];
  _dataSource:any;
  length:number = 0;
  displayedColumns = ['id', 'sender', "receiver", "totalAmount", "totalPaidAmount"];
  loading:boolean = false;

  @ViewChild(MatPaginator)  paginator: MatPaginator | undefined;
  @ViewChild(MatSort) sort: MatSort = new MatSort;


  constructor(
    private parentService: ParentsService,
    private childService: ChildService,
    private route: Router
  ) {
  }

  ngOnInit() {
    this.loading = true;
    this.parentService.getAllParents((res:IParent[]) => {
      this.parents = res;
      for(let i=0; i < this.parents.length; i ++) {
        let sum = 0;
        let item = this.parents[i];
        this.childService.getChildsByParentId(item.id, (res: IChild[]) => {
          res?.forEach(element => {
            sum += element.paidAmount;
          });
          this.tableData.push({
            id: i + 1,
            _id: item.id,
            sender: item.sender,
            receiver: item.receiver,
            totalAmount: item.totalAmount,
            totalPaidAmount: sum
          });
          this._dataSource = new MatTableDataSource(this.tableData);
          this.length = this.parents.length;
          this._dataSource.paginator = this.paginator;
          this._dataSource.sort = this.sort;
        })
      }
      this.loading = false;
    });
  }

  public get dataSource():any {
    if(this.loading || this.tableData.length == 0) return [];
    return this._dataSource;
  }

  public executeSelectedChange = (event: any) => {
    console.log(event);
  }

  public onRowClicked(row:ITableData) {
    // console.log('Row clicked: ', row);
    this.route.navigate(['detail'], {queryParams:{id: row.id}});
  }
}
