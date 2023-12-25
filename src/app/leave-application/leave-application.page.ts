import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, ModalController, ToastController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { RestService } from '../rest.service';
import { DataService } from '../services/data.service';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-leave-application',
  templateUrl: './leave-application.page.html',
  styleUrls: ['./leave-application.page.scss'],
})
export class LeaveApplicationPage implements OnInit {

  getcount:any;
  public userId:any;
  public orgId:any;
  public resConfig:any=[];

  private penData: Observable<any>;
  public penRes:any=[];

  private approveData: Observable<any>;
  public approveRes:any=[];

  private rejectData: Observable<any>;
  public rejectRes:any=[];

  leavemngtUrl:any;
  imageSrc: SafeUrl;
  supervisorStatus:boolean;

  constructor(private router: Router,public toastController: ToastController,private modalctrl:ModalController, private rs:RestService, 
    private http:HttpClient,public dataService:DataService,private alertController: AlertController,private sanitizer: DomSanitizer) {
      this.leavemngtUrl = this.dataService.base_path;
      this.supervisorStatus = this.dataService.isSupervisor;
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
    this.getcount = this.dataService.getpacount;
    this.resConfig = this.dataService.confData;
    this.userId    = this.dataService.Uid;
    this.orgId    = this.dataService.Oid;
    this.loadImage();

      let penAppData =
       {
        "org_id":"1001",
        "user_id":"1006"
        }


      this.penData = this.http.post(this.leavemngtUrl+'/lsupp/pfaleaves',JSON.stringify(penAppData),this.dataService.jsonauthToken);
      this.penData.subscribe(res=>{
        this.penRes=res;
        console.log("pending approver Response Data"+ JSON.stringify(this.penRes));
        
      });

  }
  updateCount() {
    if (this.dataService.getpacount > 0) {
      // this.getcount -= 1;
      this.dataService.getpacount -= 1; // Update the count in the data service
    }
  }
  
  approve(leaveId:number,userId:number,orgId:number){
    console.log("approve",leaveId);
    let approvedata=
    {
      "leaveId":leaveId,
      "orgId":orgId,
      "app_comments":"Approved",
      "userId":userId
      }
      this.approveData = this.http.post(this.leavemngtUrl+'/lsupp/approve',JSON.stringify(approvedata),this.dataService.jsonauthToken);
      this.approveData.subscribe(res=>{
        this.approveRes=res;
        // console.log("approver Response Data"+ JSON.stringify(this.approveRes));
        const appStatus = this.approveRes["status"]
        if(appStatus ==='Success'){
          const toastc = this.toastController.create({
            message: this.approveRes['message'], // Use the response directly without parsing as JSON
            position: 'middle',
            buttons: [
              {
                text: 'OK',
                role: 'ok',
                handler: () => {
                  // Handle button click if needed
                  this.router.navigate(['/sup-dashboard'])
                  console.log('OK clicked');
                }
              }
            ]
          }).then(toast => {
            toast.present();
          });
        }
        
        // Update the 'deleted' property of the item to true
        const deletedItem = this.penRes.data.find((item: any) => item.leaveId === leaveId);
       if (deletedItem) {
       deletedItem.deleted = true;
       }
        // Call updateCount() method
       this.updateCount();
        
      },
      (error: any) => {
        console.log("Error:", error);
        // Handle error case if needed
      });

  }

  reject(leaveId:number,userId:number,orgId:number,ltype:any,ldays:any){
    console.log("reject",leaveId);
    this.alertController.create({
      header: 'Reject Leave Request',
      inputs: [
        {
          name: 'comment',
          type: 'text',
          placeholder: 'Enter your comment',
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
        },
        {
          text: 'Reject',
          handler: async (data) => {
            const rejectLeave = {
              "leaveId": leaveId,
              "orgId": orgId,
              "app_comments": data.comment,
              "userId": userId,
              "leave_type":ltype,
              "leave_taken":ldays
            };
            try {
              const res = await this.http.post(this.leavemngtUrl+'/lsupp/reject', JSON.stringify(rejectLeave), this.dataService.jsonauthToken).toPromise();
              this.rejectRes = res;
              // console.log("Reject Response Data" + JSON.stringify(this.rejectRes));
              const rejStatus=this.rejectRes["status"];
              if(rejStatus ==='Success'){
                const toast = await this.toastController.create({
                  message: this.rejectRes['message'], // Use the response directly without parsing as JSON
                  position: 'middle',
                  buttons: [
                    {
                      text: 'OK',
                      role: 'ok',
                      handler: () => {
                        // Handle button click if needed
                        this.router.navigate(['/sup-dashboard'])
                        console.log('OK clicked');
                      }
                    }
                  ]
                });
                toast.present();

              }
              
                       // Update the 'deleted' property of the item to true
        const deletedItem = this.penRes.data.find((item: any) => item.leaveId === leaveId);
        if (deletedItem) {
         deletedItem.deleted = true;
         }

    // Call updateCount() method
    this.updateCount();
            } catch (error) {
              console.log("reject Error" + error);
              // Handle the error appropriately
            }
          }
        }
      ]
    }).then(alert => {
      alert.present();
    });

  }

  getLeave(leaveId: number, orgId: number, userId: number) {
    console.log("pass data", leaveId);
    console.log("pass data", userId);
    console.log("pass data", orgId);
  
    this.router.navigate(['/approve', leaveId, userId, orgId]);
  }
}
