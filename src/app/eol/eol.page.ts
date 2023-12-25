import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, ToastController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { DataService } from '../services/data.service';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-eol',
  templateUrl: './eol.page.html',
  styleUrls: ['./eol.page.scss'],
})
export class EOLPage implements OnInit {
  private pencountData: Observable<any>;
  public pencountRes:any=[];
  private logresData: Observable<any>;
  public resConfig:any=[];
  leavemngtUrl:any;
  public leave_type:any;
  private searchRes:any=[];
  public searchResult:any=[]
  showDetails:boolean=true


  getcount:any;
  userId:any;
  orgId:any;
  start_date:any;
  imageSrc: SafeUrl;
  supervisorStatus:boolean;
  historyCount:any;
  constructor(public toastController: ToastController, public router:Router,
    public dataService:DataService,private http:HttpClient,private alertController: AlertController
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
    }
  
  ionViweDidEnter(){
    
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
    } else  {
      
    }
  }






  searchData(){
    if (!this.start_date ) {
      const toast = this.toastController.create({
        message: 'Please fill in all the required fields.',
        duration: 2000,
        position: 'middle'
      }).then(toast => {
        toast.present();
      });
      return;
    }
    let penAppData =
    {

           
            "org_id":this.orgId,
            "user_id":this.userId,
            "fromDate" : this.start_date
      
      }
      

      this.pencountData = this.http.post(this.leavemngtUrl+'/lsupp/teamleaves',JSON.stringify(penAppData),this.dataService.jsonauthToken);
      this.pencountData.subscribe(res=>{
        this.pencountRes=res.data;
        // this.leavemngtUrl.confData = data;
        this.historyCount = this.pencountRes.length;
        console.log("pending count Response Data"+ JSON.stringify(this.pencountRes));
        
      });
   


  }
 
  getLeave(leaveId: number, orgId: number, userId: number) {
    console.log("pass data", leaveId);
    console.log("pass data", userId);
    console.log("pass data", orgId);
    this.router.navigate(['/approve', leaveId, userId, orgId]);
  }

  

}
