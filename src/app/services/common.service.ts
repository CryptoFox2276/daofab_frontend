import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

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
  sender: string,
  receiver: string,
  totalAmount: number,
  totalPaidAmount: number,
}

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  apiURL: string = environment.apiUrl;

  constructor(
    private http: HttpClient
  ) { }

  getUrl(uri: string): string {
    return this.apiURL + uri;
  }

  getAllParents(callback?:Function):any {
    this.http.get(this.getUrl('parent/all')).subscribe((res:any) => {
      if(callback) callback(res);
      else return res;
    })
  }

  getAllChilds(callback?:Function):any {
    this.http.get(this.getUrl('child/all')).subscribe((res:any) => {
      if(callback) callback(res);
    })
  }

  getChildsByParentId(pId: number, callback?:Function):any {
    this.http.get(this.getUrl('child/parent/'+pId)).subscribe((res:any) => {
      if(callback) callback(res);
      else return res;
    })
  }

}
