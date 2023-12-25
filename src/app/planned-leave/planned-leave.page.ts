import { WeekDay } from '@angular/common';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController, ToastController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { DataService } from '../services/data.service';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';


@Component({
  selector: 'app-planned-leave',
  templateUrl: './planned-leave.page.html',
  styleUrls: ['./planned-leave.page.scss'],
})
export class PlannedLeavePage implements OnInit {
  public userId:any;
  public orgId:any;
  imageSrc: SafeUrl;
  leavetype:any=[];
  private logresData: Observable<any>;
  public resConfig:any=[];
  leavemngtUrl:any;
  private planleaveRes: Observable<any>;
  private planleaveResData:any[];
  pln_name:string;
  pln_id:string;
  leave_type:string;
  start_date:any;
  end_date:any;
  approve_cmds:any;
  reason:any;
  day:any
  Total_day:any
  public Emp_data:any=[]
  //  leave_Date:any;
  public showDetails: boolean = false;

  public PlannedData:any

  constructor(private toastController: ToastController, public router:Router,private _Activatedroute: ActivatedRoute,
    public dataService:DataService,private http:HttpClient,private alertController: AlertController,private sanitizer: DomSanitizer) { 
      this.leavemngtUrl= this.dataService.base_path;
    }
    loadImage() {
      this.dataService.getImage('logo', '1001').subscribe(
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
    this.resConfig = this.dataService.confData;
    this.userId = this.dataService.Uid;
      this.orgId=this.dataService.Oid;
      this.loadImage();
      this.dataService.getLeaveType().subscribe(data => {
        // console.log("initial data",data);
        this.leavetype = data['configValues'];
        // console.log("leave type config values",this.leave_type);
        
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
  calDifDate(){
    let d1 = new Date(this.start_date);
    let d2 = new Date(this.end_date);
    let diff=this.calDifDate1(d1,d2);
    console.log("difference date between d1 and d2",diff);
    
    
  }  
  PlanedDate() {
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
    let diff = this.calDifDate1(d1, d2);
    console.log("difference date between d1 and d2", diff);
  
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
  
    let Plannedleave = {
      "userId": this.userId,
      "orgId": this.orgId,
      "fromdt": this.start_date,
      "todt": this.end_date,
      "ltype": this.leave_type,
      "hours": "24",
      "reason": this.reason,
      "app_comments": "",
      "day": diff,
      // "classif":"PLAN"
    }
  
    this.planleaveRes = this.http.post(this.leavemngtUrl + '/leave/saveplan', JSON.stringify(Plannedleave), this.dataService.jsonauthToken);
    this.planleaveRes.subscribe(
      data => {
        this.planleaveResData = data;
        console.log("save record of planned leave", this.planleaveResData);
  
        // Clear input fields after saving the record
        this.start_date = '';
        this.end_date = '';
        this.leave_type = '';
        this.reason = '';
  
        let sucMsg = this.planleaveResData['status'];
  
        const toastc = this.toastController.create({
          message: this.planleaveResData['msg'],
          position: 'middle',
          buttons: [
            {
              text: 'OK',
              role: 'ok',
              handler: () => {
                // Handle button click if needed
                if (sucMsg === 'Success' || sucMsg === 'Failed') {
                  this.router.navigate(['/emp-dashboard']);
                  console.log('OK clicked');
                }
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
        const errorMsg = error.error && error.error.msg ? error.error.msg : 'An error occurred.';
        const toastc = this.toastController.create({
          message: errorMsg,
          position: 'middle',
          buttons: [
            {
              text: 'OK',
              role: 'ok',
              handler: () => {
                // Handle button click if needed
              }
            }
          ]
        }).then(toast => {
          toast.present();
        });
      }
    );
  }
  
  header = {
    headers: new HttpHeaders(
      {'Content-type':'application/json'}
    )      
  }
  


}

