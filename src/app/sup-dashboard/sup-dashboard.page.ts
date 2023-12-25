import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { RestService } from '../rest.service';
import { DataService } from '../services/data.service';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-sup-dashboard',
  templateUrl: './sup-dashboard.page.html',
  styleUrls: ['./sup-dashboard.page.scss'],
})
export class SupDashboardPage implements OnInit {
  public userId:any;
  public orgId:any;

  getcount:any;

  private logresData: Observable<any>;
  public resConfig:any=[];
  leavemngtUrl:any;
  private supgetLeaveRes: Observable<any>;
  
  private supgetPLeaveRes: Observable<any>;
  
  private getcountRes: Observable<any>;
  private getcountResData:any=[];
  imageSrc: SafeUrl;
  supervisorStatus:boolean;

  supgetLeaveResData: any[] = []; // Add property for team leave data
  supgetPLeaveResData: any[] = []; // Add property for team plan data

  filteredTeamLeaveData: any[] = [];
  filteredTeamPlanData: any[] = [];
  showAllTeamLeaveDates: boolean = false;
  showAllTeamPlanDates: boolean = false;
  companyName:any;

  constructor(private router:Router,private modalctrl:ModalController, private rs:RestService, 
    private http:HttpClient,public dataService:DataService,private sanitizer: DomSanitizer) { 
      this.leavemngtUrl = this.dataService.base_path;
      this.supervisorStatus = this.dataService.isSupervisor
      this.companyName=this.dataService.companyName;
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
    this.resConfig=this.dataService.confData;
    this.userId=this.dataService.Uid;
    this.orgId=this.dataService.Oid;
    
    this.loadImage();
    this.getTeamLeave();
    this.getTeamPlan();
    this.displayCount();
      
  }

  displayCount() {
    this.dataService.getPAcount().subscribe(data => {
      // console.log("get pa count data",data);
      const totalRecords = data.totalRecords;
      this.dataService.getpacount = totalRecords;
      // console.log("supervisor dash get count", JSON.stringify(data));
      // console.log("count result", this.dataService.getpacount);
    });
  }

  getTeamLeave(){
    let getLeave = {
      "org_id":"1001",
      "user_id":"1006"
    }
    this.supgetLeaveRes = this.http.post(this.leavemngtUrl+'/lsupp/teamleaves',JSON.stringify(getLeave),
    this.dataService.jsonauthToken);
    // this.supgetLeaveRes.subscribe(data=>{
    //   this.supgetLeaveResData=data;
    //   console.log("supervisor dash get Leave history", this.supgetLeaveResData.length,JSON.stringify(this.supgetLeaveResData));
    //   this.filterDates();
    // });
    this.supgetLeaveRes.subscribe((response: any) => {
      
      this.supgetLeaveResData = response.data;
      // console.log("supervisor dash get Leave history", this.supgetLeaveResData.length, JSON.stringify(this.supgetLeaveResData));
      this.filterDates();
    });

  }
  getTeamPlan(){
    let getPL = {
      "org_id":"1001",
      "user_id":"1006"
      
  }
  this.supgetPLeaveRes = this.http.post(this.leavemngtUrl+'/lsupp/teamplan',JSON.stringify(getPL),
  this.dataService.jsonauthToken);
  // this.supgetPLeaveRes.subscribe(data=>{
  //   this.supgetPLeaveResData=data;
  //   console.log("supervisor dash get plan history",JSON.stringify(this.supgetPLeaveResData));
  //   this.filterDates();
  // });
  this.supgetPLeaveRes.subscribe((response: any) => {
   
    this.supgetPLeaveResData = response.data;
    // console.log("supervisor dash get plan history", this.supgetPLeaveResData.length, JSON.stringify(this.supgetPLeaveResData));
    this.filterDates();
  });

  }
  filterDates() {
    const currentDate = new Date();
    
    // Check if supgetLeaveResData is defined and not empty before filtering
    if (this.supgetLeaveResData && this.supgetLeaveResData.length > 0) {
      this.filteredTeamLeaveData = this.supgetLeaveResData.filter(item => {
        const fromDate = new Date(item.fromdt);
        return fromDate >= currentDate || fromDate.toDateString() === currentDate.toDateString();
      });
    } else {
      this.filteredTeamLeaveData = [];
    }
  
    // Check if supgetPLeaveResData is defined and not empty before filtering
    if (this.supgetPLeaveResData && this.supgetPLeaveResData.length > 0) {
      this.filteredTeamPlanData = this.supgetPLeaveResData.filter(item => {
        const fromDate = new Date(item.fromdt);
        return fromDate > currentDate;
      });
    } else {
      this.filteredTeamPlanData = [];
    }
  }

  toggleShowTeamLeaveDates() {
    this.showAllTeamLeaveDates = !this.showAllTeamLeaveDates;
  }

  toggleShowTeamPlanDates() {
    this.showAllTeamPlanDates = !this.showAllTeamPlanDates;
  }
  
  // ionViewDidEnter(){
  //   this.toggleLang;
  // }
  // toggleLang(togEvent){
  //   console.log("value"+ togEvent.target.checked);
  //   if(togEvent.target.checked){
  //     this.router.navigate(['/emp-dashboard']);
  //   }
  //   else{
     
  //   }
    

  // }
  // showAllLeaveHistory: boolean = false;
  // toggleLeaveHistory() {
  //   this.showAllLeaveHistory = !this.showAllLeaveHistory;
  // }
  // showAllLeaveHistory1: boolean = false;
  // toggleLeaveHistory1() {
  //   this.showAllLeaveHistory1 = !this.showAllLeaveHistory1;
  // }

  getLeave(leaveId: number, orgId: number, userId: number) {
    console.log("pass data", leaveId);
    console.log("pass data", userId);
    console.log("pass data", orgId);
  
    this.router.navigate(['/approve', leaveId, userId, orgId]);
  }
 

}
