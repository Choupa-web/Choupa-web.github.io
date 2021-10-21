import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
//import { catchError } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ "Content-Type": "application/json", "Access-Control-Allow-Origin":"*" })
};

@Injectable({
  providedIn: 'root'
})
export class SportsService {

  private apiUrl: string = environment.serverUrl;

  constructor(private http: HttpClient) { }

  getActivities():Observable<any>{
    const URL = this.apiUrl + '/activities';
    return this.http.get(URL, httpOptions);
  }

  getFieldsTypeList():Observable<any> {
    const URL = this.apiUrl + '/fieldstype';
    return this.http.get(URL, httpOptions);
  }

  addNewActivity(newActivity):Observable<any> {
    const URL = this.apiUrl + '/activity';
    return this.http.post(URL,newActivity);
  }
}
