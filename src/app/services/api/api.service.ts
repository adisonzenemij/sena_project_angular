import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private urlEndPoint:string = Environment.API_URL;

  constructor(
    private http: HttpClient
  ) { }

  getSelect(table: any) {
    const select = `select=*`;
    const orderby = `orderBy=id_role`;
    const ordermode = `&orderMode=DESC`;
    const urlApi = `${this.urlEndPoint}/${table}?${select}&${orderby}&${ordermode}`;
    console.log(urlApi);
    return this.http.get(`${urlApi}`);
  }
}
