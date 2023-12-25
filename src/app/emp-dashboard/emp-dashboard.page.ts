import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ToastController } from '@ionic/angular';
import { map } from 'rxjs/operators';

import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import SwiperCore, { Autoplay, Keyboard, Pagination, Scrollbar, Zoom } from 'swiper';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { HomePage } from '../home/home.page';
import { RestService } from '../rest.service';
import { DataService } from '../services/data.service';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

SwiperCore.use([Autoplay, Keyboard, Pagination, Scrollbar, Zoom]);

@Component({
  selector: 'app-emp-dashboard',
  templateUrl: './emp-dashboard.page.html',
  styleUrls: ['./emp-dashboard.page.scss'],
  encapsulation: ViewEncapsulation.None
})
export class EmpDashboardPage implements OnInit {


  imageSrc: SafeUrl;

  cancelresplan:any;
  cancelresDataplan:any=[];
  
  
  supervisorStatus:boolean;
  public userId: any;
  public orgId: any;
  public percentCal: number;
  public title: string;
  public lb:number;
  public ltot:number;
  
  
  private getUpcoming: Observable<any>;
  public getUpcoomingData: any = [];
  
  public resConfig: any = [];
  private lblncRes: Observable<any>;
  public lblncResData: any[];
  private blncResData: any[];
  leavemngtUrl: any;
  public present: any[];
  subtitle = "SL";
  companyName:any;

  constructor(private router: Router, private modalctrl: ModalController, private rs: RestService,
    private http: HttpClient, public dataService: DataService,private toastController: ToastController,private sanitizer: DomSanitizer
    ) {
      this.userId = this.dataService.Uid;
    this.leavemngtUrl = this.dataService.base_path;
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

  ngOnInit(): void {
    this.updateLeaveBalance();
    this.loadImage();
    this.companyName=this.dataService.companyName;
    this.resConfig = this.dataService.confData;
    this.userId = this.dataService.Uid;
    this.orgId = this.dataService.Oid;

   
    this.getUpcoming = this.http.post(this.leavemngtUrl+'/common/upc_leaves?locid=ALL&user_id=1003','',this.dataService.jsonauthToken);
    this.getUpcoming.subscribe(res=>{
      this.getUpcoomingData = res['formattedUpcomingLeave'];
      console.log("upcoming leave",this.getUpcoomingData);
      
    },
    (error) => {
      console.error("Error retrieving upcoming leave", error);
    }
    );
     // Subscribe to the leaveBalanceUpdated event
    //  this.dataService.leaveBalanceUpdated.subscribe(() => {
    //   this.updateLeaveBalance();
    // });


    // let leaveblnc = {
    //   "userId": this.userId
    // }
    // this.lblncRes = this.http.post(this.leavemngtUrl + '/leave/getlbal',
    //   leaveblnc, this.dataService.jsonauthToken);
    // this.lblncRes.subscribe(res => {
    //   this.lblncResData = res.data;
    //   console.log("leave blance", this.lblncResData);
    //   for (let i = 0; i < this.lblncResData.length; i++) {
    //     this.title = this.lblncResData[i]['ltype'];
    //     let lb: number = this.lblncResData[i]['lbal'];
    //     let ltot: number = this.lblncResData[i]['ltotal'];
    //     this.percentCal = ((lb / ltot) * 100);
        
    //   }

    // });
    

  }
 
  isReadMore = true
  showText() {
    this.isReadMore = !this.isReadMore
  }
  
 


  optionsA = {
    // percent: 35,
    maxPercent: 100,
    radius: 40,
    showUnits: false,
    showTitle: true,
    // title:"SL",
    titleFontSize: 12,
    titleFontWeight: 600,
    subtitleFontSize: 14,
    showInnerStroke: true,
    outerStrokeWidth: 7,
    innerStrokeWidth: 5,
    innerStrokeColor: '#409FFF',
    backgroundPadding: -10,
    backgroundStrokeWidth: 0,
    outerStrokeColor: '#007FFF',
    backgroundColor: '#ffffff',
    backgroundGradientStopColor: '#c0c0c0',
    backgroundGradient: false,
    subtitleColor: '#444444',
    startFromZero: false,
    
  }
  updateLeaveBalance() {
    let leaveblnc = {
      "userId": this.userId
    }
    console.log("payload data",leaveblnc);
    
    this.lblncRes = this.http.post(this.leavemngtUrl + '/leave/getlbal',
      leaveblnc, this.dataService.jsonauthToken);
    this.lblncRes.subscribe(res => {
      console.log("Initial response", res);
      this.lblncResData = res['leaveBalance'] 
      // as Array<{
      //   leaveType: string,
      //   leavesTaken: number,
      //   totalLeaves: number,
      //   leaveBalance: number,
      // }>;
      console.log("leave blance data", this.lblncResData);
      // for (let i = 0; i < this.lblncResData.length; i++) {
      //   console.log("Individual entry", this.lblncResData[i]);

      //   this.title = this.lblncResData[i]['leaveType'];
      //   this.lb = +this.lblncResData[i]['leaveBalance'];
      //   this.ltot= +this.lblncResData[i]['totalLeaves'];
      //   this.percentCal = ((this.lb / this.ltot) * 100);
        
      // }

    });
  }
 

 
  
}

