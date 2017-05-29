import { Component, OnInit } from '@angular/core';
import {MyServiceService} from '../my-service.service';


@Component({
  selector: 'app-season',
  templateUrl: './season.component.html',
  styleUrls: ['./season.component.css']
})
export class SeasonComponent implements OnInit {

  constructor( public MyService:MyServiceService) {}
  data=[{}];
 onsubmit2(form){
     
    console.log(form.value);
     this.MyService.PostSeason(form.value).subscribe(res=>{
    
   
    console.log(res);
    this.data=res;
  })


 }
 onDelete(id){
 this.MyService.DeleteSeason({id: id}).subscribe(res=>{
    
      console.log(id);
      alert("user deleted");
     
  })
}
  ngOnInit() {
     this.MyService.getSeason().subscribe(res=>{
   
    this.data=res.respData.data;
  
    console.log(this.data);
  })
  }

}
