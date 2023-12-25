import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ToastController } from '@ionic/angular';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  //image logo display
  imageSrc: SafeUrl;
  //updateprofile 
  updData:Observable<any>;
  updRes:any=[];

  profileInfo: any=[];
  leavemngtUrl:any;

  //field
  Emp_name:any;
  Emp_phno:any;
  Emp_Aphno:any;
  Emp_eId:any;
  supervisorStatus:any;
  userId:any;
  orgId:any;
  constructor(public router:Router,public dataService:DataService,private http:HttpClient,private toastController: ToastController
    ,private sanitizer: DomSanitizer) {
    this.leavemngtUrl = this.dataService.base_path;
    this.supervisorStatus = this.dataService.isSupervisor;
    this.userId=this.dataService.Uid;
    this.orgId=this.dataService.Oid;
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
    this.loadImage();
    this.profileInfo = this.dataService.profileData;
    // console.log("profile info",this.profileInfo);
    
    // Accessing properties
  this.Emp_name = this.profileInfo[0]['DIS_NAME'];
  this.Emp_phno = this.profileInfo[0]['PHONE_PRI'];
  this.Emp_Aphno = this.profileInfo[0]['PHONE_ALT'];
  this.Emp_eId = this.profileInfo[0]['EMAIL_PRI'];

  // console.log("Name:", this.Emp_name);
  // console.log("Phone:", this.Emp_phno);
  // console.log("Alternate Phone:", this.Emp_Aphno);
  // console.log("Email:", this.Emp_eId);
  }
  ionViewDidEnter() {
    // This method is called when the page is entered or reloaded

    // Reload the profileInfo object
    this.profileInfo = this.dataService.profileData;

    // Set the input values from the profileInfo object
    this.Emp_name = this.profileInfo[0]['DIS_NAME'];
  this.Emp_phno = this.profileInfo[0]['PHONE_PRI'];
  this.Emp_Aphno = this.profileInfo[0]['PHONE_ALT'];
  this.Emp_eId = this.profileInfo[0]['EMAIL_PRI'];
  }

  updateProfile(){
    const isModified = this.Emp_name !==this.profileInfo[0]['DIS_NAME']|| this.Emp_phno !== this.profileInfo[0]['PHONE_PRI']|| this.Emp_Aphno !== this.profileInfo[0]['PHONE_ALT']
                            || this.Emp_eId !== this.profileInfo[0]['EMAIL_PRI'];
    
    if(isModified){
      this.profileInfo[0]['DIS_NAME']=this.Emp_name
      this.profileInfo[0]['PHONE_PRI']=this.Emp_phno
      this.profileInfo[0]['PHONE_ALT']=this.Emp_Aphno
      this.profileInfo[0]['EMAIL_PRI']=this.Emp_eId
      let profiledata =
      {
        "user_id":this.userId,
        "org_id":this.orgId,    
        "name" :this.Emp_name, 
        "phone": this.Emp_phno,
        "alt_phone" : this.Emp_Aphno,
        "email_id" : this.Emp_eId
        }
    
    this.updData = this.http.post(this.leavemngtUrl+'/common/updUser',JSON.stringify(profiledata),this.dataService.jsonauthToken);
    this.updData.subscribe(data=>{
      this.updRes = data;
      const toast = this.toastController.create({
        message: this.updRes['msg'],
        duration: 2000,
        position: 'middle',
        buttons: [
          {
            text: 'OK',
            role: 'ok',
            handler: () => {
              // Handle button click if needed
              this.router.navigate(['/emp-dashboard'])
              console.log('OK clicked');
            }
          }
        ]
      }).then(toast=>{
        toast.present();
      });

    });

    }
    else{
      let profiledata =
      {
        "user_id":this.userId,
        "org_id":this.orgId,    
        "name" :this.Emp_name, 
        "phone": this.Emp_phno,
        "alt_phone" : this.Emp_Aphno,
        "email_id" : this.Emp_eId
        }
    
    this.updData = this.http.post(this.leavemngtUrl+'/common/updUser',JSON.stringify(profiledata),this.dataService.jsonauthToken);
    this.updData.subscribe(data=>{
      this.updRes = data;
      const toast = this.toastController.create({
        message: this.updRes['msg'],
        position: 'middle',
        buttons: [
          {
            text: 'OK',
            role: 'ok',
            handler: () => {
              // Handle button click if needed
              this.router.navigate(['/emp-dashboard'])
              console.log('OK clicked');
            }
          }
        ]
      }).then(toast=>{
        toast.present();
      });

    });
     
    }
  

  }


}
