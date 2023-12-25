import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../services/data.service';
import { ToastController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-leave-details',
  templateUrl: './leave-details.page.html',
  styleUrls: ['./leave-details.page.scss'],
})
export class LeaveDetailsPage implements OnInit {
  isCancelEnabled: boolean = false;

  supervisorStatus:boolean;
  leavemngtUrl: any;
  imageSrc: SafeUrl;

  public userId: any;
  public orgId: any;
  public resConfig: any = [];

  leaveId: number;
  leaveDetails: any;

  cancelres:any;
  cancelresData:any=[];

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
    this.activatedRoute.paramMap.subscribe(params => {
      this.leaveId = +params.get('leaveId');
      // Call a function to fetch leave details using the leaveId
      this.getLeaveDetails();
    });
    
  }

  getLeaveDetails() {
    let leaveid = {
      "leaveId": this.leaveId,
      "orgId": this.orgId,
      "userId": this.userId
    };
  
    this.getindividualdata=this.http.post(this.leavemngtUrl + '/leave/getlinfo', leaveid, this.dataService.jsonauthToken);
      this.getindividualdata.subscribe(
        (res: any) => {
          this.getindividualdataRes = res.data;
          console.log("individual leave", this.getindividualdataRes);
          // Compare "from" date with current date
         const leaveFromdt = new Date(this.getindividualdataRes[0].fromdt);
         const currentDate = new Date();
         let currentStatus = this.getindividualdataRes[0].status;

         this.isCancelEnabled = leaveFromdt > currentDate;
         if ("REJ"==currentStatus || "R"==currentStatus) {
          this.isCancelEnabled = false;
         }
        },
        (error) => {
          console.error("Error retrieving individual leave", error);
        }
      );
  }

  async cancelLeave() {
    
    let cancelId = {
      "leaveId": this.leaveId
    };
    console.log("leave id", this.leaveId);
  
    this.cancelres =await this.http.post(this.leavemngtUrl + '/leave/leave_cancel', cancelId, {
      ...this.dataService.jsonauthToken,
      responseType: 'text' //  the response type is text
    });
  
    this.cancelres.subscribe(
      async (res: any) => {
        this.cancelresData = res;
        console.log("cancel response", this.cancelresData);
  
        const toastc = await this.toastController.create({
          message: this.cancelresData, // Use the response directly without parsing as JSON
          position: 'middle',
          buttons: [
            {
              text: 'OK',
              role: 'cancel',
              handler: () => {
                // Emit the leaveBalanceUpdated event
               this.dataService.leaveBalanceUpdated.emit();
                // Handle button click if needed
                this.router.navigate(['/emp-dashboard'])
                console.log('OK clicked');
              }
            }
          ]
        }).then(toast => {
          toast.present();
        });
      },
      (error: any) => {
        console.log("Error:", error);
      }
    );
  }
}
