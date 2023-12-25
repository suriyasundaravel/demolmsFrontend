import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController, ToastController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { DataService } from '../services/data.service';
import * as moment from 'moment';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
// import { format, parse } from 'path';

@Component({
  selector: 'app-calender',
  templateUrl: './calender.page.html',
  styleUrls: ['./calender.page.scss'],
})
export class CalenderPage implements OnInit {
  reportGenerated: boolean = false;
  imageSrc: SafeUrl;

  showMyReport: boolean = false;
  showTeamReport: boolean = false;

  public resConfig:any=[];
  getcount:any;
  userId:any;
  orgId:any;


  leavemngtUrl:any;
  supervisorStatus:boolean;
 
  start_date:any;
  end_date:any;

  leaveReportEmp: any = [];
  leaveReportTeam: any= [];
  leaveReportAll: any= [];
  public applyuserId:any;
  ename:any;
  historyCount:any;
  

  constructor(public toastController: ToastController, public router:Router,
    public dataService:DataService,private http:HttpClient,private alertController: AlertController,
    private activatedRoute:ActivatedRoute,private sanitizer: DomSanitizer ) { 
      this.leavemngtUrl= this.dataService.base_path;
      this.supervisorStatus = this.dataService.isSupervisor
    }
    loadImage() {
      this.dataService.getImage(this.dataService.logopath, this.dataService.Oid).subscribe(
        (imageBlob: Blob) => {
          const imageUrl = URL.createObjectURL(imageBlob);
          // console.log("image url",imageUrl);
          
          this.imageSrc = this.sanitizer.bypassSecurityTrustUrl(imageUrl);
          // console.log("image src",this.imageSrc);
          
        },
        (error) => {
          console.error('Failed to load image', error);
        }
      );
    }
    // loadImage() {
    //   const locallyStoredImage = localStorage.getItem('logoImage');
    //   if (locallyStoredImage) {
    //     // If the image is already stored locally, use it directly
    //     this.imageSrc = this.sanitizer.bypassSecurityTrustUrl(locallyStoredImage);
    //   } else {
    //     // If the image is not available locally, fetch it from the server and store it locally
    //     this.dataService.getImage().subscribe(
    //       (imageBlob: Blob) => {
    //         const reader = new FileReader();
    //         reader.onloadend = () => {
    //           const base64data = reader.result as string;
    //           this.imageSrc = this.sanitizer.bypassSecurityTrustUrl(base64data);
    //           // Store the image locally
    //           this.storeImageLocally(base64data);
    //         };
    //         reader.readAsDataURL(imageBlob);
    //       },
    //       (error) => {
    //         console.error('Failed to load image', error);
    //       }
    //     );
    //   }
    // }
  // Function to store the image in localStorage
  // storeImageLocally(base64data: string) {
  //   localStorage.setItem('logoImage', base64data);
  // }
    

  ngOnInit() {
    this.getcount = this.dataService.getpacount;
      console.log("get count pa",this.getcount);
      this.resConfig = this.dataService.confData;
      this.userId = this.dataService.Uid;
      this.orgId = this.dataService.Oid;
      this.loadImage();
      this.activatedRoute.paramMap.subscribe(param=>{
        this.applyuserId = param.get('userId');
        this.ename = param.get('name');
        this.start_date= param.get('s');
        this.end_date = param.get('e')
        console.log("get user id",this.applyuserId);
        console.log("get user id",this.ename);
        

      })
  }

  async openDatePicker(inputFieldName: string) {
    const alert = await this.alertController.create({
      header: 'Select Date',
      inputs: [
        {
          name: 'selectedDate',
          type: 'date',
          placeholder: 'Select Date',
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
        },
        {
          text: 'OK',
          handler: (data) => {
            // Handle the selected date
            this.handleSelectedDate(inputFieldName, data.selectedDate);
          },
        },
      ],
    });

    await alert.present();
  }

  handleSelectedDate(inputFieldName: string, selectedDate: string) {
    // Handle the selected date based on the input field name
    if (inputFieldName === 'start_date') {
      this.start_date = selectedDate;
    } else if (inputFieldName === 'end_date') {
      this.end_date = selectedDate;
    }
  }

