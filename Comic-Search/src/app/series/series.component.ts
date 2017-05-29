import { Component, OnInit } from '@angular/core';
import {MyServiceService} from '../my-service.service';

@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.css']
})
export class SeriesComponent implements OnInit {

  constructor( public MyService:MyServiceService) {}
 onsubmit1(form){
     
    console.log(form.value);
     this.MyService.PostSeries(form.value).subscribe(res=>{
    
   
    console.log(res);

  })

 }
  ngOnInit() {
  }

}
