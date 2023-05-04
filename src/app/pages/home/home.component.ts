import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  dataSource:any;
  displayedColumns = ['id', 'name'];

  @ViewChild(MatPaginator)  paginator: MatPaginator | undefined;
  @ViewChild(MatSort) sort: MatSort = new MatSort;


  constructor() { }

  ngOnInit(): void {

    this.dataSource = new MatTableDataSource([
      {id: 1, name: 'abc'},
      {id: 2, name: 'xyz'},
      {id: 1, name: 'abc'},
      {id: 2, name: 'xyz'},
      {id: 1, name: 'abc'},
      {id: 2, name: 'xyz'},
      {id: 1, name: 'abc'},
      {id: 2, name: 'xyz'},
      {id: 1, name: 'abc'},
      {id: 2, name: 'xyz'},
      {id: 1, name: 'abc'},
      {id: 2, name: 'xyz'},
      {id: 1, name: 'abc'},
      {id: 2, name: 'xyz'},
      {id: 1, name: 'abc'},
      {id: 2, name: 'xyz'},
      {id: 1, name: 'abc'},
      {id: 2, name: 'xyz'},
      {id: 1, name: 'abc'},
      {id: 2, name: 'xyz'},
      {id: 1, name: 'abc'},
      {id: 2, name: 'xyz'},
    ]);


  }

  public ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  public executeSelectedChange = (event: any) => {
    console.log(event);
  }

  public onRowClicked(row:any) {
    console.log('Row clicked: ', row);
  }
}
