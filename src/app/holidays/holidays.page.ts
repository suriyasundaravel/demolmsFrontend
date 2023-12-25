import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { DataService } from '../services/data.service';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-holidays',
  templateUrl: './holidays.page.html',
  styleUrls: ['./holidays.page.scss'],
})
export class HolidaysPage implements OnInit {
  imageSrc: SafeUrl;
  private logresData: Observable<any>;
  public resConfig:any=[];
  leavemngtUrl:any;
  private holidays:Observable<any>;
  public holidaysData:any[];
  supervisorStatus:boolean;

  constructor(public toastController: ToastController, public router:Router,
    public dataService:DataService,private http:HttpClient,private sanitizer: DomSanitizer) {
      this.leavemngtUrl= this.dataService.base_path;
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
    this.loadImage();
    this.resConfig = this.dataService.confData;
    // this.logresData = this.http.get(this.leavemngtUrl+"/lres/lresources?orgcode=mag001&lang");
    //   this.logresData.subscribe(data=>{
    //     this.resConfig=data;
    //     // this.leavemngtUrl.confData = data;
    //     // console.log("Login Response Data"+ JSON.stringify(this.resConfig));
        
    //   });
      
    this.http.post(this.leavemngtUrl + '/common/leave_calendar?year=2023&locid=TRY','', this.dataService.jsonauthToken)
    .subscribe(
      (res) => {
        // Handle successful response
        // console.log("response holiday", res);
  
        this.holidaysData = res['data'];
        console.log("the holiday list", this.holidaysData);
      },
      (error) => {
        // Handle error
        console.error("Error fetching holidays:", error);
      }
    );
  }

}
