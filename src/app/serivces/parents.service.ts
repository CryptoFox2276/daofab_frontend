import { Injectable } from '@angular/core';

import {HttpClient} from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ParentsService {

  apiURL: string = environment.apiUrl;

  constructor(
    private http: HttpClient
  ) { }

  getUrl(uri: string): string {
    return this.apiURL + uri;
  }
  public getAllParents() {
    this.http.get(this.getUrl('parents/all')).subscribe((res:any) => {
      console.log("getAllParents:", res);
    })
  }
}
