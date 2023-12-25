import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { DataService } from '../services/data.service';
import { SearchPageModule } from './search.module';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {
  getcount:any;
  imageSrc: SafeUrl;

  name: any;
  private empNameData: Observable<any>;
  public empNameresData:any=[];

  item:any;
  leavemngtUrl:any;

  supervisorStatus:boolean;

  constructor( private router: Router,public leavemgmt:DataService, 
    private modalController: ModalController,public dataService:DataService,private http:HttpClient
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
    this.loadImage();
  }
 

  search(){
    let emp_Name ={
      "srchbyname":this.name
    }
    this.empNameData = this.http.post(this.leavemngtUrl+'/lsupp/srchbyteam',JSON.stringify(emp_Name),
    this.dataService.jsonauthToken);
    this.empNameData.subscribe(data=>{
      this.empNameresData=data;
      console.log("response emp search",this.empNameresData);
      
    });


  }

 
  goempleaveapply(userId: number, name: any) {
    console.log("user id ", userId);
    let id = userId;
    let ename = name;
    
    const sourcePage = this.router.url; // Get the current page URL
    console.log("source page out",sourcePage);
    
  
    if (sourcePage === '/report-page') {
      // Navigate to the report page with the corresponding user ID
      this.router.navigate(['/report-page', { userId: id, name: ename }]);
    } else {
      // Navigate to the employee leave apply page with the corresponding user ID
      this.router.navigate(['/empleaveapply', { userId: id, name: ename }]);
    }
  }
  
  

}