  generateReportEmp() {
    if (!this.start_date || !this.end_date ) {
      const toast = this.toastController.create({
        message: 'Please fill in all the required fields.',
        duration: 2000,
        position: 'middle'
      }).then(toast => {
        toast.present();
      });
      return;
    }
    let d1 = new Date(this.start_date);
    let d2 = new Date(this.end_date);
    if (d1 > d2) {
      const toastc = this.toastController.create({
        message: "End date must be greater than or equal to the start date.",
        duration: 2000,
        position: 'middle'
      }).then(toast => {
        toast.present();
      });
      return;
    }
    const formattedFromDate = moment(this.start_date).format('MM/DD/YYYY');
    const formattedToDate = moment(this.end_date).format('MM/DD/YYYY');
    const user_id = this.userId;
    console.log("format from check",formattedFromDate);
    console.log("format to check",formattedToDate);
    
  
    const url = this.leavemngtUrl + '/rpt/fLeavehis?fromDT=' + formattedFromDate + '&toDT=' + formattedToDate + '&user_id=' + user_id;
  
    const genReportEmp = this.http.post(url, '', this.dataService.jsonauthToken);
    genReportEmp.subscribe(
      res => {
        this.leaveReportEmp = res;
        this.historyCount = this.leaveReportEmp['data'].length;
        console.log("employee leave report", this.leaveReportEmp);
        this.showMyReport = true;
       this.showTeamReport = false;
       this.reportGenerated = true; // Set the report generation status to true
      //  this.start_date='';
      //  this.end_date='';
      },
      (error) => {
        console.error("Error generating employee leave report", error);
      }
    );
  }
  

  generateReportTeam()
  {
    if (!this.start_date || !this.end_date ) {
      const toast = this.toastController.create({
        message: 'Please fill in all the required fields.',
        duration: 2000,
        position: 'middle'
      }).then(toast => {
        toast.present();
      });
      return;
    }
    let empId = 0; // Default value for empId if no employee ID is provided
    if (this.applyuserId) {
      empId = this.applyuserId;
    }

    
    let d1 = new Date(this.start_date);
    let d2 = new Date(this.end_date);
    if (d1 > d2) {
      const toastc = this.toastController.create({
        message: "End date must be greater than or equal to the start date.",
        duration: 2000,
        position: 'middle'
      }).then(toast => {
        toast.present();
      });
      return;
    }
    const formattedFromDate = moment(this.start_date).format('MM/DD/YYYY');
    const formattedToDate = moment(this.end_date).format('MM/DD/YYYY');
    console.log("format from check",formattedFromDate);
    console.log("format to check",formattedToDate);
    
  
    const url = this.leavemngtUrl + '/rpt/fTeamLeaves?fromDT=' + formattedFromDate + '&toDT=' + formattedToDate + '&empId=' + empId;
    // console.log("url",url);
    
    const genReportTeam = this.http.post(url,'',this.dataService.jsonauthToken);
    genReportTeam.subscribe((res:any[])=>{
      this.leaveReportTeam = res;
      this.historyCount = this.leaveReportTeam['data'].length;
      console.log("employee leave report Team",this.leaveReportTeam);
      this.showMyReport = false;
      this.showTeamReport = true;
      this.ename='';
      // this.start_date='';
      // this.end_date='';
      
    }
    ,
      (error) => {
        console.error("Error generating employee leave report", error);
      });
  }

  generateReportAll()
  {
    const formattedFromDate = moment(this.start_date).format('MM/DD/YYYY');
    const formattedToDate = moment(this.end_date).format('MM/DD/YYYY');
    // console.log("format from check",formattedFromDate);
    // console.log("format to check",formattedToDate);
    
  
    const url = this.leavemngtUrl + '/rpt/fLeavehis?fromDT=' + formattedFromDate + '&toDT=' + formattedToDate;
    const genReportAll = this.http.post(url,'',this.dataService.jsonauthToken);
    genReportAll.subscribe(res=>{
      this.leaveReportAll = res;
      this.historyCount = this.leaveReportAll.length;
      console.log("employee leave report All",this.leaveReportAll);
      // this.start_date='';
      // this.end_date='';
      
    },
    
      (error) => {
        console.error("Error generating employee leave report", error);
      })
  }
  getEmpname(sdate:any,edate:any){
    sdate = this.start_date;
    edate = this.end_date;
    // console.log("pass data", sdate);
    // console.log("pass data", edate);
    this.router.navigate(['/role-setup', sdate, edate]);
  }

  getLeave(leaveId: number, orgId: number, userId: number) {
    // console.log("pass data", leaveId);
    // console.log("pass data", userId);
    // console.log("pass data", orgId);
    this.router.navigate(['/approve', leaveId, userId, orgId]);
  }
 
  
}
