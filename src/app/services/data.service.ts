import { EventEmitter, Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
import { HttpClient, HttpHeaders, HttpErrorResponse, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
    providedIn: 'root'
})
export class DataService {
    // public base_path="https://9085-157-51-166-213.ngrok-free.app/lmgmt";
      public base_path="http://localhost:8080/lmgmt";
      public profileData:any[];
      public confData:any [];
      public Uid:any;
      public Oid:any;
      public logopath='logo';
      public authHeader:string;
      // public uId:any;
      public isSupervisor:boolean;
      public getpacount: any;
      public namelist: any ; 
      public companyName:any;

      public leaveBalanceUpdated: EventEmitter<void> = new EventEmitter<void>();
     
      constructor(private http:HttpClient) {
    }
    httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json'
        })
    }
    authToken = {
        headers: new HttpHeaders({
            'Authorization': 'Bearer '
        })   
    }
    jsonauthToken = {
        headers: new HttpHeaders({
            'content-type':'application/json',
            'Authorization': 'Bearer '
        })
    }
    setToken(){
        this.authToken.headers = this.authToken.headers.set('Authorization','Bearer ' + this.authHeader);
        console.log("Auth Header :: " + this.authToken.headers.get("Authorization"));
            //return this.token;  
            this.jsonauthToken.headers = this.jsonauthToken.headers.set('Authorization','Bearer ' + this.authHeader);
    }
  
   //config leave type
    getLeaveType(): Observable<any> {
        return this.http.get(this.base_path + '/common/get_config?conf_Name=LEAVE_TYPE', this.jsonauthToken);
      }

    // getImage(): Observable<Blob> {
    //     // Retrieve the jsonauthToken header from the DataService
    //     const headers = this.jsonauthToken.headers;
    //     return this.http.get(this.base_path+`/common/getImage?imgType=logo&orgId=${1002}`, { headers, responseType: 'blob' });
    // }
    getImage(imgType: string, orgId: string): Observable<Blob> {
      const url = `${this.base_path}/common/getImage?imgType=${imgType}&orgId=${orgId}`;
      return this.http.get(url, { responseType: 'blob' });
    }
    // getLeaveBalance(userId: any): Observable<any> {
    //     const leaveblnc = {
    //       "userId": userId
    //     };
    //     return this.http.post(this.base_path + '/leave/getlbal', leaveblnc, this.jsonauthToken);
    //   }
    
    //   updateLeaveBalance(userId: any): Observable<any> {
    //     return this.http.post(this.base_path + '/leave/update-lbal', { "userId": userId }, this.jsonauthToken);
    //   }
    
      emitLeaveBalanceUpdated(): void {
        this.leaveBalanceUpdated.emit();
      }


      getPAcount(): Observable<any> {
        let getCount = {
          "org_id":"1001",
          "user_id":"1006"
        };
      
        return this.http.post(this.base_path + '/lsupp/pfacount', JSON.stringify(getCount),
          this.jsonauthToken);
      }
}
