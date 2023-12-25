import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { DataService } from '../services/data.service';
import { ToastController } from '@ionic/angular';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-plan-details',
  templateUrl: './plan-details.page.html',
  styleUrls: ['./plan-details.page.scss'],
})
export class PlanDetailsPage implements OnInit {
  isCancelEnabled: boolean = false;
  imageSrc: SafeUrl;

  supervisorStatus:boolean;
  leavemngtUrl: any;

  public userId: any;
  public orgId: any;
  public resConfig: any = [];


  leaveId: number;
  leaveDetails: any;

  cancelresplan:Observable<any>;
  cancelresDataplan:any=[];
  plantores:Observable<any>;
  plantoresData:any=[];

  getindividualdata:Observable<any>;
  getindividualdataRes:any=[];

  constructor(private activatedRoute: ActivatedRoute,private router: Router,
    private http: HttpClient, public dataService: DataService,private toastController: ToastController,private sanitizer: DomSanitizer) {
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
  //  loadImage() {
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
    this.resConfig = this.dataService.confData;
    this.userId = this.dataService.Uid;
    this.orgId = this.dataService.Oid;
    this.loadImage();
    this.activatedRoute.paramMap.subscribe(param=>{
      this.leaveId = +param.get('leaveId')
       // Call a function to fetch leave details using the leaveId
       this.getLeaveDetails();
    })
  }


  getLeaveDetails() {
    let leaveid = {
      "planId": this.leaveId,
      "orgId": this.orgId,
      "userId": this.userId
    };
  
    this.getindividualdata=this.http.post(this.leavemngtUrl + '/leave/getpinfo', leaveid, this.dataService.jsonauthToken);
      this.getindividualdata.subscribe(
        (res: any) => {
          this.getindividualdataRes = res.data;
          console.log("individual leave", this.getindividualdataRes);
           // Compare "from" date with current date
         const leaveFromdt = new Date(this.getindividualdataRes[0].fromdt);
         const currentDate = new Date();

         this.isCancelEnabled = leaveFromdt > currentDate;
        },
        (error) => {
          console.error("Error retrieving individual leave", error);
        }
      );
  }

  cancelLeavePlan() {
    
    let cancelId = {
      "leaveId": this.leaveId
    };
  
    this.cancelresplan =this.http.post(this.leavemngtUrl + '/leave/plan_cancel', cancelId, {
      ...this.dataService.jsonauthToken,
      responseType: 'text' // Specify the response type as text
    });
  
    this.cancelresplan.subscribe(
      (res: any) => {
        this.cancelresDataplan = res;
        console.log("cancel response", this.cancelresDataplan);
  
        const toastc = this.toastController.create({
          message: this.cancelresDataplan, // Use the response directly without parsing as JSON
          position: 'middle',
          buttons:[
            {
              text:'Ok',
              role:'Cancel',
              handler:()=>{
                this.router.navigate(['/emp-dashboard']);
              }
            }
          ]
        }).then(toast => {
          toast.present();
        });
      },
      (error: any) => {
        console.log("Error:", error);
        // Handle error case if needed
      }
    );
  }

  planToleave(){
    let cancelId = {
      "leaveId": this.leaveId
    };
  
    this.plantores =this.http.post(this.leavemngtUrl + '/leave/convert_leave', cancelId,this.dataService.jsonauthToken);
  
    this.plantores.subscribe(
      (res) => {
        this.plantoresData = res;
        console.log("response", this.cancelresDataplan);
        const plantoleaveResponse = this.plantoresData['msg'];
  
        const toastc =this.toastController.create({
          message: plantoleaveResponse, // Use the response directly without parsing as JSON
          position: 'middle',
          buttons:[
            {
              text:'Ok',
              role:'Cancel',
              handler:()=>{
                 // Emit the leaveBalanceUpdated event
              this.dataService.leaveBalanceUpdated.emit();
                this.router.navigate(['/emp-dashboard']);
              }
            }
          ]
        }).then(toast => {
          toast.present();
        });
      },
      (error: any) => {
        console.log("Error:", error);
        // Handle error case if needed
      }
    );

  }

}
