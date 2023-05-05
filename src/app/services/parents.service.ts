import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ParentsService {

  apiURL: string = environment.apiUrl;

  constructor(
    private http: HttpClient
  ) {
    console.log("[parents.service] constructor()");
  }

  getUrl(uri: string): string {
    return this.apiURL + uri;
  }

  getAllParents(callback?:Function) {
    this.http.get(this.getUrl('parent/all')).subscribe((res:any) => {
      if(callback) callback(res);
    })
  }

  getById(id:number, callback?:Function) {
    this.http.get(this.getUrl('parent/' + id)).subscribe((res:any) => {
      if(callback) callback(res);
    })
  }
}
