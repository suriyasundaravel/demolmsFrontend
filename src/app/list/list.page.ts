import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController, ToastController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {
  private logresData: Observable<any>;
  public resConfig:any=[];
  leavemngtUrl:any;

  sup_name:string
  sup_id:any
  start_date:any
  end_date:any
  cmds:any
  leave_type1:any
  file1:any
  approve_cmds1:any
  emp_name:string
  emp_id:any;
  leave_type:any
  from_date:any
  to_date:any
  reson:any
  file:any
  doc_id:any
  doc_name:any
  doc_status:any
  upload_dt:any
  commants:any
  reviewed_by:any
  reviewed_dt:any
  public doct:any=[]
  approve_cmds:any
  public datas:any=[];
  public subData:any=[]
   namelist: any=[] ;
   Place:any=[];
   empId:any=[];
  public nameData:any;
public leaveData:any
public supervisorData:any=[]
public record:any
public records:any
read_date:any
read_by:any
status:any
searchData:any
day:any
modelData: number;
passNameTypePercent:any=[];
public showDetails: boolean = false;
public Details:boolean=false;
public searchlist:boolean=false;
public label:boolean=true;
public label1:boolean=false;
supervisor:any=[]
singleData:string
singleId:String
// public resConfig:any=[];
constructor(public dataService:DataService,private modalctrl:ModalController,
  private router:Router,private http:HttpClient,
  public toastController: ToastController) {
    this.leavemngtUrl= this.dataService.base_path;
  }
  header = {
    headers: new HttpHeaders(
      {'Content-type':'application/json'}
    )      
  }
ngOnInit(){
  this.logresData = this.http.get(this.leavemngtUrl+"/lres/lresources?orgcode=mag001&lang");
    this.logresData.subscribe(data=>{
      this.resConfig=data;
      // this.leavemngtUrl.confData = data;
      // console.log("Login Response Data"+ JSON.stringify(this.resConfig));
      
    });

 
this.datas
  }
    
    async openIonModal() {
      const modal = await this.modalctrl.create({
        component: ListPage,
        componentProps: {
       
        }
      });
      
      modal.onDidDismiss().then((modelData) => {
        this.passNameTypePercent = modelData.data;
        console.log("modal data"+JSON.stringify(this.passNameTypePercent));
        this.namelist = this.passNameTypePercent.search_info["name"];
        this.Place = this.passNameTypePercent.search_info["place"];
        this.empId = this.passNameTypePercent.search_info["emp_Id"];
        console.log("totl",this.namelist);
        if(this.namelist!=undefined){

          this.showDetails=true
        }
        if(this.namelist.length==1){
          this.singleData=this.Place;
          this.singleId=this.empId
          this.showDetails=false
          console.log("wedf",this.singleData);


        }
        else{
          this.singleData="";
          this.singleId="";
        }
        
      
      });
  
     
  
      return await modal.present();
    }
    async presentToast(msg:string) {
      const toast = await this.toastController.create({
        message: msg,
        //duration: 2000,
        position: 'middle',
        buttons : [
          {
            text: 'Close',
            role : 'cancel',
            handler : () => {
              console.log('Close clicked..');               
              // this.router.navigate(['/form']);
        
            }
          }
        ]
        //color: 'green'
      });
      toast.present();
    }
   
    async openIonModals() {
      // this.openIonModal();
      const modal = await this.modalctrl.create({
        component: ListPage,
        componentProps: {
          "name":this.namelist,            
        }
      });
      return await modal.present();
    }
public docts:any=[]
public Emp_data:any=[]
Total_day:any;
saveSupRecord(){
  this.Emp_data= {name:"Dinesh",id:45,leave_balance:{SL:5,CL:4,PL:10}}
  var date1=new Date(this.start_date);
  var date2=new Date(this.end_date)
  console.log("sdc",date2.getDate())
  var dayMilliseconds = 1000 * 3600 * 24;
 this.Total_day=date2.getDate()-date1.getDate();;
 var weekendDays = 0;
 while (date1 <= date2) {
   var remain = date1.getDay()
   if (remain == 0) {
     weekendDays++;
   }
 else if(remain ==6){
     weekendDays++;
   }
   date1 = new Date(+date1 + dayMilliseconds);
 }
 this.day=this.Total_day-weekendDays;
 console.log("Total day",this.Total_day,"Week days",weekendDays,"Remain days",this.day)
  if(this.leave_type1=="Sick"&&this.day>this.Emp_data.leave_balance["SL"]){
    
this.presentToast("Your  Total sick leave 5 Days Only");

  }
  else if(this.leave_type1=="Sick"&&this.day<=this.Emp_data.leave_balance["SL"]){
    let sick=this.Emp_data.leave_balance["SL"]
    var remaing=sick-this.day;
    console.log("remain"+remaing)
  }
 else if(this.leave_type1=="Causal"&&this.day>this.Emp_data.leave_balance["CL"]){
    this.presentToast("Your Total causal leave 4 Days Only");
    
        }
        else if(this.leave_type1=="Causal"&&this.day<=this.Emp_data.leave_balance["CL"]){
          let causal=this.Emp_data.leave_balance["CL"]
          var remaing=causal-this.day;
          console.log("remain"+remaing)
        }
      else if(this.leave_type1=="Paid"&&this.day>this.Emp_data.leave_balance["PL"]){
          this.presentToast("Your Total Paid leave 10 Days Only");
              }
              else if(this.leave_type1=="Paid"&&this.day<=this.Emp_data.leave_balance["PL"]){
                let paid=this.Emp_data.leave_balance["PL"]
                var remaing=paid-this.day;
                console.log("remain"+remaing)
              }
  this.docts={
    "doc_id":this.doc_id,
    "doc_name":this.doc_name,
    "doc_status":this.doc_status,
    "upload_dt":this.file1,
    "comments":this.cmds,
    "reviewed_by":this.reviewed_by,
    "reviewed_dt":this.reviewed_dt
  }

  this.supervisorData={
    "sup-name":this.sup_name,
    // "name":this.namelist,
    // "place":this.Place,
    "sup-id":this.sup_id,
    "leaveType":this.leave_type1,
    "start Date":this.start_date,
    "end Date":this.end_date,
    "cmds":this.cmds,
    "file":this.docts,
    "approver cmds":this.approve_cmds1,
    "days":this.day
  }
this.records=  JSON.stringify(this.supervisorData)
  //  console.log("data",);
   console.log("rec",this.records)
   this.subData.push(this.records);


} 
saveEmpRecord(){
  this.Details=true;
  this.Emp_data= {name:"Dinesh",id:45,leave_balance:{SL:5,CL:4,PL:10}}
  var date1=new Date(this.from_date);
  var date2=new Date(this.to_date)
  console.log("sdc",date2.getDate())
  var dayMilliseconds = 1000 * 3600 * 24;
 this.Total_day=date2.getDate()-date1.getDate();;
 var weekendDays = 0;
 while (date1 <= date2) {
   var remain = date1.getDay()
   if (remain == 0) {
     weekendDays++;
   }
 else if(remain ==6){
     weekendDays++;
   }
   date1 = new Date(+date1 + dayMilliseconds);
 }
 this.day=this.Total_day-weekendDays;
 console.log("Total day",this.Total_day,"Week days",weekendDays,"Remain days",this.day)
  if(this.leave_type=="sick"&&this.day>this.Emp_data.leave_balance["SL"]){
    
this.presentToast("Your  Total sick leave 5 Days Only");

  }
  else if(this.leave_type=="sick"&&this.day<=this.Emp_data.leave_balance["SL"]){
    let sick=this.Emp_data.leave_balance["SL"]
    var remaing=sick-this.day;
    console.log("remain"+remaing)
  }
 else if(this.leave_type=="causal"&&this.day>this.Emp_data.leave_balance["CL"]){
    this.presentToast("Your Total causal leave 4 Days Only");
    
        }
        else if(this.leave_type=="causal"&&this.day<=this.Emp_data.leave_balance["CL"]){
          let causal=this.Emp_data.leave_balance["CL"]
          var remaing=causal-this.day;
          console.log("remain"+remaing)
        }
      else if(this.leave_type=="paid"&&this.day>this.Emp_data.leave_balance["PL"]){
          this.presentToast("Your Total Paid leave 10 Days Only");
              }
              else if(this.leave_type=="paid"&&this.day<=this.Emp_data.leave_balance["PL"]){
                let paid=this.Emp_data.leave_balance["PL"]
                var remaing=paid-this.day;
                console.log("remain"+remaing)
              }
  this.doct={
    "doc_id":this.doc_id,
    "doc_name":this.doc_name,
    "doc_status":this.doc_status,
    "upload_dt":this.file,
    "comments":this.reson,
    "reviewed_by":this.reviewed_by,
    "reviewed_dt":this.reviewed_dt
  }

  this.leaveData={
    "emp-name":this.emp_name ,
    // "name":this.namelist,
    // "place":this.Place,
    "emp-id":this.emp_id,
    "leaveType":this.leave_type,
    "start Date":this.from_date,
    "end Date":this.to_date,
    "cmds":this.reson,
    "file":this.doct,
    "Days":this.day,
    "approver cmds":this.approve_cmds,
    "Read Date":this.read_date,
    "Read_by":this.read_by,
    "Status":this.status

   
  }
this.record=  JSON.stringify(this.leaveData)
  //  console.log("data",);
   console.log("rec",this.record,this.datas)
   this.datas.push(this.record);


} 
toggleLang(togEvent){
  console.log("value"+ togEvent.target.checked);
  if(togEvent.target.checked){
   this.searchlist=true
   this.label=false
   this.label1=true
    // this.logresData = this.http.get('http://localhost:port/assets/db.json')
  }
  else{
    this.searchlist=false
    this.label=true
    this.label1=false
    this.showDetails=false;
    
    // this.logresData = this.http.get(this.domainURL+"/resource?pageId=0&langCd=en&clientId=20000&modId=2");
  }
 

}


}
