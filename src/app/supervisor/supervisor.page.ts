import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { AlertController, ModalController, ToastController } from '@ionic/angular';
// import { ListModalComponent } from '../list-modal/list-modal.component';
import { ListPage } from '../list/list.page';
import { SearchPage } from '../search/search.page';
import { DataService } from '../services/data.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-supervisor',
  templateUrl: './supervisor.page.html',
  styleUrls: ['./supervisor.page.scss'],
})
export class SupervisorPage implements OnInit {
  start_date:any;
  end_date:any;
  leave_type:any;
  leave_reason:any;

  public userId:any;
  public orgId:any;

  public applyuserId:any;

  getcount:any;

  public resConfig:any=[];
  leavemngtUrl:any;

  private applyleaveRes: Observable<any>;
  private applyleaveResData:any[];
  leavetype:any=[];
  imageSrc: SafeUrl;
  supervisorStatus:boolean;

  constructor(private activatedRoute:ActivatedRoute ,public router:Router,public dataService:DataService,
    private http:HttpClient,private toastController: ToastController,private alertController: AlertController
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
   
  ngOnInit(){
    this.resConfig = this.dataService.confData;
    this.userId = this.dataService.Uid;
      this.orgId=this.dataService.Oid;
      this.getcount = this.dataService.getpacount;
      console.log("get count pa",this.getcount);
      this.loadImage();
      this.dataService.getLeaveType().subscribe(data => {
        console.log("initial data",data);
        
        this.leavetype = data['configValues'];
        console.log("leave type config values",this.leave_type);
        
      });
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
  
    calDifDate1(start,end){
      let count=0;
      let currentDate=+start;
      let endDate=+end;
      while(currentDate <= endDate){
        const dayofWeek =new Date(currentDate).getDay();
        const isWeekEnd = (dayofWeek === 6) || (dayofWeek === 0);
        if(!isWeekEnd){
          count++;
        }
        currentDate = currentDate + 24 * 60 * 60 * 1000
      }
      return count;
      
    }
  
    saveRecord(){
      if (!this.start_date || !this.end_date || !this.leave_type) {
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
        const toast = this.toastController.create({
          message: 'End date must be greater than or equal to the start date.',
          duration: 2000,
          position: 'middle'
        }).then(toast => {
          toast.present();
        });
        return;
      }
     
      let diff=this.calDifDate1(d1,d2);
      console.log("difference date between d1 and d2",diff);
      let applyLeave=
      {
       
        "userId":this.userId,
        "fromdt":this.start_date,
        "todt":this.end_date,
        "ltype":this.leave_type,
        "hours":"0",
        "reason":this.leave_reason,  
        "app_comments":"",
        "days":diff,
        "classif":"LEAVE",
      }
      
     this.applyleaveRes = this.http.post(this.leavemngtUrl+'/leave/saveleave',JSON.stringify(applyLeave),
     this.dataService.jsonauthToken);
     this.applyleaveRes.subscribe(data=>{
      this.applyleaveResData=data;
      console.log("save record of apply leave", this.applyleaveResData);
      // Clear input fields after saving the record
     this.start_date = '';
     this.end_date = '';
     this.leave_type = '';
     this.leave_reason = '';
      const toastc = this.toastController.create({
        message: this.applyleaveResData['message'], // Use the response directly without parsing as JSON
        position: 'middle',
        buttons: [
          {
            text: 'OK',
            role: 'ok',
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
      // Handle error case if needed
    }
    );
    }
  

 
}
