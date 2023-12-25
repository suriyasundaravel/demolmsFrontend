import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  userId:any;
  private logresData: Observable<any>;
  public resConfig:any=[];
  leavemngtUrl:any;
  private loginRes:Observable<any>;
  private loginResData=[];
   private otpRes: Observable <any>;
  private otpResData = [];
user_phone:any;
user_otp;
user_mail:any;
org_id:any;
public authData:any;

constructor(public router:Router,public dataService:DataService,private http:HttpClient) {
    this.leavemngtUrl= this.dataService.base_path;
}
public rec:any= []
  ngOnInit() {
    this.logresData = this.http.get(this.leavemngtUrl+"/lres/lresources?orgcode=mag001&lang=en");
    this.logresData.subscribe(data=>{
      this.resConfig=data;
      // this.leavemngtUrl.confData = data;
      this.dataService.confData= data;
      // console.log("Login Response Data"+ JSON.stringify(this.resConfig));  
    },
    error => {
      console.error('Error response:', error.error);
    });

  }
  
  header = {
    headers: new HttpHeaders(
      {'Content-type':'application/json'}
    )      
  }

  genOTP() {
    let loginotpauthData = {
      "phone": this.user_phone,
      "otpsrc": "LOG",
      "orgId": this.org_id,
      "email": this.user_mail
    };
  
    this.otpRes = this.http.post(this.leavemngtUrl + '/login/genotp', JSON.stringify(loginotpauthData), this.header);
    this.otpRes.subscribe(
      (data: any) => {
        this.otpResData = data;
        console.log("otp Res >> ", JSON.stringify(this.otpResData));
  
        if (this.otpResData && this.otpResData['status'] === "Success") {
          // Fill the OTP value in the input field
          this.user_otp = this.otpResData['otp_gen'];
        } else {
          console.log("Failed to fetch OTP");
        }
      },
      (error) => {
        console.error("Error fetching OTP", error);
      }
    );
  }
  


authenticate(){
let loginresauthData={
  "phone":this.user_phone,
    "otpsrc":"LOG",
    "otp":this.user_otp,
    "orgId":this.org_id,
    "email":this.user_mail
}
this.loginRes=this.http.post(this.leavemngtUrl+'/auth/gouser',JSON.stringify(loginresauthData),this.header);
    this.loginRes.subscribe(data=>{
      this.loginResData=data;
      console.log("login res data",JSON.stringify(this.loginResData));
      // Accessing user_info array
      const user_info = this.loginResData["userinfo"].user_info;
      // console.log('User Info:', user_info);
      this.dataService.profileData = this.loginResData['userinfo'].user_info;
      console.log("profile data", this.dataService.profileData);
      // Accessing name (DIS_NAME) from profile data
      // if (this.dataService.profileData && this.dataService.profileData[0] && this.dataService.profileData[0]['DIS_NAME']) {
      //   const name = this.dataService.profileData[0]['DIS_NAME'];
      //   console.log("Name:", name);
      // } else {
      //   console.error("DIS_NAME is not present in profile data or profile data is undefined/null.");
      // }

      this.dataService.Uid=this.loginResData['userinfo'].userId;
      this.dataService.Oid=this.loginResData['userinfo'].orgId;
      this.dataService.companyName = this.loginResData['userinfo'].org_name;
      // console.log("company name",this.dataService.Uid);
      // console.log("company name",this.dataService.Oid);
      // console.log("company name",this.dataService.companyName);
      
    
      // console.log("status: " + this.loginResData['status']);
      let resStatus = this.loginResData['status'];
       if (!resStatus.undefined && "Success"==resStatus){
         this.dataService.authHeader = this.loginResData['accessToken'];
         console.log("header >> " + this.dataService.authHeader);
         this.dataService.setToken();
      
         this.dataService.isSupervisor= this.loginResData["userinfo"].isSupervisor;
         console.log("supervisor status", this.dataService.isSupervisor);
         if(!this.dataService.isSupervisor){
          this.router.navigateByUrl('emp-dashboard');
         }
        else{
        
        this.router.navigateByUrl('sup-dashboard');
        }
      //   // Clear input fields
      this.user_phone = '';
      this.user_otp = '';
      this.user_mail = '';
      this.org_id = '';
       }
       else{
        console.log("message : " + resStatus);

       }
      
      
    })
 
  }
 
}
