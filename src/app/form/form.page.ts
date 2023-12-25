import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.page.html',
  styleUrls: ['./form.page.scss'],
})
export class FormPage implements OnInit {
  private logresData: Observable<any>;
  public resConfig:any=[];
  private signotpRes:Observable<any>;
  private signotpResData = [];
  private signRes:Observable<any>;
  private signResData = [];
u_name:string;
user_otp:any;
org_code:any;
u_email:any
u_id:any;
ph_no1:any;
public userData:any;
leavemngtUrl:any;
  constructor( public router:Router,public dataService:DataService,
               private http:HttpClient) {
                this.leavemngtUrl= this.dataService.base_path;
                }

  ngOnInit() {
    this.resConfig = this.dataService.confData;
    // this.logresData = this.http.get(this.leavemngtUrl+"/lres/lresources?orgcode=mag001&lang");
    // this.logresData.subscribe(data=>{
    //   this.resConfig=data;
    //   // this.leavemngtUrl.confData = data;
    //   // console.log("Login Response Data"+ JSON.stringify(this.resConfig));
      
    // });

  }
  header ={
    headers: new HttpHeaders(
      {
        'Content-type':'application/json'
      }
    )

  }

  genOTP(){
    let signOTP ={
      "phone":this.ph_no1,
      "otpsrc":"SIG",
      "orgId":this.org_code,
      "email":this.u_email
  }
  this.signotpRes = this.http.post(this.leavemngtUrl+'/login/genotp',JSON.stringify(signOTP),this.header);
  this.signotpRes.subscribe(data=>{
    this.signResData=data;
    console.log("otp Res >> " + JSON.stringify(this.signResData));
  });

  }




regUser(){
this.userData={
  "phone":this.ph_no1,
    "otpSrc":"SIG",
    "orgId":this.org_code,
    "otp":this.user_otp,
    "name":this.u_name,    
    "email":this.u_email
}
// this.dataService.datas=this.userData;
//  console.log("userdata",JSON.stringify(this.userData)); 
//  this.router.navigateByUrl('login'); 
this.signRes = this.http.post(this.leavemngtUrl+'/login/signup',JSON.stringify(this.userData),this.header);
  this.signRes.subscribe(data=>{
    this.signResData=data;
    console.log("sign Res >> " + JSON.stringify(this.signResData));
  }); 
 }
 

}
