import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ChildService {

  apiURL: string = environment.apiUrl;
  parentId: number = 0;

  constructor(
    private http: HttpClient
  ) {
    this.parentId = 0;
  }

  init() {
    this.parentId = 0;
  }

  getUrl(uri: string): string {
    return this.apiURL + uri;
  }

  getAllChilds(callback?:Function) {
    this.http.get(this.getUrl('child/all')).subscribe((res:any) => {
      if(callback) callback(res);
    })
  }

  getById(id: number, callback?:Function) {
    this.http.get(this.getUrl('child/'+id)).subscribe((res:any) => {
      if(callback) callback(res);
    })
  }

  getChildsByParentId(pId: number, callback?:Function) {
    this.http.get(this.getUrl('child/parent/'+pId)).subscribe((res:any) => {
      if(callback) callback(res);
    })
  }
}
