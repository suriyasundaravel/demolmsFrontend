import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { DataService } from './services/data.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  leavemngtUrl:any;
  supervisorStatus:boolean;

  constructor(public menuCntl:MenuController,public router:Router,
    public dataService:DataService,private http:HttpClient) {
      this.leavemngtUrl = this.dataService.base_path;
      this.supervisorStatus = this.dataService.isSupervisor;
     

    }
  closeMenu(){
    this.menuCntl.close();
    
  
  }
  // Method to check if the user is a supervisor
  public isSupervisor(): boolean {
    return this.dataService.isSupervisor;
  }
}
