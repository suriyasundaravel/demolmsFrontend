import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController, ToastController } from '@ionic/angular';
import { RestService } from '../rest.service';
import { HttpClient } from '@angular/common/http';
import { DataService } from '../services/data.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-leave-history',
  templateUrl: './leave-history.page.html',
  styleUrls: ['./leave-history.page.scss'],
})
export class LeaveHistoryPage implements OnInit {
  

  supervisorStatus:boolean;
  leavemngtUrl: any;
  imageSrc: SafeUrl;

  showAllDates: boolean = false;
  filteredData:any=[];
  private getHistoryRes: Observable<any>;
  public getHistoryResData: any = [];

  public userId: any;
  public orgId: any;
  public resConfig: any = [];
  historyCount:any;
  

  constructor(private router: Router, private modalctrl: ModalController, private rs: RestService,
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
    this.orgId = this.dataService.Oid;
    this.loadImage();
    this.getLeaveHistory();
  }
  getLeaveHistory() {
    const DashgetleaveHistory = {
      "userId": this.userId,
      "orgId": this.orgId
    };

    this.http.post(this.leavemngtUrl + '/leave/getlhistory', JSON.stringify(DashgetleaveHistory), this.dataService.jsonauthToken)
      .subscribe((response: any) => {
        this.getHistoryResData = response.data;
        this.historyCount = this.getHistoryResData.length;
        console.log("employee dash get leave history", JSON.stringify(this.getHistoryResData));
        this.filterDates();
      });
  }

  filterDates() {
    const currentDate = new Date();
    this.filteredData = this.getHistoryResData.filter(item => {
      const fromDate = new Date(item.fromdt);
    
      return fromDate >= currentDate || fromDate.toDateString() === currentDate.toDateString();
    });
  }

  toggleShowDates() {
    this.showAllDates = !this.showAllDates;
  }

 

  loadLeaveHis(leaveId: number[]) {
    const id = leaveId[0]; // Extract the leave ID from the array
  console.log("leave id", id);
  this.router.navigate(['/leave-details', id]);
  }

}

