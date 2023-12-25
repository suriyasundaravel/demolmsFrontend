import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { DataService } from '../services/data.service';
// import { Console } from 'console';
// import { Storage } from '@ionic/storage-angular';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  @Input() name: any=[]; 
  emp_name:string
  emp_id:any
  leave_type:any
  start_date:any
  end_date:any
  cmds:any
  file:any
  read_by:any
  status:any
  doct:any=[]
  reson:any
  day:any
 Total_day:any
  remain:any
  doc_id:any
  doc_name:any
  doc_status:any
  reviewed_by:any
  reviewed_dt:any

  approve_cmds:any
  public datas:any=[];
  public proData:any=[];
  // public showData:any=[]
  public showDetails: boolean = false;
public leaveData:any
public record:any
  constructor(public toastController: ToastController,public dataService:DataService,public router: ActivatedRoute) {}
  public rec:any=[]
  getValue:any=[]
  item:any
  ngOnInit(){
    
    // let expParam=this.router.paramMap.subscribe(params => { 
    //   this.getValue.push(params)
    //   console.log("Rev Param >>", params,JSON.stringify( this.getValue));
    //   // this.passGstTypePercent= this.moneymngt.getGstTypePer();
    //   // console.log("GST Type percent"+JSON.stringify(this.passGstTypePercent));
    //   let expParam = params.get("Id"+"Dates"+"Reson");
      
    //   let expId = 0;
    //   if(!isNaN(parseInt(expParam))){
    //     expId = parseInt(expParam);       
    //   }
    //   console.log("expId >>", expId);
    //   let curRec = this.getValue[0];
    //   this.start_date = curRec["Dates"];
    //   console.log("w",  this.leave_type = curRec["Reson"]
    //   )
    //   // this.rev_farm = curRec["re_farm"];
    //   // this.rev_cost = curRec["re_cost"];
    //   // this.rev_cust = curRec["re_customer"];
    //   // this.rev_pending_payment=curRec["re_pending_payment"];
    //   // this.rev_prod_type=curRec["re_product_type"];
    //   // this.rev_buyer=curRec["re_buyer"]
      
    // });
    
//     this.getValue.push(expParam)
//  console.log("ks",this.getValue)
// this.rec= {name:"arun",id:23}
//   this.proData=this.dataService.getdata();
//     console.log("aef"+JSON.stringify(this.proData))
//     }
//     leaves:any
//     async presentToast(msg:string) {
//       const toast = await this.toastController.create({
//         message: msg,
//         //duration: 2000,
//         position: 'middle',
//         buttons : [
//           {
//             text: 'Close',
//             role : 'cancel',
//             handler : () => {
//               console.log('Close clicked..');               
//               // this.router.navigate(['/form']);
        
//             }
//           }
//         ]
//         //color: 'green'
//       });
//       toast.present();
    }
    public Emp_data:any=[]
   leave_Date:any;
   
//   saveRecord(){
//     this.showDetails=true
//     this.Emp_data= {name:"Dinesh",id:45,leave_balance:{SL:5,CL:4,PL:10}}
//     var date1=new Date(this.start_date);
//     var date2=new Date(this.end_date)
//     console.log("sdc",date2.getDate())
//     var dayMilliseconds = 1000 * 3600 * 24;
//    this.Total_day=date2.getDate()-date1.getDate();;
//    var weekendDays = 0;
//    while (date1 <= date2) {
//      var remain = date1.getDay()
//      if (remain == 0) {
//        weekendDays++;
//      }
//    else if(remain ==6){
//        weekendDays++;
//      }
//      date1 = new Date(+date1 + dayMilliseconds);
//    }
//    this.day=this.Total_day-weekendDays;
//    console.log("Total day",this.Total_day,"Week days",weekendDays,"Remain days",this.day)
//     if(this.leave_type=="sick"&&this.day>this.Emp_data.leave_balance["SL"]){
      
// this.presentToast("Your  Total sick leave 5 Days Only");

//     }
//     else if(this.leave_type=="sick"&&this.day<=this.Emp_data.leave_balance["SL"]){
//       let sick=this.Emp_data.leave_balance["SL"]
//       var remaing=sick-this.day;
//       console.log("remain"+remaing)
//     }
//    else if(this.leave_type=="causal"&&this.day>this.Emp_data.leave_balance["CL"]){
//       this.presentToast("Your Total causal leave 4 Days Only");
      
//           }
//           else if(this.leave_type=="causal"&&this.day<=this.Emp_data.leave_balance["CL"]){
//             let causal=this.Emp_data.leave_balance["CL"]
//             var remaing=causal-this.day;
//             console.log("remain"+remaing)
//           }
//         else if(this.leave_type=="paid"&&this.day>this.Emp_data.leave_balance["PL"]){
//             this.presentToast("Your Total Paid leave 10 Days Only");
//                 }
//                 else if(this.leave_type=="paid"&&this.day<=this.Emp_data.leave_balance["PL"]){
//                   let paid=this.Emp_data.leave_balance["PL"]
//                   var remaing=paid-this.day;
//                   console.log("remain"+remaing)
//                 }
//     this.doct={
//       "doc_id":this.doc_id,
//       "doc_name":this.doc_name,
//       "doc_status":this.doc_status,
//       "upload_dt":this.file,
//       "comments":this.cmds,
//       "reviewed_by":this.reviewed_by,
//       "reviewed_dt":this.reviewed_dt

//     }
//     this.leaveData={
//       "emp-name":this.emp_name,
//       "emp-id":this.emp_id,
//       "leaveType":this.leave_type,
//       "from_Date":this.start_date,
//       "end_Date":this.end_date,
//       // "cmds":this.cmds,
//       // "file":this.file,
//       "docts":this.doct,
//       "approver cmds":this.approve_cmds,
//       "days":this.day
//     }
//   this.record=  JSON.stringify(this.leaveData)
//     //  console.log("data",);
//      console.log("rec",this.record)
//      this.datas.push(this.record);
//      console.log("datas",this.datas)

//   } 
//   calculate(){
//     var date1=new Date(this.start_date);
//     var date2=new Date(this.end_date)
//     // var sd=date1.getDay();
//     var start = new Date(this.start_date);
// var finish = new Date(this.end_date);
// var dayMilliseconds = 1000 * 60 * 60 * 24;
// var weekendDays = 0;
// while (date1 <= date2) {
//   var day = date1.getDay()
//   if (day == 0) {
//     weekendDays++;
//   }
//   if(day ==6){
//     weekendDays++;
//   }
//   date1 = new Date(+date1 + dayMilliseconds);
// }
// alert(weekendDays);
 
//   }
 
  
}
