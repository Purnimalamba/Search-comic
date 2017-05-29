import { Component, OnInit } from '@angular/core';
import {MyServiceService} from '../my-service.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(public MyService:MyServiceService, public router:Router) { }
flag=1;
SeriesName:string[]= [];
action: string = "Add";
  actions: string[] = ["Add","update"]
  type: string = "Series";
  types: string[] = ["Series","Season","Episode"]
  serie: string = "Series";
  series: string[] = []
Role;
addSeason=0;
addSeries=0;
addEpisode=0;
updateSeries=0;
Data=[{

}];


 onsubmit(value1,value2){
   if( value1=="Add" && value2=="Series" ){
  
   this.addSeries=1;
  this.flag=0;
}
if( value1=="Add" && value2=="Season" ){
    this.addSeason=1;
     this.flag=0;
}

if( value1=="Add" && value2=="Episode" ){
    this.addEpisode=1;
     this.flag=0;
}
 if( value1=="Update" && value2=="Series" ){
  
   this.updateSeries=1;
  this.flag=0;
}

 }



 onDelete(id){
 this.MyService.DeleteSeries({id: id}).subscribe(res=>{
    
      console.log(id);
      alert("user deleted");
     
  })
}
  ngOnInit() {
  var i;
  this.MyService.getSeries().subscribe(res=>{
    console.log(res.respData.data.length);
    // for(i=0;i<=res.respData.data.length;i++){
    // this.SeriesName= res.respData.data[i].name;
    // this.series[]=this.SeriesName[];
    // console.log(this.series);
    // }
    this.Data=res.respData.data;
    // this.SeriesName=res.respData.data[0].name;
  
    console.log(this.Data);
  })
  }

}
