import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { DataService } from '../services/data.service';
import { AlertController, ToastController } from '@ionic/angular';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { DatePipe } from '@angular/common';


@Component({
  selector: 'app-approve',
  templateUrl: './approve.page.html',
  styleUrls: ['./approve.page.scss'],
})
export class ApprovePage implements OnInit {
  isCancelEnabled: boolean = false;



  getindividualdata:Observable<any>;
  getindividualdataRes:any=[];

  private approveData: Observable<any>;
  public approveRes:any=[];

  private rejectData: Observable<any>;
  public rejectRes:any=[];

  private cancelData: Observable<any>;
  public cancelRes:any=[];


  getcount:any;

  leaveId:any;
  Oid:any;
  Uid:any;

 
  userId:any;
  orgId;
 
  public resConfig:any=[];
  approval_comment:string='';
  
  
 
  leavemngtUrl: any;
  supervisorStatus:any;
  imageSrc: SafeUrl;
  constructor(private activatedRoute: ActivatedRoute,public router:Router,public dataService:DataService,
    private http:HttpClient,private toastController: ToastController,private alertController: AlertController,private datePipe: DatePipe
    ,private sanitizer: DomSanitizer) {
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
    this.dataService.getpacount;
    this.resConfig = this.dataService.confData;
    this.userId    = this.dataService.Uid;
    this.orgId    = this.dataService.Oid;
    this.loadImage();
    
      this.activatedRoute.paramMap.subscribe(params => {
        this.leaveId = +params.get('leaveId');
        this.Uid = +params.get('userId');
        this.Oid = +params.get('orgId');
        this.getLeaveDetails();
       
        
      });
  }
  getLeaveDetails() {
    let leaveid = {
      "leaveId": this.leaveId,
      "orgId": this.Uid,
      "userId": this.Oid
    };
  
    this.getindividualdata=this.http.post(this.leavemngtUrl + '/leave/getlinfo', leaveid, this.dataService.jsonauthToken);
      this.getindividualdata.subscribe(
        (res: any) => {
          this.getindividualdataRes = res['data'];
          console.log("individual leave", this.getindividualdataRes);
         // Compare "from" date with current date
      const leaveFromdt = new Date(this.getindividualdataRes.fromdt);
      console.log("fronm date",leaveFromdt);
      
      const currentDate = new Date();


      this.isCancelEnabled = leaveFromdt > currentDate;
        },
        (error) => {
          console.error("Error retrieving individual leave", error);
        }
      );
  }
  approve(leaveId:number,userId:number,orgId:number,app_cmd:string){

  //  if (!this.approval_comment.trim()) {
  //   // Show a toast message if the approval comment is empty
  //   this.showToast('Please enter an approval comment.');
  
    app_cmd='Approved'
      let approvedata=
      {
        "leaveId":leaveId,
        "orgId":orgId,
        "app_comments":app_cmd,
        "userId":userId
        }
        this.approveData = this.http.post(this.leavemngtUrl+'/lsupp/approve',JSON.stringify(approvedata),this.dataService.jsonauthToken);
        this.approveData.subscribe(res=>{
          this.approveRes=res;
          console.log("approver Response Data"+ JSON.stringify(this.approveRes));
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
          
           // Call updateCount() method
       this.updateCount(leaveId,status);
        },
        (error: HttpErrorResponse) => {
          console.log("approve Error" + error);
          // Handle the error appropriately
        });
    

  }
  async showToast(message: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 2000,
      position: 'middle'
    });
    toast.present();
  }


  updateCount(leaveId: number, status: string) {
    if (status === 'NEW' && this.dataService.getpacount > 0 && leaveId === this.leaveId) {
      this.dataService.getpacount -= 1; // Update the count in the data service
    }
  }

  reject(leaveId:number,userId:number,orgId:number,ldays:number,ltype:string,app_cmd:string){
    console.log("reject",leaveId);
    app_cmd='Rejected'
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
              "app_comments": app_cmd,
              "userId": userId,
              "leave_type":ltype,
              "leave_taken":ldays
            };
            try {
              const res = await this.http.post(this.leavemngtUrl+'/lsupp/reject', JSON.stringify(rejectLeave), this.dataService.jsonauthToken).toPromise();
              this.rejectRes = res;
              console.log("Reject Response Data" + JSON.stringify(this.rejectRes));
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
        // const deletedItem = this.getindividualdataRes.data.find((item: any) => item.leaveId === leaveId);
        // if (deletedItem) {
        //  deletedItem.deleted = true;
        //  }

     // Call updateCount() method
     this.updateCount(leaveId,status);
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
   httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      // Add other headers if needed
    }),
  };
  cancel(leaveId:number,userId:number,orgId:number){
    console.log("cancel data",leaveId,userId,orgId);
    
   
    let cancelLeave=
    {
      "leaveId":leaveId,
      "orgId":orgId,
      "userId":userId
      
      }
      console.log('Cancel Request Payload', JSON.stringify(cancelLeave));
      this.cancelData = this.http.post<any>(`${this.leavemngtUrl}/lsupp/leave_cancel`,JSON.stringify(cancelLeave), this.dataService.jsonauthToken);
      this.cancelData.subscribe(
        (data) => {
          this.cancelRes = data;
          console.log('Cancel Response Data', JSON.stringify(this.cancelRes));
        }
      );
      //     this.cancelRes = data;
      //     console.log("cancel Response Data" + this.cancelRes);
      //     const canstatus=this.cancelRes['status']
      //     if(canstatus==='Success'){
      //       const toastc = this.toastController.create({
      //         message: this.cancelRes['message'], // Use the response directly without parsing as JSON
      //         duration: 2000,
      //         position: 'middle'
      //       }).then(toast => {
      //         toast.present();
      //       });
      //     }
          
      //   // },
      //   // (error: HttpErrorResponse) => {
      //   //   console.log("cancel Error" + error);
      //   //   // Handle the error appropriately
      //   }
      // );
    

  }

  dateFormat(dateString:string): string{
    const date = new Date(dateString);
    return this.datePipe.transform(date, 'yyyy-MM-dd')

  }
}
